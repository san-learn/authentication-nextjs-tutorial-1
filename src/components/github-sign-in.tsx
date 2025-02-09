import { gitHubSignIn } from "@/actions/authentication";

import { Button } from "@/components/ui/button";
import { GitHub } from "@/components/ui/github";

export function GitHubSignIn() {
  return (
    <form action={gitHubSignIn}>
      <Button className="w-full" variant="outline">
        <GitHub />
        Continue with GitHub
      </Button>
    </form>
  );
}
