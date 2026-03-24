import { AppNav } from "../shared/app-nav";
import { Logo } from "../shared/logo";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-dashed">
      <div className="container mx-auto h-14 px-4 flex items-center justify-between w-full">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <p className="text-lg font-bold hidden md:block">webga</p>
        </Link>
        <div className="flex flex-row-reverse md:flex-row gap-6">
          <div className="md:w-4xl">
            <AppNav />
          </div>
          <AnimatedThemeToggler />
        </div>
      </div>
    </header>
  );
}
