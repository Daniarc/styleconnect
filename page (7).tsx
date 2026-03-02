import { QuizForm } from "@/components/QuizForm";

export default function QuizPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Style Quiz</h1>
      <p className="text-zinc-700">Beantworte 3 kurze Fragen – du bekommst Tags + Empfehlungen.</p>
      <QuizForm />
    </div>
  );
}
