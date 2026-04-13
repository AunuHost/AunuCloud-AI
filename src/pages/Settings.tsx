import { motion } from "framer-motion";
import { Bell, Shield, SlidersHorizontal, User } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useAuth } from "@/lib/auth-context";

const preferences = [
  {
    title: "Workspace profile",
    detail: "Manage workspace identity, owners, and account naming conventions.",
    icon: User,
  },
  {
    title: "Security controls",
    detail: "Prepare approval flow, role visibility, and agent access policies.",
    icon: Shield,
  },
  {
    title: "Notifications",
    detail: "Choose alerts for deployments, knowledge sync, and escalations.",
    icon: Bell,
  },
  {
    title: "Behavior tuning",
    detail: "Set assistant tone, default prompt policy, and output formatting.",
    icon: SlidersHorizontal,
  },
] as const;

export default function Settings() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="p-6 md:p-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="glass rounded-3xl p-6 md:p-8">
            <h1 className="text-3xl font-bold text-foreground font-['Space_Grotesk']">
              Workspace Settings
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              The settings area now acts as a real control center for account management, security,
              notifications, and assistant behavior.
            </p>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl border border-border bg-card p-6"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-primary/10 p-3">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground font-['Space_Grotesk']">
                  Account snapshot
                </h2>
                <p className="text-sm text-muted-foreground">Current authenticated workspace</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-secondary/30 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Email
                </p>
                <p className="mt-2 text-sm text-foreground">{user?.email}</p>
              </div>
              <div className="rounded-2xl bg-secondary/30 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Account ID
                </p>
                <p className="mt-2 text-sm font-mono text-foreground">{user?.id}</p>
              </div>
              <div className="rounded-2xl bg-secondary/30 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Recommended next step
                </p>
                <p className="mt-2 text-sm text-foreground">
                  Connect role policy and notification routing before promoting agents to
                  production.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {preferences.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.08 }}
                className="rounded-3xl border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.detail}</p>
                <div className="mt-5 text-xs font-medium text-primary">
                  Configuration surface ready
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
