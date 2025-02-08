"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import Link from "next/link"; // Import Link from Next.js
import { usePathname } from "next/navigation";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isAdminPage = pathname?.startsWith("/admin");
  const isPlayerPage = pathname?.startsWith("/jobs");

  return (
    <>
      <div className="flex gap-x-2 ml-auto">
        {isAdminPage || isPlayerPage ? (
          <Link href="/">
            {/* Use Link for navigation */}
            <Button variant="outline" size="sm" className="border-purple-700/20">
              <LogOut />
              Exit
            </Button>
          </Link>
        ) : (
          <Link href="/admin/jobs">
            {/* Use Link for navigation */}
            <Button variant="outline" size="sm" className="border-purple-700/20">
              <LogOut />
                Admin Mode
            </Button>
          </Link>
        )}

        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};
