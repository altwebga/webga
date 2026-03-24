"use client";

import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useScrollspy } from "@/hooks/use-scrollspy";
import { motion } from "motion/react";

const navLinks = [
  { title: "Главная", href: "/#hero", id: "hero" },
  { title: "Услуги", href: "#services", id: "services" },
  { title: "Как мы работаем", href: "#process", id: "process" },
  { title: "Контакты", href: "#cta", id: "cta" },
];

function isMobile() {
  return useMediaQuery("(max-width: 768px)");
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollspy(navLinks.map((l) => l.id).filter(Boolean), 100);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
          <span className="ml-2">Меню</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Меню</SheetTitle>
        </SheetHeader>
        <nav className="px-4 mt-8">
          <ul className="flex flex-col gap-6 list-none">
            {navLinks.map((link) => {
              const isActive =
                activeId === link.id || (activeId === "" && link.id === "hero");
              return (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      setOpen(false);
                      if (link.href.includes('#')) {
                        e.preventDefault();
                        const id = link.href.split('#')[1];
                        const el = document.getElementById(id);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                          window.history.pushState(null, "", link.href);
                        }
                      }
                    }}
                    className={cn(
                      "text-lg transition-colors hover:text-primary relative",
                      isActive
                        ? "text-primary font-medium"
                        : "text-muted-foreground",
                    )}
                  >
                    {link.title}
                    {isActive && (
                      <motion.span
                        layoutId="activeMobileLink"
                        className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function DesktopNav() {
  const activeId = useScrollspy(navLinks.map((l) => l.id).filter(Boolean), 100);

  return (
    <nav>
      <ul className="flex gap-8 list-none">
        {navLinks.map((link) => {
          const isActive =
            activeId === link.id || (activeId === "" && link.id === "hero");
          return (
            <li key={link.title}>
              <Link
                href={link.href}
                onClick={(e) => {
                  if (link.href.includes('#')) {
                    e.preventDefault();
                    const id = link.href.split('#')[1];
                    const el = document.getElementById(id);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                      window.history.pushState(null, "", link.href);
                    }
                  }
                }}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-2",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
              >
                {link.title}
                {isActive && (
                  <motion.span
                    layoutId="activeDesktopLink"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function AppNav() {
  return isMobile() ? <MobileNav /> : <DesktopNav />;
}
