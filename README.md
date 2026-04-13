# AunuCloud AI Workspace

AunuCloud is now structured as a larger AI workspace product instead of a single dashboard and chat demo.

## Product surfaces

- `Dashboard`: high-level workspace overview, activity feed, and quick actions
- `AI Chat`: streaming assistant chat with starter prompts and contextual side panels
- `Agents`: specialist agent monitoring with deployment and capability cards
- `Knowledge`: retrieval-oriented hub for source collections and ingestion flow
- `Workflows`: orchestration view for intake, retrieval, execution, and human review
- `Analytics`: mock operational metrics and weekly performance trend panels
- `Settings`: workspace account, notification, and assistant behavior control center

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Supabase
- shadcn/ui primitives

## Notes

- The new pages currently use product-style mock data from `src/data/workspace.ts`.
- The chat page still points to the existing Supabase edge function for streamed responses.
- Build and test commands were intentionally not run in the latest update, per user request.
