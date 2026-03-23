"use client";

import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

const navLinks = [
  { title: "Главная", href: "/" },
  { title: "Услуги", href: "#services" },
  { title: "Как мы работаем", href: "#process" },
  { title: "Контакты", href: "#cta" },
];

function isMobile() {
  return useMediaQuery("(max-width: 768px)");
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Меню</SheetTitle>
          <SheetDescription>Sheet Description</SheetDescription>
        </SheetHeader>
        <nav className="px-4">
          <ul className="flex flex-col gap-6 list-none">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function DesktopNav() {
  return (
    <nav>
      <ul className="flex gap-6 list-none">
        {navLinks.map((link) => (
          <li key={link.title}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function AppNav() {
  return isMobile() ? <MobileNav /> : <DesktopNav />;
}
