import { motion } from "framer-motion";
import { BookOpen, Database, Files, RefreshCcw } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { ingestionPipeline, knowledgeCollections } from "@/data/workspace";

export default function Knowledge() {
  return (
    <DashboardLayout>
      <div className="p-6 md:p-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="glass rounded-3xl p-6 md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <BookOpen className="h-3.5 w-3.5" />
              Knowledge hub
            </div>
            <h1 className="mt-4 text-3xl font-bold text-foreground font-['Space_Grotesk'] md:text-4xl">
              Centralize trusted sources before agents answer
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              This page expands the project into retrieval and knowledge operations so the app no
              longer stops at a chat interface.
            </p>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {knowledgeCollections.map((collection, index) => (
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-border bg-card p-6"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-foreground font-['Space_Grotesk']">
                      {collection.name}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">{collection.coverage}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <div className="rounded-2xl bg-secondary/30 px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        Sources
                      </p>
                      <p className="mt-1 text-lg font-semibold text-foreground">
                        {collection.sources}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-secondary/30 px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        Freshness
                      </p>
                      <p className="mt-1 text-sm font-semibold text-foreground">
                        {collection.freshness}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl border border-border bg-card p-6"
          >
            <h2 className="text-xl font-semibold text-foreground font-['Space_Grotesk']">
              Ingestion pipeline
            </h2>

            <div className="mt-5 space-y-3">
              {ingestionPipeline.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl bg-secondary/30 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-6 text-foreground">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-background/40 p-4">
                <Database className="h-4 w-4 text-primary" />
                <p className="mt-3 text-sm font-semibold text-foreground">Structured records</p>
              </div>
              <div className="rounded-2xl border border-border bg-background/40 p-4">
                <Files className="h-4 w-4 text-primary" />
                <p className="mt-3 text-sm font-semibold text-foreground">Versioned documents</p>
              </div>
              <div className="rounded-2xl border border-border bg-background/40 p-4">
                <RefreshCcw className="h-4 w-4 text-primary" />
                <p className="mt-3 text-sm font-semibold text-foreground">Sync automation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
