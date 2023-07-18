import { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { ChevronLeft } from "lucide-react";

import { Database } from "@/types/database.types";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserSigninForm } from "@/components/forms/user-signin-form";
import { Logo } from "@/components/icons/logo";

export default async function SigninPage() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect(routes.main.dashboard);
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href={routes.main.landing}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Logo className="mx-auto h-6 w-6" />
          <h1 className="font-heading text-2xl font-semibold tracking-tight">
            Welcome back 👋
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account.
          </p>
        </div>

        <UserSigninForm />

        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href={routes.main.signup}
            className="hover:text-brand underline underline-offset-4"
          >
            Don&apos;t have an account yet? Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Sign in | Next Edge Starter",
  description:
    "Next Edge Starter is enterprise ready comprehensive Next.js starter kit for building and launching modern web applications.",
};
