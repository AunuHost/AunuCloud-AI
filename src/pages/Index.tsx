import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useAuth } from "@/lib/auth-context";
import {
  activityFeed,
  dashboardStats,
  quickActions,
  workspaceHighlights,
} from "@/data/workspace";

export default function Index() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="glass overflow-hidden rounded-3xl p-6 md:p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  AI workspace overview
                </div>
                <h1 className="text-3xl font-bold text-foreground font-['Space_Grotesk'] md:text-4xl">
                  Welcome back{user?.email ? `, ${user.email.split("@")[0]}` : ""}
                </h1>
                <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
                  AunuCloud now feels like an operating system for AI teams, with conversation
                  ops, agent management, knowledge orchestration, workflows, and analytics in one
                  dashboard.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {workspaceHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/5 bg-background/50 p-4"
                  >
                    <item.icon className="h-5 w-5 text-primary" />
                    <p className="mt-4 text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="mt-3 text-3xl font-bold text-foreground font-['Space_Grotesk']">
                    {stat.value}
                  </p>
                </div>
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  {stat.change}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div>
              <h2 className="text-xl font-semibold text-foreground font-['Space_Grotesk']">
                Quick actions
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Jump into the highest-impact product surfaces used by the team.
              </p>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {quickActions.map((action) => (
                <Link
                  key={action.title}
                  to={action.href}
                  className="group rounded-2xl border border-border bg-secondary/40 p-4 transition-all hover:-translate-y-1 hover:border-primary/30 hover:bg-secondary"
                >
                  <action.icon className="h-5 w-5 text-primary" />
                  <p className="mt-6 text-sm font-semibold text-foreground">{action.title}</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {action.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs font-medium text-primary">
                    Open workspace
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h2 className="text-xl font-semibold text-foreground font-['Space_Grotesk']">
              Recent activity
            </h2>
            <div className="mt-5 space-y-4">
              {activityFeed.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl bg-secondary/30 p-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <span className="text-xs text-muted-foreground">{item.time}</span>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-8 rounded-2xl border border-border bg-card p-6"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold text-foreground font-['Space_Grotesk']">
                Expansion roadmap
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                This project now has a foundation for growing into a serious internal AI platform:
                chat, agents, knowledge, workflows, analytics, and settings are all connected.
              </p>
            </div>
            <Link
              to="/workflows"
              className="inline-flex items-center justify-center rounded-xl gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-opacity hover:opacity-90"
            >
              Continue to workflows
            </Link>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
