import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "@/types/database.types";
import { routes } from "@/config/routes";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UpgradeButton } from "@/components/upgrade-button";

export default async function SettingsProfilePage() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect(routes.main.signin);
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Get access to premium features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">Only $9</div>
        </CardContent>
        <CardFooter>
          <UpgradeButton />
        </CardFooter>
      </Card>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Billing | Next Edge Starter",
  description:
    "Next Edge Starter is enterprise ready comprehensive Next.js starter kit for building and launching modern web applications.",
};
