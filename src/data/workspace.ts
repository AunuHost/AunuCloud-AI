diff --git a/C:\Users\TIRTA GIRI\Downloads\AunuCloud-AI\src\data\workspace.ts b/C:\Users\TIRTA GIRI\Downloads\AunuCloud-AI\src\data\workspace.ts
new file mode 100644
--- /dev/null
+++ b/C:\Users\TIRTA GIRI\Downloads\AunuCloud-AI\src\data\workspace.ts
@@ -0,0 +1,336 @@
+import {
+  Activity,
+  BarChart3,
+  BookOpen,
+  Bot,
+  BrainCircuit,
+  CreditCard,
+  FileText,
+  GitBranch,
+  LifeBuoy,
+  MessageSquare,
+  PlugZap,
+  Rocket,
+  ShieldCheck,
+  Sparkles,
+  Users,
+  Workflow,
+} from "lucide-react";
+
+export const dashboardStats = [
+  { label: "Live Conversations", value: "1,284", change: "+12%", tone: "up" },
+  { label: "Active Teams", value: "342", change: "+8%", tone: "up" },
+  { label: "Automations", value: "96", change: "+18%", tone: "up" },
+  { label: "Resolved Tickets", value: "98%", change: "+2%", tone: "up" },
+] as const;
+
+export const workspaceHighlights = [
+  {
+    title: "AI command center",
+    description: "Monitor conversations, knowledge health, and agent rollout from one workspace.",
+    icon: Sparkles,
+  },
+  {
+    title: "Automation pipeline",
+    description: "Design triage, support, and content operations without switching tools.",
+    icon: Workflow,
+  },
+  {
+    title: "Knowledge recall",
+    description: "Unify playbooks, FAQs, and product docs for more reliable answers.",
+    icon: BookOpen,
+  },
+] as const;
+
+export const quickActions = [
+  {
+    title: "Open AI chat",
+    description: "Start a real-time conversation with the assistant.",
+    href: "/chat",
+    icon: MessageSquare,
+  },
+  {
+    title: "Manage agents",
+    description: "Review roles, guardrails, and deployment states.",
+    href: "/agents",
+    icon: Bot,
+  },
+  {
+    title: "Review analytics",
+    description: "Track funnel performance, SLA quality, and response health.",
+    href: "/analytics",
+    icon: BarChart3,
+  },
+  {
+    title: "Open workflows",
+    description: "Inspect orchestration stages and automation handoffs.",
+    href: "/workflows",
+    icon: GitBranch,
+  },
+  {
+    title: "Manage team",
+    description: "View owners, roles, and workload distribution across the workspace.",
+    href: "/team",
+    icon: Users,
+  },
+  {
+    title: "Browse integrations",
+    description: "Review connected systems, sync state, and expansion opportunities.",
+    href: "/integrations",
+    icon: PlugZap,
+  },
+] as const;
+
+export const activityFeed = [
+  {
+    title: "Support agent upgraded",
+    detail: "Model routing moved to the enterprise profile for high-priority tickets.",
+    time: "5 minutes ago",
+    icon: Rocket,
+  },
+  {
+    title: "Knowledge sync completed",
+    detail: "48 new internal docs were published into the retrieval index.",
+    time: "18 minutes ago",
+    icon: FileText,
+  },
+  {
+    title: "Weekly SLA improved",
+    detail: "Median first-response time dropped 14% compared with last week.",
+    time: "1 hour ago",
+    icon: Activity,
+  },
+  {
+    title: "CRM integration healthy",
+    detail: "HubSpot sync has stayed green across 1,240 lead enrichment events.",
+    time: "3 hours ago",
+    icon: PlugZap,
+  },
+] as const;
+
+export const activeAgents = [
+  {
+    name: "Support Copilot",
+    role: "Customer support",
+    coverage: "Handles onboarding, billing, and L1 product questions.",
+    status: "Live",
+    tone: "emerald",
+    tasks: 184,
+    accuracy: "97.2%",
+  },
+  {
+    name: "Sales Qualifier",
+    role: "Revenue operations",
+    coverage: "Scores inbound leads and prepares handoff notes for the AE team.",
+    status: "Monitoring",
+    tone: "amber",
+    tasks: 62,
+    accuracy: "91.4%",
+  },
+  {
+    name: "Knowledge Curator",
+    role: "Content operations",
+    coverage: "Detects stale docs, proposes updates, and creates source summaries.",
+    status: "Building",
+    tone: "sky",
+    tasks: 37,
+    accuracy: "95.1%",
+  },
+] as const;
+
+export const agentCapabilities = [
+  {
+    title: "Role templates",
+    detail: "Support, sales, research, and operations profiles with reusable prompts.",
+    icon: BrainCircuit,
+  },
+  {
+    title: "Guardrails",
+    detail: "Escalation rules, source restrictions, and approval gates per workflow.",
+    icon: ShieldCheck,
+  },
+  {
+    title: "Human handoff",
+    detail: "Route high-risk or high-value conversations to the right teammate fast.",
+    icon: LifeBuoy,
+  },
+] as const;
+
+export const knowledgeCollections = [
+  {
+    name: "Product Documentation",
+    sources: 128,
+    freshness: "Updated 2 hours ago",
+    coverage: "API references, release notes, and feature guides",
+  },
+  {
+    name: "Customer Success Playbooks",
+    sources: 42,
+    freshness: "Updated today",
+    coverage: "Escalation SOPs, retention scripts, and onboarding checklists",
+  },
+  {
+    name: "Sales Objection Library",
+    sources: 26,
+    freshness: "Updated yesterday",
+    coverage: "Battle cards, pricing narratives, and competitor positioning",
+  },
+] as const;
+
+export const ingestionPipeline = [
+  "Connect docs, help center articles, and internal SOPs",
+  "Chunk and enrich records with tags, owners, and freshness metadata",
+  "Review confidence, stale pages, and content coverage gaps",
+  "Publish trusted knowledge to agents and analytics workflows",
+] as const;
+
+export const analyticsOverview = [
+  {
+    title: "Response quality",
+    value: "94.8",
+    suffix: "/100",
+    change: "+4.1 this month",
+  },
+  {
+    title: "Average resolution",
+    value: "6.2",
+    suffix: " min",
+    change: "-1.4 min this week",
+  },
+  {
+    title: "Automation success",
+    value: "82",
+    suffix: "%",
+    change: "+9% vs last period",
+  },
+] as const;
+
+export const analyticsTrends = [
+  { label: "Mon", conversations: 120, resolved: 84 },
+  { label: "Tue", conversations: 146, resolved: 105 },
+  { label: "Wed", conversations: 160, resolved: 119 },
+  { label: "Thu", conversations: 171, resolved: 126 },
+  { label: "Fri", conversations: 188, resolved: 143 },
+] as const;
+
+export const starterPrompts = [
+  "Create a weekly support performance summary and flag the highest-risk anomalies.",
+  "Draft a five-step enterprise onboarding SOP that the team can run next week.",
+  "Analyze customer questions and propose three new knowledge base articles.",
+  "Write a reply for an inbound lead asking for an AI workspace demo.",
+] as const;
+
+export const workflowStages = [
+  {
+    title: "Intake and triage",
+    owner: "Support Ops",
+    summary: "Collect inbound requests, classify urgency, and assign the right agent path.",
+    status: "Stable",
+  },
+  {
+    title: "Knowledge retrieval",
+    owner: "Knowledge Team",
+    summary: "Fetch trusted documents, score relevance, and prepare evidence bundles.",
+    status: "Optimizing",
+  },
+  {
+    title: "Agent execution",
+    owner: "AI Platform",
+    summary: "Run specialist prompts, apply guardrails, and decide whether to escalate.",
+    status: "Live",
+  },
+  {
+    title: "Human review",
+    owner: "Operations Lead",
+    summary: "Approve high-impact outputs and close the loop on risky conversations.",
+    status: "Queued",
+  },
+] as const;
+
+export const workflowMetrics = [
+  { label: "Average handoff time", value: "42 sec" },
+  { label: "Escalation coverage", value: "91%" },
+  { label: "Reusable templates", value: "18" },
+] as const;
+
+export const teamMembers = [
+  {
+    name: "Ava Thompson",
+    role: "AI Platform Lead",
+    focus: "Agent reliability, routing logic, and deployment policy",
+    workload: "High",
+    ownership: "Core platform",
+  },
+  {
+    name: "Noah Kim",
+    role: "Support Operations Manager",
+    focus: "Escalation design, SLA quality, and support automation",
+    workload: "Balanced",
+    ownership: "Support workflows",
+  },
+  {
+    name: "Maya Patel",
+    role: "Knowledge Strategist",
+    focus: "Content freshness, retrieval quality, and source taxonomy",
+    workload: "High",
+    ownership: "Knowledge systems",
+  },
+  {
+    name: "Ethan Brooks",
+    role: "Revenue Operations",
+    focus: "Lead triage, CRM automations, and pipeline alerts",
+    workload: "Focused",
+    ownership: "Go-to-market automation",
+  },
+] as const;
+
+export const teamSignals = [
+  { label: "Workspace owners", value: "4" },
+  { label: "Active reviewers", value: "9" },
+  { label: "Shared runbooks", value: "27" },
+] as const;
+
+export const integrationCategories = [
+  {
+    title: "Support stack",
+    icon: LifeBuoy,
+    description: "Zendesk, Intercom, and SLA monitoring routes",
+  },
+  {
+    title: "Revenue stack",
+    icon: CreditCard,
+    description: "HubSpot, Stripe, and lead qualification automations",
+  },
+  {
+    title: "Knowledge stack",
+    icon: BookOpen,
+    description: "Docs, Notion, and source synchronization pipelines",
+  },
+] as const;
+
+export const connectedIntegrations = [
+  {
+    name: "HubSpot",
+    status: "Connected",
+    sync: "Lead sync every 15 minutes",
+    coverage: "Inbound qualification, account notes, and handoff triggers",
+  },
+  {
+    name: "Slack",
+    status: "Connected",
+    sync: "Escalation alerts in real time",
+    coverage: "Approval requests, deployment alerts, and team summaries",
+  },
+  {
+    name: "Stripe",
+    status: "Review needed",
+    sync: "Billing events delayed by 12 minutes",
+    coverage: "Payment context for support and churn-risk automation",
+  },
+  {
+    name: "Notion",
+    status: "Connected",
+    sync: "Knowledge sync twice daily",
+    coverage: "Runbooks, playbooks, and structured documentation imports",
+  },
+] as const;
