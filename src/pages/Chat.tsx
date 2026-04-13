import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Bot, Loader2, Send, Sparkles, User } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { starterPrompts } from "@/data/workspace";

type Message = { role: "user" | "assistant"; content: string };

const assistantContext = [
  { label: "Mode", value: "Workspace strategist" },
  { label: "Knowledge scope", value: "Product docs, SOPs, and analytics summaries" },
  { label: "Response style", value: "Actionable, concise, and team-friendly" },
] as const;

const suggestedThreads = [
  "Weekly support report",
  "Enterprise onboarding SOP",
  "Knowledge gap analysis",
] as const;

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const pushPrompt = (prompt: string) => {
    setInput(prompt);
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: input.trim() };
    setInput("");
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    let assistantSoFar = "";
    const allMessages = [...messages, userMsg];

    try {
      const resp = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: allMessages }),
      });

      if (!resp.ok || !resp.body) {
        throw new Error("Failed to connect to AI");
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, newlineIndex);
          buffer = buffer.slice(newlineIndex + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantSoFar += content;
              setMessages((prev) => {
                const last = prev[prev.length - 1];
                if (last?.role === "assistant") {
                  return prev.map((message, index) =>
                    index === prev.length - 1
                      ? { ...message, content: assistantSoFar }
                      : message,
                  );
                }
                return [...prev, { role: "assistant", content: assistantSoFar }];
              });
            }
          } catch {
            buffer = `${line}\n${buffer}`;
            break;
          }
        }
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="grid h-full grid-cols-1 xl:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="hidden border-r border-border bg-card/40 p-6 xl:block">
          <div className="rounded-3xl border border-primary/15 bg-primary/5 p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl gradient-primary p-3 shadow-glow">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">AI workspace chat</p>
                <p className="text-xs text-muted-foreground">Context-aware copiloting</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {assistantContext.map((item) => (
                <div key={item.label} className="rounded-2xl bg-background/60 p-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-border bg-card p-5">
            <p className="text-sm font-semibold text-foreground">Suggested threads</p>
            <div className="mt-4 space-y-2">
              {suggestedThreads.map((thread) => (
                <button
                  key={thread}
                  type="button"
                  onClick={() => pushPrompt(`Help me create a ${thread.toLowerCase()}.`)}
                  className="w-full rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-left text-sm text-foreground transition-colors hover:border-primary/30 hover:bg-secondary"
                >
                  {thread}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex h-full flex-col">
          <div className="border-b border-border px-4 py-4 md:px-6">
            <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground font-['Space_Grotesk']">
                  AI Chat Console
                </h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  Use a starter prompt or free-form chat for strategy, support, and operations
                  work.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {starterPrompts.slice(0, 2).map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => pushPrompt(prompt)}
                    className="rounded-full border border-border bg-secondary/40 px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-auto px-4 py-6 md:px-6">
            <div className="mx-auto max-w-5xl">
              {messages.length === 0 && (
                <div className="mb-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="glass rounded-3xl p-6">
                    <div className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Ready for deeper work
                    </div>
                    <h2 className="text-3xl font-bold text-foreground font-['Space_Grotesk']">
                      Start with prompts that feel like real team workflows.
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                      This workspace is no longer just an empty chat shell. It now gives direction
                      for support operations, knowledge management, and planning work.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-border bg-card p-6">
                    <p className="text-sm font-semibold text-foreground">Starter prompts</p>
                    <div className="mt-4 space-y-3">
                      {starterPrompts.map((prompt) => (
                        <button
                          key={prompt}
                          type="button"
                          onClick={() => pushPrompt(prompt)}
                          className="w-full rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-left text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-secondary"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <AnimatePresence initial={false}>
                  {messages.map((msg, i) => (
                    <motion.div
                      key={`${msg.role}-${i}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
                          msg.role === "user"
                            ? "bg-primary/20 text-primary"
                            : "gradient-primary text-primary-foreground"
                        }`}
                      >
                        {msg.role === "user" ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                      </div>
                      <div
                        className={`max-w-[85%] rounded-3xl px-5 py-4 text-sm leading-6 ${
                          msg.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "border border-border bg-card text-foreground"
                        }`}
                      >
                        {msg.role === "assistant" ? (
                          <div className="prose prose-sm prose-invert max-w-none">
                            <ReactMarkdown>{msg.content}</ReactMarkdown>
                          </div>
                        ) : (
                          msg.content
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl gradient-primary">
                      <Bot className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="flex items-center gap-2 rounded-3xl border border-border bg-card px-5 py-4">
                      <Loader2 className="h-4 w-4 animate-spin text-primary" />
                      <span className="text-sm text-muted-foreground">Thinking...</span>
                    </div>
                  </motion.div>
                )}
                <div ref={bottomRef} />
              </div>
            </div>
          </div>

          <div className="border-t border-border px-4 py-4 md:px-6">
            <form onSubmit={sendMessage} className="mx-auto flex max-w-5xl gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-2xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="flex items-center justify-center rounded-2xl gradient-primary px-4 py-3 text-primary-foreground shadow-glow transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
