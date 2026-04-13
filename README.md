# AunuCloud AI Workspace

AunuCloud has been expanded into a broader AI workspace product rather than a single dashboard and chat demo.

## Workspace areas

- `Dashboard`: workspace overview, activity feed, and action launcher
- `AI Chat`: streaming assistant chat with starter prompts and context panels
- `Agents`: specialist agent monitoring and operational visibility
- `Knowledge`: retrieval-oriented source collections and ingestion flow
- `Workflows`: orchestration stages across intake, retrieval, execution, and review
- `Analytics`: operational metrics and trend visualization
- `Team`: ownership, workload, and reviewer visibility
- `Integrations`: connected stack overview and sync health
- `Settings`: workspace account and behavior controls

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Supabase
- shadcn/ui primitives

## Implementation notes

- Product-style mock data lives in `src/data/workspace.ts`
- The chat page still streams from the existing Supabase edge function
- Desktop navigation is grouped by workspace and management sections
- Mobile now includes a bottom shortcut rail for core surfaces
- No build, test, or install commands were run during the latest expansion
