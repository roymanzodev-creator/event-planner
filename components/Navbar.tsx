"use client";
import { logout } from "@/lib/auth-actions";
import { Session } from "next-auth";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({ session }: { session: Session | null }) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <nav className="bg-slate-800 border-b border-slate-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-primary text-xl font-bold">
              Event<span className="text-blue-300">Planner</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/events"
              className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Events
            </Link>
            {session ? (
              <div className="flex items-center space-x-2">
                <Link
                  href="/login"
                  className="bg-primary px-4 py-2 rounded-full text-backround font-medium hover:bg-primary/80 transition-colors hover:text-white/70"
                >
                  Sign in with GitHub
                </Link>
              </div>
            ) : (
              <>
                <Link
                  href="/events/create"
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Create Event
                </Link>
                <Link
                  href="/dashboard"
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Dashboard
                </Link>

                <button onClick={logout} className="bg-primary px-4 py-2 rounded-full text-backround font-medium cursor-pointer hover:bg-primary/80 transition-colors hover:text-white/70">
                  logout
                </button>
              </>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary focus:outline-none focus:text-primary"
            >
              <GiHamburgerMenu className="text-3xl" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden px-2 pt-2 pb-3 space-y-3 sm:px-3"
          >
            <div className="flex flex-col">
              <Link
                href="/events"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Events
              </Link>
              <Link
                href="/events/create"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Create Event
              </Link>
              <Link
                href="/dashboard"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Dashboard
              </Link>
              <div className="flex items-center space-x-2">
                <Link
                  href="/login"
                  className="bg-primary px-4 py-2 rounded-full text-backround font-medium hover:bg-primary/80 transition-colors hover:text-white/70"
                >
                  Sign in with GitHub
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
