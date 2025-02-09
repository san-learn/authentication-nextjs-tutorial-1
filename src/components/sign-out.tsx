"use client";

import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";

export function SignOut() {
  async function handleSignOut() {
    await signOut();
  }

  return (
    <div className="flex justify-center">
      <Button variant="destructive" onClick={handleSignOut}>
        Sign Out
      </Button>
    </div>
  );
}
