import { AppNav } from "../shared/app-nav";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-dashed">
      <div className="container mx-auto h-14 px-4 flex items-center justify-between">
        <p>Logo</p>
        <AppNav />
        <AnimatedThemeToggler />
      </div>
    </header>
  );
}
