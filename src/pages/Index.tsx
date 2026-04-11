import { DashboardLayout } from '@/components/DashboardLayout';
import { motion } from 'framer-motion';
import { MessageSquare, Users, Zap, TrendingUp } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';

const stats = [
  { label: 'Total Chats', value: '1,284', icon: MessageSquare, change: '+12%' },
  { label: 'Active Users', value: '342', icon: Users, change: '+8%' },
  { label: 'AI Responses', value: '5,621', icon: Zap, change: '+24%' },
  { label: 'Satisfaction', value: '98%', icon: TrendingUp, change: '+2%' },
];

export default function Index() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="p-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-foreground font-['Space_Grotesk']">
            Welcome back{user?.email ? `, ${user.email.split('@')[0]}` : ''}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Here's an overview of your AI assistant performance.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-5"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-primary/10 p-2">
                  <stat.icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-xs font-medium text-primary">{stat.change}</span>
              </div>
              <p className="mt-4 text-2xl font-bold text-foreground font-['Space_Grotesk']">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 rounded-xl border border-border bg-card p-6"
        >
          <h2 className="text-lg font-semibold text-foreground font-['Space_Grotesk']">
            Quick Actions
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <a
              href="/chat"
              className="flex items-center gap-3 rounded-lg border border-border bg-secondary/50 p-4 transition-colors hover:border-primary/30 hover:bg-secondary"
            >
              <MessageSquare className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Start New Chat</p>
                <p className="text-xs text-muted-foreground">Talk to AI assistant</p>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-secondary/50 p-4 opacity-50">
              <Users className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">Team Members</p>
                <p className="text-xs text-muted-foreground">Coming soon</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-secondary/50 p-4 opacity-50">
              <Zap className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">Integrations</p>
                <p className="text-xs text-muted-foreground">Coming soon</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
