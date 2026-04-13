import { motion } from "framer-motion";
import { GitBranch, PlayCircle, ShieldCheck } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { workflowMetrics, workflowStages } from "@/data/workspace";

const statusClasses: Record<string, string> = {
  Stable: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  Optimizing: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  Live: "bg-sky-500/10 text-sky-300 border-sky-500/20",
  Queued: "bg-violet-500/10 text-violet-300 border-violet-500/20",
};

export default function Workflows() {
  return (
    <DashboardLayout>
      <div className="p-6 md:p-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="glass rounded-3xl p-6 md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <GitBranch className="h-3.5 w-3.5" />
              Workflow orchestration
            </div>
            <h1 className="mt-4 text-3xl font-bold text-foreground font-['Space_Grotesk'] md:text-4xl">
              Coordinate AI execution across multiple stages
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              This new page expands the product into orchestration, giving the workspace a visible
              layer for intake, retrieval, execution, and review.
            </p>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {workflowMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <p className="mt-3 text-4xl font-bold text-foreground font-['Space_Grotesk']">
                {metric.value}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          {workflowStages.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.08 }}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10">
                      {index === 2 ? (
                        <PlayCircle className="h-4 w-4 text-primary" />
                      ) : index === 3 ? (
                        <ShieldCheck className="h-4 w-4 text-primary" />
                      ) : (
                        <GitBranch className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <h2 className="text-xl font-semibold text-foreground font-['Space_Grotesk']">
                      {stage.title}
                    </h2>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${statusClasses[stage.status]}`}
                    >
                      {stage.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-primary">{stage.owner}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{stage.summary}</p>
                </div>
                <div className="rounded-2xl bg-secondary/30 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Stage
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">0{index + 1}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
