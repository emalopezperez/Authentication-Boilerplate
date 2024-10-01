"use server";
import bcrypt from "bcryptjs";

import { db } from "@/lib/prismaDb";
import * as z from "zod";
import { RegisterShema } from "@/schemas";
import { getUserByEmail } from "../../data/user";
import { signIn } from "@/auth";


export const register = async (values: z.infer<typeof RegisterShema>) => {
  const validateFields = RegisterShema.safeParse(values);

  if (!validateFields.success) {
    return {
      error: validateFields.error.errors
        .map((err: { message: string }) => err.message)
        .join(", "),
    };
  }

  const { email, password, name } = validateFields.data;

  const userFound = await getUserByEmail(email);

  if (userFound) {
    return { error: "El correo electrónico está en uso" };
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    if (newUser) {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
    }

    return {
      success: "Usuario registrado correctamente",
    };
  } catch (err) {
    console.error("Error al registrar el usuario:", err);
    return { error: "Error al registrar el usuario" };
  }
};
