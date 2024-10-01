import * as z from "zod";

export const LoginShema = z.object({
  email: z.string().email({ message: "Correo electronico es requerido" }),
  password: z.string().min(1, { message: "Contraseña es requerida" }),
  role: z.enum(["user", "admin"]).optional().default("user")
});

export const RegisterShema = z.object({
  name: z.string().min(1, { message: "Nombre es requerido" }),
  email: z.string().email({ message: "Correo electronico es requerido" }),
  password: z.string().min(6, { message: "Minimo 6 caracteres" }),
  role: z.enum(["user", "admin"]).optional().default("user")
});
