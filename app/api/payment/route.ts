import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

import { env } from "@/env.mjs";
import { Database } from "@/types/database.types";

export const GET = async (request: NextRequest) => {
  try {
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

    const payload = {
      data: {
        type: "checkouts",
        checkout_options: {
          embed: true,
        },
        attributes: {
          checkout_data: {},
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: "33603",
            },
          },
          variant: {
            data: {
              type: "variants",
              id: "95002",
            },
          },
        },
      },
    };

    const result = await fetch("https://api.lemonsqueezy.com/v1/checkouts", {
      method: "POST",
      headers: {
        Accept: "application/vnd.api+json",
        Authorization: `Bearer ${env.LEMON_SQUEEZY_API_KEY}`,
        "Content-Type": "application/vnd.api+json",
      },
      body: JSON.stringify(payload),
    });

    const response = await result.json();

    return NextResponse.json(
      {
        url: response.data.attributes.url,
      },
      {
        status: 200,
      }
    );
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
