import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "@/types/database.types";
import { userProfileUpdateSchema } from "@/lib/validations/user";

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

    const { name } = userProfileUpdateSchema.parse(json);

    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: name,
      })
      .eq("id", user.id);

    const { error: updateError } = await supabase.auth.updateUser({
      data: {
        full_name: name,
      },
    });

    if (error || updateError) {
      return NextResponse.json(
        {
          error: error?.message || updateError?.message,
        },
        {
          status: 400,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "Profile updated successfully.",
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
