import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "StyleConnect",
  description: "Discover your style and get outfit feedback."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Navbar />
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <footer className="mx-auto max-w-5xl px-4 py-10 text-sm text-zinc-600">
          <div className="flex gap-4">
            <a href="/legal/impressum">Impressum</a>
            <a href="/legal/datenschutz">Datenschutz</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
