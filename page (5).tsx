import { AuthForm } from "@/components/AuthForm";

export default function AuthPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Login / Signup</h1>
      <AuthForm />
    </div>
  );
}
