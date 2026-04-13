import { motion } from "framer-motion";
import { ArrowRight, Bot, CheckCircle2 } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { activeAgents, agentCapabilities } from "@/data/workspace";

const toneClasses: Record<string, string> = {
  emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  amber: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  sky: "bg-sky-500/10 text-sky-300 border-sky-500/20",
};

export default function Agents() {
  return (
    <DashboardLayout>
      <div className="p-6 md:p-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="glass rounded-3xl p-6 md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Bot className="h-3.5 w-3.5" />
              Agent management
            </div>
            <h1 className="mt-4 text-3xl font-bold text-foreground font-['Space_Grotesk'] md:text-4xl">
              Build and monitor specialized AI agents
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Each agent now has a role, coverage area, and deployment state. This page expands
              the project beyond a single chat UI into a richer product surface for quality
              control and operations.
            </p>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {activeAgents.map((agent, index) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-border bg-card p-6"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-xl font-semibold text-foreground font-['Space_Grotesk']">
                        {agent.name}
                      </h2>
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-medium ${toneClasses[agent.tone]}`}
                      >
                        {agent.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-primary">{agent.role}</p>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                      {agent.coverage}
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-secondary/30 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        Tasks this week
                      </p>
                      <p className="mt-2 text-2xl font-bold text-foreground">{agent.tasks}</p>
                    </div>
                    <div className="rounded-2xl bg-secondary/30 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        Accuracy
                      </p>
                      <p className="mt-2 text-2xl font-bold text-foreground">{agent.accuracy}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-primary">
                  View deployment workflow
                  <ArrowRight className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl border border-border bg-card p-6"
          >
            <h2 className="text-xl font-semibold text-foreground font-['Space_Grotesk']">
              Core capabilities
            </h2>
            <div className="mt-5 space-y-4">
              {agentCapabilities.map((item) => (
                <div key={item.title} className="rounded-2xl bg-secondary/30 p-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-primary/10 p-2.5">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-primary/15 bg-primary/5 p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                <p className="text-sm leading-6 text-muted-foreground">
                  This surface is now ready to grow into agent CRUD, assignment rules, and
                  deployment history once backend workflows are connected.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
