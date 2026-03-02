import { GalleryGrid } from "@/components/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">AllWorld Gallery</h1>
      <p className="text-zinc-700">Öffentliche Outfits (MVP).</p>
      <GalleryGrid />
    </div>
  );
}
