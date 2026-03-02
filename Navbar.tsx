export default function Impressum() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Impressum</h1>
      <div className="rounded-2xl border p-5 text-sm text-zinc-800 space-y-2">
        <p><b>Angaben gemäß § 5 TMG</b></p>
        <p>
          Name / Firma<br />
          Straße Nr.<br />
          PLZ Ort<br />
          Deutschland
        </p>
        <p><b>Kontakt</b><br />E-Mail: hello@example.com</p>
        <p className="text-zinc-600">
          Hinweis: Bitte durch echte Daten ersetzen. (MVP-Template)
        </p>
      </div>
    </div>
  );
}
