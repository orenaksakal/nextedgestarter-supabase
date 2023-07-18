"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";
import {
  userPasswordResetSchema,
  UserPasswordResetType,
} from "@/lib/validations/user";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function ResetPasswordForm({ id }: { id: string }) {
  const supabase = createClientComponentClient();

  const form = useForm<z.infer<typeof userPasswordResetSchema>>({
    resolver: zodResolver(userPasswordResetSchema),
    defaultValues: {
      password: "",
      resetId: id,
    },
  });

  const router = useRouter();

  async function onSubmit(values: UserPasswordResetType) {
    const { error } = await supabase.auth.updateUser({
      password: values.password,
    });

    if (error) {
      return toast.error(error.message);
    }

    toast.success("Password reset successfully");
    router.push(routes.main.signin);
  }

  return (
    <div className={cn("grid gap-6")}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={form.formState.isSubmitting}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              isLoading={form.formState.isSubmitting}
              disabled={form.formState.isSubmitting}
            >
              Reset password
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
