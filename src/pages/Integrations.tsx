import { motion } from "framer-motion";
import { CheckCircle2, PlugZap } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { connectedIntegrations, integrationCategories } from "@/data/workspace";

const statusClasses: Record<string, string> = {
  Connected: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  "Review needed": "bg-amber-500/10 text-amber-300 border-amber-500/20",
};

export default function Integrations() {
  return (
    <DashboardLayout>
      <div className="p-6 md:p-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="glass rounded-3xl p-6 md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <PlugZap className="h-3.5 w-3.5" />
              Integrations
            </div>
            <h1 className="mt-4 text-3xl font-bold text-foreground font-['Space_Grotesk'] md:text-4xl">
              Connect the workspace to your operating stack
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              This page adds another product layer by turning the app into a hub for support,
              revenue, and knowledge system integrations.
            </p>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {integrationCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <category.icon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="mt-5 text-lg font-semibold text-foreground font-['Space_Grotesk']">
                {category.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-4">
          {connectedIntegrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.08 }}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-semibold text-foreground font-['Space_Grotesk']">
                      {integration.name}
                    </h2>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${statusClasses[integration.status]}`}
                    >
                      {integration.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {integration.coverage}
                  </p>
                </div>
                <div className="rounded-2xl bg-secondary/30 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Sync state
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {integration.sync}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
