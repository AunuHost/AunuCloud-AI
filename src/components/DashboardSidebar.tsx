import type { ComponentType } from "react";
import { useAuth } from "@/lib/auth-context";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BarChart3,
  BookOpen,
  Bot,
  GitBranch,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  PlugZap,
  Settings,
  Users,
  Zap,
} from "lucide-react";

const workspaceNav = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { label: "AI Chat", icon: MessageSquare, path: "/chat" },
  { label: "Agents", icon: Bot, path: "/agents" },
  { label: "Knowledge", icon: BookOpen, path: "/knowledge" },
  { label: "Workflows", icon: GitBranch, path: "/workflows" },
  { label: "Analytics", icon: BarChart3, path: "/analytics" },
] as const;

const managementNav = [
  { label: "Team", icon: Users, path: "/team" },
  { label: "Integrations", icon: PlugZap, path: "/integrations" },
  { label: "Settings", icon: Settings, path: "/settings" },
] as const;

function NavSection({
  items,
  locationPath,
  navigate,
  title,
}: {
  items: readonly { label: string; icon: ComponentType<{ className?: string }>; path: string }[];
  locationPath: string;
  navigate: (path: string) => void;
  title: string;
}) {
  return (
    <div>
      <p className="px-3 pb-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {title}
      </p>
      <div className="space-y-1">
        {items.map((item) => {
          const active = locationPath === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                active
                  ? "bg-sidebar-accent text-primary"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function DashboardSidebar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="hidden h-screen w-72 flex-col border-r border-border bg-sidebar lg:flex">
      <div className="flex items-center gap-3 border-b border-border px-5 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary shadow-glow">
          <Zap className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <span className="block text-lg font-bold tracking-tight text-foreground font-['Space_Grotesk']">
            AunuCloud
          </span>
          <span className="text-xs text-muted-foreground">AI Workspace</span>
        </div>
      </div>

      <div className="border-b border-border px-4 py-4">
        <div className="rounded-2xl border border-primary/15 bg-primary/5 p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Workspace</p>
          <p className="mt-2 text-sm font-semibold text-foreground">Enterprise operating view</p>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Conversation, orchestration, people, and integrations now live inside one shared
            product shell.
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-6 overflow-auto px-3 py-4">
        <NavSection
          items={workspaceNav}
          locationPath={location.pathname}
          navigate={navigate}
          title="Workspace"
        />
        <NavSection
          items={managementNav}
          locationPath={location.pathname}
          navigate={navigate}
          title="Management"
        />
      </nav>

      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3 rounded-2xl bg-card/60 px-3 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
            {user?.email?.[0]?.toUpperCase() ?? "U"}
          </div>
          <div className="flex-1 truncate">
            <p className="truncate text-sm font-medium text-foreground">{user?.email}</p>
            <p className="text-xs text-muted-foreground">Workspace owner</p>
          </div>
          <button
            onClick={signOut}
            className="rounded-md p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
            title="Sign out"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
