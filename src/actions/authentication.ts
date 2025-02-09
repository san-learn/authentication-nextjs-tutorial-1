"use server";

import { userSchema } from "@/schema/user-schema";

import { signIn } from "@/libraries/authentication";
import { prisma } from "@/libraries/prisma";
import { executeAction } from "@/libraries/utilities";

export async function credentialsSignUp(formData: FormData) {
  return executeAction({
    actionFunction: async () => {
      const email = formData.get("email");
      const password = formData.get("password");

      const validatedData = userSchema.parse({
        email: email,
        password: password,
      });

      await prisma.user.create({
        data: {
          email: validatedData.email.toLowerCase(),
          password: validatedData.password,
        },
      });
    },
  });
}

export async function credentialsSignIn(formData: FormData) {
  await executeAction({
    actionFunction: async () => {
      await signIn("credentials", formData);
    },
  });
}

export async function gitHubSignIn() {
  await executeAction({
    actionFunction: async () => {
      await signIn("github");
    },
  });
}
