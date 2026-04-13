import {
  BarChart3,
  LayoutDashboard,
  Menu,
  MessageSquare,
  PlugZap,
  Users,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { DashboardSidebar } from "./DashboardSidebar";

const mobileNav = [
  { label: "Home", icon: LayoutDashboard, path: "/" },
  { label: "Chat", icon: MessageSquare, path: "/chat" },
  { label: "Team", icon: Users, path: "/team" },
  { label: "Apps", icon: PlugZap, path: "/integrations" },
  { label: "Stats", icon: BarChart3, path: "/analytics" },
] as const;

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto pb-20 lg:pb-0">
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-background/90 px-4 py-3 backdrop-blur lg:hidden">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm text-foreground"
          >
            <Menu className="h-4 w-4" />
            AunuCloud
          </button>
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {location.pathname === "/" ? "dashboard" : location.pathname.replace("/", "")}
          </span>
        </div>
        {children}
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-background/95 px-2 py-2 backdrop-blur lg:hidden">
        <div className="grid grid-cols-5 gap-1">
          {mobileNav.map((item) => {
            const active = location.pathname === item.path;
            return (
              <button
                key={item.path}
                type="button"
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-[11px] transition-colors ${
                  active ? "bg-primary/10 text-primary" : "text-muted-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
