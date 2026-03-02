export default async function ResultsPage({
  searchParams
}: {
  searchParams: Promise<{ tags?: string; summary?: string }>;
}) {
  const sp = await searchParams;
  const tags = (sp.tags ?? "").split(",").map(s => s.trim()).filter(Boolean);
  const summary = sp.summary ?? "";

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dein Ergebnis</h1>
      <div className="rounded-2xl border p-5">
        <p className="text-zinc-800">{summary || "—"}</p>
        <p className="mt-2 text-sm text-zinc-600">
          Tags: {tags.length ? tags.join(", ") : "—"}
        </p>
      </div>

      <div className="rounded-2xl border p-5">
        <h2 className="font-semibold">Nächster Schritt</h2>
        <p className="mt-2 text-zinc-700">
          Lade ein Outfit hoch und hol dir KI-Feedback passend zu deinen Tags.
        </p>
        <a className="mt-3 inline-block rounded-xl border px-4 py-2 font-medium no-underline" href="/upload">
          Outfit hochladen
        </a>
      </div>
    </div>
  );
}
