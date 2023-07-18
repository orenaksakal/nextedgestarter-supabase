import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "@/types/database.types";
import { appNavigation, routes } from "@/config/routes";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-account-nav";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect(routes.main.signin);
  }

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40">
        <div className="border-b bg-background">
          <div className="container flex h-16 items-center justify-between py-4">
            <MainNav items={appNavigation.app} />
            <div className="flex flex-row gap-4">
              <Link href={routes.dashboard.billing}>
                <Button variant={"outline"}>Upgrade</Button>
              </Link>
              <UserNav
                name={user?.user_metadata.full_name}
                email={user?.email || ""}
                image={user?.user_metadata.avatar_url}
              />
            </div>
          </div>
        </div>
      </header>
      <div className="container grid">
        <main className="flex w-full flex-col overflow-hidden pt-4">
          {children}
        </main>
      </div>
    </div>
  );
}
