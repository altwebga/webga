import { DesktopNav } from "../shared/desktop-nav";
import { AnimatedThemeToggler } from "../theme/theme-toggle";

export function Header() {
  return (
    <header className="h-16 bg-background/20 backdrop-blur-md border-b z-50 fixed w-full">
      <div className="h-full container mx-auto px-4 flex flex-row justify-between items-center">
        <p>Logo</p>
        <DesktopNav />
        <AnimatedThemeToggler />
      </div>
    </header>
  );
}
