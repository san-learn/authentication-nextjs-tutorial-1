import { isRedirectError } from "next/dist/client/components/redirect-error";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

type Options<T> = {
  actionFunction: () => Promise<T>;
  successMessage?: string;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function executeAction<T>({
  actionFunction,
  successMessage = "The actions was successful",
}: Options<T>): Promise<{ success: boolean; message: string }> {
  try {
    await actionFunction();

    return {
      success: true,
      message: successMessage,
    };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return {
      success: false,
      message: "An error has occurred during executing the action",
    };
  }
}
