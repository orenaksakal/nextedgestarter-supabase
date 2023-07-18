import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "@/types/database.types";
import { createContactSchema } from "@/lib/validations/contact";

export const POST = async (request: NextRequest) => {
  try {
    const json = await request.json();
    const supabase = createRouteHandlerClient<Database>({ cookies });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        {
          error: "Not authorized",
        },
        {
          status: 401,
        }
      );
    }

    const { name, email } = createContactSchema.parse(json);

    const { error } = await supabase.from("contacts").insert({
      name,
      email,
      userId: user.id,
    });

    console.log({ error });

    if (error) {
      return NextResponse.json(
        {
          error: error.message,
        },
        {
          status: 400,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "Contact created successfully.",
        },
        {
          status: 200,
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: "Something went wrong, please try again later.",
      },
      {
        status: 500,
      }
    );
  }
};
