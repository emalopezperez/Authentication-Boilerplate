"use server";
import * as z from "zod";
import { LoginShema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginShema>) => {
  const validateFields = LoginShema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid login" };
  }

  const { email, password } = validateFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return { succes: "Succes" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Someting went wrong" };
      }
    }
    throw error;
  }
};
