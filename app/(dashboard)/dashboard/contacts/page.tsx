import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PersonIcon } from "@radix-ui/react-icons";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "@/types/database.types";
import { routes } from "@/config/routes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AddContactModal } from "@/components/dialogs/add-contact-dialog";

export default async function ContactsPage() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect(routes.main.signin);
  }

  const { data: contacts } = await supabase
    .from("contacts")
    .select()
    .eq("userId", user.id);

  return (
    <div className="">
      <div className="flex justify-end pb-4">
        <AddContactModal />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {contacts?.map((contact) => {
          return (
            <Card key={contact.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {contact.name}
                </CardTitle>
                <PersonIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">{contact.email}</p>
              </CardContent>
            </Card>
          );
        })}
        {!contacts?.length && (
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-muted-foreground">
              You don't have any contacts yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export const metadata: Metadata = {
  title: "Contacts | Next Edge Starter",
  description:
    "Next Edge Starter is enterprise ready comprehensive Next.js starter kit for building and launching modern web applications.",
};
