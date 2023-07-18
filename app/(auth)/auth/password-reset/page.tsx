import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ResetPasswordForm } from "@/components/forms/reset-password-form";
import { Logo } from "@/components/icons/logo";

export default async function PasswordResetPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href={routes.main.signin}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to signin page
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Logo className="mx-auto h-6 w-6" />
          <h1 className="font-heading text-2xl font-semibold tracking-tight">
            Reset your password
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your new password.
          </p>
        </div>
        <ResetPasswordForm id={params.id} />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Reset password | Next Edge Starter",
  description:
    "Next Edge Starter is enterprise ready comprehensive Next.js starter kit for building and launching modern web applications.",
};
