"use client";

import Link from "next/link";
import Image from "next/image";
import { shadow } from "@/styles/utils";
import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  const user = null; // Replace with actual user fetching logic

  return (
    <header
      className="relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8"
      style={{ boxShadow: shadow }}
    >
      <Link href="/" className="flex items-end gap-2">
        <Image
          src="/notesAiLogo.png"
          alt="Logo"
          width={60}
          height={60}
          className="rounded-full"
          priority
        />
        <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">
          Notes <span>AI</span>
        </h1>
      </Link>

      <div className="flex gap-4">
        {user ? (
          "Logout"
        ) : (
          <>
            <Button asChild className="hidden sm:block">
              <Link href="/sign-up">Sign Up</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default Header;
