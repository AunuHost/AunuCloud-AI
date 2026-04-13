import { motion } from "framer-motion";
import { ShieldCheck, Users } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { teamMembers, teamSignals } from "@/data/workspace";

const workloadClasses: Record<string, string> = {
  High: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  Balanced: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  Focused: "bg-sky-500/10 text-sky-300 border-sky-500/20",
};

export default function Team() {
  return (
    <DashboardLayout>
      <div className="p-6 md:p-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="glass rounded-3xl p-6 md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Users className="h-3.5 w-3.5" />
              Team operations
            </div>
            <h1 className="mt-4 text-3xl font-bold text-foreground font-['Space_Grotesk'] md:text-4xl">
              Organize people, ownership, and review capacity
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              This new area grows the product into a team-facing workspace where ownership,
              workload, and operational accountability are visible.
            </p>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {teamSignals.map((signal, index) => (
            <motion.div
              key={signal.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <p className="text-sm text-muted-foreground">{signal.label}</p>
              <p className="mt-3 text-4xl font-bold text-foreground font-['Space_Grotesk']">
                {signal.value}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.08 }}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-semibold text-foreground font-['Space_Grotesk']">
                      {member.name}
                    </h2>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${workloadClasses[member.workload]}`}
                    >
                      {member.workload}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{member.focus}</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-secondary/30 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Ownership
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      {member.ownership}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-secondary/30 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Review status
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      Active reviewer
                    </div>
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
