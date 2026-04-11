import { DashboardLayout } from '@/components/DashboardLayout';
import { useAuth } from '@/lib/auth-context';
import { motion } from 'framer-motion';
import { User, Shield, Bell } from 'lucide-react';

export default function Settings() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="p-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-bold text-foreground font-['Space_Grotesk']">Settings</h1>
          <p className="mt-1 text-sm text-muted-foreground">Manage your account preferences.</p>
        </motion.div>

        <div className="mt-8 space-y-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <User className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground font-['Space_Grotesk']">Profile</h2>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-muted-foreground">Email</label>
                <p className="text-sm text-foreground">{user?.email}</p>
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Account ID</label>
                <p className="text-sm text-foreground font-mono">{user?.id?.slice(0, 8)}...</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-border bg-card p-6 opacity-50"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-lg font-semibold text-foreground font-['Space_Grotesk']">Security</h2>
            </div>
            <p className="text-sm text-muted-foreground">Coming soon</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-border bg-card p-6 opacity-50"
          >
            <div className="flex items-center gap-3 mb-4">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-lg font-semibold text-foreground font-['Space_Grotesk']">Notifications</h2>
            </div>
            <p className="text-sm text-muted-foreground">Coming soon</p>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
