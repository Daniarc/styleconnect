import { OutfitUpload } from "@/components/OutfitUpload";

export default function UploadPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Outfit Upload</h1>
      <p className="text-zinc-700">Bild hochladen, Tags setzen, KI-Feedback erhalten.</p>
      <OutfitUpload />
    </div>
  );
}
