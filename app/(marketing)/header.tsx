"use client";

import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs";
import { Loader, LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
//⭐ import { Banner } from "./banner";


export const Header = () => {

  // ⭐const [hideBanner, setHideBanner] = useState(true);

  return (
    <>
      {/*⭐ ADD WHEN ANY ERROR HAPPENS IN APP ⭐*/}
      {/* <Banner hide={hideBanner} setHide={setHideBanner} /> */}

      <header
        className={cn(
          "h-20 w-full border-b-2 border-slate-200 px-4"
        )}
      >
        <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg">
          <Link href="/" className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
            <Image src="/mascot.svg" alt="Mascot" height={40} width={40} />

            <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
              Verba
            </h1>
          </Link>

          <div className="flex gap-x-3">
            <ClerkLoading>
              <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
            </ClerkLoading>
            <ClerkLoaded>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>

              <SignedOut>
                <SignInButton
                  mode="modal"
                  afterSignInUrl="/learn"
                  afterSignUpUrl="/learn"
                >
                  <Button size="lg" variant="secondary" className="flex items-center gap-2">
                    <LogIn className="w-5 h-5" />
                    Login
                  </Button>
                </SignInButton>
              </SignedOut>


            </ClerkLoaded>
          </div>
        </div>
      </header>
    </>
  );
};