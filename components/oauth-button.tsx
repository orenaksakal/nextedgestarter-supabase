"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { signIn } from "next-auth/react";

import { env } from "@/env.mjs";
import { routes } from "@/config/routes";
import { capitalize } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface OauthButtonProps {
  provider: "github" | "google";
  icon: React.ReactNode;
  text: string;
  isLoading: boolean;
  isDisabled: boolean;
  setLoading: (state: boolean) => void;
}

export const OauthButton = ({
  provider,
  icon,
  isDisabled,
  setLoading,
  isLoading,
}: OauthButtonProps) => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    return () => setLoading?.(false);
  }, [setLoading]);

  return (
    <Button
      type="button"
      variant="outline"
      isLoading={isLoading}
      disabled={isDisabled}
      onClick={async () => {
        setLoading(true);
        const { error } = await supabase.auth.signInWithOAuth({
          provider: provider,
        });
        router.refresh();
      }}
    >
      <div className="hover:text-gray-12 flex items-center pr-3">{icon}</div>
      <span className="text-gray-12">Sign in with {capitalize(provider)}</span>
    </Button>
  );
};
