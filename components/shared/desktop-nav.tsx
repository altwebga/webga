"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { menuLinks } from "@/config/menu-links";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-row gap-12 list-none">
        {menuLinks.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "relative pb-1 text-sm font-medium transition-colors",
                  "after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:scale-x-0 after:bg-current after:transition-transform after:duration-200",
                  "hover:after:scale-x-100",
                  isActive && "after:scale-x-100"
                )}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
