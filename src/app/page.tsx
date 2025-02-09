import { redirect } from "next/navigation";

import { SignOut } from "@/components/sign-out";

import { auth } from "@/libraries/authentication";

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <>
      <div className="bg-gray-100 rounded-lg p-4 text-center mb-6">
        <p className="text-gray-600">Signed in as:</p>

        <p className="font-medium">{session.user?.email}</p>
      </div>

      <SignOut />
    </>
  );
}
