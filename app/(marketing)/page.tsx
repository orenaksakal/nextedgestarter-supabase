import { Metadata } from "next";
import Link from "next/link";
import {
  Atom,
  Component,
  CreditCard,
  Globe,
  LogIn,
  Mail,
  Replace,
  RotateCcw,
  Sun,
  Type,
} from "lucide-react";

import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DemoVideoSection } from "@/components/demo-video";
import LemonButton from "@/components/lemon-button";

const marketingFeatures = [
  {
    icon: <Replace className="h-10 w-10" />,
    title: "Choose Your Stack",
    body: (
      <>
        3 template repos to let you pick what you already love.{" "}
        <strong>Supabase</strong>, <strong>PlanetScale</strong>,{" "}
        <strong>NextAuth</strong>, <strong>Lucia-Auth</strong>, and more.
      </>
    ),
  },
  {
    icon: <Component className="h-10 w-10" />,
    title: "UI Package",
    body: (
      <>
        All the components you need for your next application. Built by the
        wonderful <strong>Shadcn UI</strong>.
      </>
    ),
  },

  {
    icon: <LogIn className="h-10 w-10" />,
    title: "Authentication",
    body: (
      <>
        Protect your pages and API routes and entire app using{" "}
        <strong>next-auth</strong>, <strong>Supabase Auth</strong> or{" "}
        <strong>Lucia-Auth</strong>.
      </>
    ),
  },
  {
    icon: <Mail className="h-10 w-10" />,
    title: "Emails",
    body: (
      <>
        Ready to use email templates with <strong>react-email</strong> and
        pre-configured email service with <strong>resend</strong>.
      </>
    ),
  },
  {
    icon: (
      <div className="flex gap-3 self-start">
        <Type className="h-10 w-10" />
      </div>
    ),
    title: "Serverless DB",
    body: (
      <>
        Choose between <strong>PlanetScale</strong>, and{" "}
        <strong>Supabase</strong> to power your database.
      </>
    ),
  },
  {
    icon: (
      <div className="flex gap-3 self-start">
        <Atom className="h-10 w-10" />
      </div>
    ),
    title: "Next.js 13 & React 18",
    body: (
      <>
        Latest features from Next 13 using the brand new App Router with full
        React 18 support including streaming and server actions.
      </>
    ),
  },
  {
    icon: (
      <div className="flex gap-3 self-start">
        <Type className="h-10 w-10" />
      </div>
    ),
    title: "Full-stack Typesafety",
    body: (
      <>
        Full-stack Typesafety with <strong>zod</strong>. Typesafe database
        querying and easy to manage migrations using <strong>Prisma</strong>.
      </>
    ),
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Edge Compute",
    body: (
      <>
        Ready to deploy on Edge functions to ensure a blazingly fast application
        with optimal UX.
      </>
    ),
  },
  {
    icon: <CreditCard className="h-10 w-10" />,
    title: "Payments",
    body: (
      <>
        Accept one time payments or create subscriptions with{" "}
        <strong>Lemonsqueezy</strong>.
      </>
    ),
  },
  {
    icon: <Sun className="h-10 w-10" />,
    title: "Light & Dark Mode",
    body: (
      <>
        Ready made <strong>light</strong> and <strong>dark</strong> modes.
      </>
    ),
  },
  {
    icon: (
      <div className="flex gap-3 self-start">
        <RotateCcw className="h-10 w-10" />
      </div>
    ),
    title: "Rate limiting",
    body: (
      <>
        Limit requests to your API routes using{" "}
        <strong>upstash-ratelimit</strong>.
      </>
    ),
  },
];

