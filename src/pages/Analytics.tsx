import { motion } from "framer-motion";
import { BarChart3, TrendingUp } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { analyticsOverview, analyticsTrends } from "@/data/workspace";

const maxConversations = Math.max(...analyticsTrends.map((item) => item.conversations));

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="p-6 md:p-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="glass rounded-3xl p-6 md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <BarChart3 className="h-3.5 w-3.5" />
              Analytics center
            </div>
            <h1 className="mt-4 text-3xl font-bold text-foreground font-['Space_Grotesk'] md:text-4xl">
              Measure the impact of your AI workspace
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              This analytics surface makes the project feel larger by introducing observability,
              not just execution.
            </p>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {analyticsOverview.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <p className="text-sm text-muted-foreground">{item.title}</p>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-bold text-foreground font-['Space_Grotesk']">
                  {item.value}
                </span>
                <span className="pb-1 text-sm text-muted-foreground">{item.suffix}</span>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <TrendingUp className="h-3.5 w-3.5" />
                {item.change}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 rounded-3xl border border-border bg-card p-6"
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-foreground font-['Space_Grotesk']">
                Weekly performance trend
              </h2>
              <p className="text-sm text-muted-foreground">
                This mock chart establishes the baseline for an analytics panel that can later be
                connected to Supabase data or an event pipeline.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {analyticsTrends.map((item) => (
              <div key={item.label} className="rounded-2xl bg-secondary/20 p-4">
                <div className="flex h-56 items-end gap-3">
                  <div className="flex flex-1 flex-col items-center justify-end gap-2">
                    <div
                      className="w-full rounded-t-2xl bg-primary/90"
                      style={{ height: `${(item.conversations / maxConversations) * 100}%` }}
                    />
                    <span className="text-xs text-muted-foreground">{item.conversations}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-end gap-2">
                    <div
                      className="w-full rounded-t-2xl bg-white/20"
                      style={{ height: `${(item.resolved / maxConversations) * 100}%` }}
                    />
                    <span className="text-xs text-muted-foreground">{item.resolved}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="font-medium text-foreground">{item.label}</span>
                  <span className="text-muted-foreground">conv/res</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
