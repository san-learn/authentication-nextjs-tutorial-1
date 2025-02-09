import Link from "next/link";
import { redirect } from "next/navigation";

import { credentialsSignUp } from "@/actions/authentication";

import { auth } from "@/libraries/authentication";

import { GitHubSignIn } from "@/components/github-sign-in";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default async function Page() {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  async function handleCredentialsSignUp(formData: FormData) {
    "use server";

    const response = await credentialsSignUp(formData);

    if (response.success) {
      redirect("/sign-in");
    }
  }

  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>

      <GitHubSignIn />

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>

        <div className="relative flex justify-center text-sm">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with email
          </span>
        </div>
      </div>

      <form className="space-y-4" action={handleCredentialsSignUp}>
        <Input
          name="email"
          placeholder="Email"
          type="email"
          required
          autoComplete="email"
        />

        <Input
          name="password"
          placeholder="Password"
          type="password"
          required
          autoComplete="new-password"
        />

        <Button className="w-full" type="submit">
          Sign Up
        </Button>
      </form>

      <div className="text-center">
        <Button asChild variant="link">
          <Link href="/sign-in">Already have an account? Sign in</Link>
        </Button>
      </div>
    </div>
  );
}