export default function LandingPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center pt-24">
      <div className="px- z-10 min-h-[50vh] w-full max-w-4xl xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-center font-heading text-4xl font-bold text-transparent opacity-0 drop-shadow-sm md:text-7xl/[6rem]"
          style={{ animationDelay: "0.20s", animationFillMode: "forwards" }}
        >
          All-in-one solution to kickstart your Next project
        </h1>
        <p
          className="animate-fade-up pt-14 text-center text-sm text-muted-foreground/80 opacity-0 md:text-lg"
          style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
        >
          Next Edge Starter is a comprehensive <b>starter kit</b> for building
          and launching modern web applications. It comes with 3 different
          templates to choose from.
        </p>
        <div className="flex flex-row justify-center gap-8 pt-8">
          <LemonButton text={"Get Started"} />
          <Link href={routes.main.signin}>
            <Button variant={"secondary"}>Explore Demo</Button>
          </Link>
        </div>
      </div>

      <DemoVideoSection />

      <div className="absolute left-1/2 top-96 hidden h-[960px] w-[960px] -translate-x-1/3 stroke-neutral-300/70 pt-24 [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)] sm:-translate-x-1/2 md:block">
        <svg
          viewBox="0 0 1026 1026"
          fill="none"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full animate-spin"
        >
          <path
            d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
            className="stroke-neutral-300 dark:stroke-neutral-700"
            stroke-opacity="0.7"
          ></path>
          <path
            d="M513 1025C230.23 1025 1 795.77 1 513"
            stroke="url(#:R1glmba:-gradient-2)"
            stroke-linecap="round"
          ></path>
          <defs>
            <linearGradient
              id=":R1glmba:-gradient-1"
              x1="1"
              y1="513"
              x2="1"
              y2="1025"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="foreground"></stop>
              <stop
                offset="1"
                stop-color="muted-foreground"
                stop-opacity="0"
              ></stop>
            </linearGradient>
          </defs>
        </svg>
        <svg
          viewBox="0 0 1026 1026"
          fill="none"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full animate-reverse-spin"
        >
          <path
            d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
            className="stroke-neutral-300 dark:stroke-neutral-700"
            stroke-opacity="0.7"
          ></path>
          <path
            d="M913 513c0 220.914-179.086 400-400 400"
            stroke="url(#:R1glmba:-gradient-2)"
            stroke-linecap="round"
          ></path>
          <defs>
            <linearGradient
              id=":R1glmba:-gradient-2"
              x1="913"
              y1="513"
              x2="913"
              y2="913"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#06b6d4"></stop>
              <stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="my-16 w-full max-w-screen-lg animate-fade-up gap-5 border-t p-5 xl:px-0">
        <h2 className="pt-4 text-center text-3xl font-bold md:text-4xl">
          What is included?
        </h2>

        <p className="pb-8 pt-4 text-center text-lg">
          This repo comes fully stacked with everything you need to empower your
          startup. <br></br>
          <span className="text-muted-foreground">
            Say goodbye to integration headaches and start building your product
            today!
          </span>
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {marketingFeatures.map((feature) => (
            <Card key={feature.title} className={cn("p-2")}>
              <CardHeader>{feature.icon}</CardHeader>
              <CardContent className="space-y-2">
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="mt-2">
                  {feature.body}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="my-16 w-full max-w-screen-lg animate-fade-up gap-5 p-5 xl:px-0">
        <h2 className="pt-4 text-center text-3xl font-bold md:text-4xl">
          Pricing
        </h2>
        <p className="pb-8 pt-4 text-center text-lg">
          Your license is valid <b>forever</b> for <b>unlimited apps</b>.
          <br></br>
          <span className="text-muted-foreground">
            Build as many apps as you want, ship them to production, and use
            them forever for {" "}
            <span className="text-xl text-muted-foreground line-through">
              $149
            </span>{" "}
            <span className="text-xl text-foreground">$49</span>
          </span>
        </p>
        <div className="flex w-full justify-center">
          <LemonButton text="Get full access to all repos" />
        </div>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Next Edge Starter - The ultimate Next.js starter kit",
  description:
    "Next Edge Starter is enterprise ready comprehensive Next.js starter kit for building and launching modern web applications.",
};
