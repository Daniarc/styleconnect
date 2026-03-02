"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";

type OutfitRow = {
  id: string;
  image_url: string;
  title: string | null;
  tags: string[];
  created_at: string;
};

export default function ProfilePage() {
  const [email, setEmail] = useState<string | null>(null);
  const [outfits, setOutfits] = useState<OutfitRow[]>([]);

  useEffect(() => {
    const supabase = supabaseBrowser();

    (async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        window.location.href = "/auth";
        return;
      }
      setEmail(data.user.email ?? null);

      const { data: rows } = await supabase
        .from("outfits")
        .select("id,image_url,title,tags,created_at")
        .eq("user_id", data.user.id)
        .order("created_at", { ascending: false });

      setOutfits((rows as any) ?? []);
    })();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Profil</h1>
      <p className="text-zinc-700">Eingeloggt als: {email ?? "—"}</p>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {outfits.map(r => (
          <article key={r.id} className="rounded-2xl border overflow-hidden">
            <img src={r.image_url} alt={r.title ?? "Outfit"} className="w-full h-56 object-cover" />
            <div className="p-4">
              <div className="font-semibold">{r.title ?? "Untitled"}</div>
              <div className="mt-2 text-xs text-zinc-600">{(r.tags ?? []).join(", ")}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
