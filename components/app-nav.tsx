"use client";
import { navMenu } from "@/setting/nav-menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function AppNav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-4 list-none">
        {navMenu.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "px-3 py-2 rounded-md text-sm transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
