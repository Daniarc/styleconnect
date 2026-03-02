import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border p-6">
        <h1 className="text-3xl font-bold">StyleConnect</h1>
        <p className="mt-2 text-zinc-700">
          Finde deinen Stil, speichere Outfits und hol dir KI-Feedback für bessere Kombis.
        </p>
        <div className="mt-5 flex gap-3">
          <Link href="/quiz" className="no-underline rounded-xl border px-4 py-2 font-medium">
            Quiz starten
          </Link>
          <Link href="/gallery" className="no-underline rounded-xl border px-4 py-2 font-medium">
            Galerie ansehen
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Quiz", "Kurzer Fragebogen, der Stilpräferenzen in Tags übersetzt."],
          ["Upload", "Outfits hochladen & speichern (Supabase Storage)."],
          ["KI-Feedback", "Konkrete Tipps + Kombi-Ideen per OpenAI."]
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border p-5">
            <h2 className="font-semibold">{t}</h2>
            <p className="mt-2 text-sm text-zinc-700">{d}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
