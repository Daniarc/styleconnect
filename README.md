"use client";

import { useMemo, useState } from "react";

type Reco = { title: string; items: string[]; tags: string[]; reason?: string };

export default function ForYouPage() {
  const [tags, setTags] = useState("minimal, neutral");
  const [loading, setLoading] = useState(false);
  const [recos, setRecos] = useState<Reco[] | null>(null);
  const tagList = useMemo(() => tags.split(",").map(t => t.trim()).filter(Boolean), [tags]);

  async function run() {
    setLoading(true);
    setRecos(null);
    try {
      const r = await fetch("/api/ai/recommend", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tags: tagList })
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j?.detail || "error");
      setRecos(j.recos ?? []);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">For You</h1>
      <p className="text-zinc-700">
        Hybrid Empfehlungen: Regeln wählen Kombis aus, KI erklärt kurz warum (oder Demo-Text ohne API Key).
      </p>

      <div className="rounded-2xl border p-5 space-y-3">
        <label className="block">
          <span className="text-sm">Deine Tags (Komma-getrennt)</span>
          <input className="mt-1 w-full rounded-xl border px-3 py-2" value={tags} onChange={e => setTags(e.target.value)} />
        </label>

        <button onClick={run} disabled={loading || !tagList.length} className="rounded-xl border px-4 py-2 font-medium disabled:opacity-50">
          {loading ? "Lade..." : "Empfehlungen holen"}
        </button>
      </div>

      {recos && (
        <div className="grid gap-4 md:grid-cols-2">
          {recos.map((r) => (
            <div key={r.title} className="rounded-2xl border p-5">
              <h2 className="font-semibold">{r.title}</h2>
              <p className="mt-2 text-sm text-zinc-700">{r.reason ?? "—"}</p>
              <ul className="mt-3 list-disc pl-5 text-sm">
                {r.items.map(it => <li key={it}>{it}</li>)}
              </ul>
              <p className="mt-3 text-xs text-zinc-600">Tags: {r.tags.join(", ")}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
