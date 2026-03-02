export default function Datenschutz() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Datenschutzerklärung</h1>
      <div className="rounded-2xl border p-5 text-sm text-zinc-800 space-y-3">
        <p>
          Diese Vorlage ist ein Startpunkt. Für DSGVO-konformen Launch bitte juristisch prüfen lassen.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Verantwortlicher: (deine Daten)</li>
          <li>Verarbeitete Daten: Login (E-Mail), Outfit-Metadaten, Uploads</li>
          <li>Dienstleister: Supabase (Auth/DB/Storage), OpenAI (Textfeedback)</li>
          <li>Speicherdauer: bis zur Löschung des Accounts / Inhalts</li>
        </ul>
      </div>
    </div>
  );
}
