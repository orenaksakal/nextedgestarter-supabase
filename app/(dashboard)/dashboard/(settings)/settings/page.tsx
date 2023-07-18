import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "@/types/database.types";
import { routes } from "@/config/routes";
import { ProfileSettingsForm } from "@/components/forms/profile-settings-form";

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
      <ProfileSettingsForm name={user.user_metadata.full_name} />
    </div>
  );
}
export const metadata: Metadata = {
  title: "Profile settings | Next Edge Starter",
  description:
    "Next Edge Starter is enterprise ready comprehensive Next.js starter kit for building and launching modern web applications.",
};
