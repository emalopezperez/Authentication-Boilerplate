"use client";

import { useState, useTransition } from "react";
import * as z from "zod";
import { CardWrapper } from "./CardWrapper";
import { Input } from "../ui/input";
import { RegisterShema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { register } from "@/actions/register";
import { Spinner } from "../ui/spinner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { FormError } from "./FormError";
import { FormSuccess } from "./FormSuccess";
import { useRouter } from "next/navigation";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const RegisterForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof RegisterShema>>({
    resolver: zodResolver(RegisterShema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof RegisterShema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      register(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
        if (data?.success) {
          setTimeout(() => {
            router.push(DEFAULT_LOGIN_REDIRECT);
          }, 1500);
        }
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Crear cuenta"
      backButtonLabel="Tienes cuenta ?"
      backButtonHref="/auth/login"
      showSocial>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo electronico</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="emanuel@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}></FormField>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Emanuel"
                      type="text"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}></FormField>

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="*****"
                      type="password"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}></FormField>
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            size="lg"
            type="submit"
            className="w-full"
            disabled={isPending}>
            {!isPending ? (
              <span className="text-md">Registrarse</span>
            ) : (
              <Spinner />
            )}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
