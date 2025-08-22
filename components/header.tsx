import { Logo } from "./logo";
import { AppNav } from "./app-nav";

export function Header() {
  return (
    <header className="bg-background/50 backdrop-blur-md shadow sticky top-0 left-0">
      <div className="h-16 px-4 container mx-auto flex flex-row gap-4 justify-between items-center">
        <Logo />
        <AppNav className="hidden md:block" />
        <p>CallAction</p>
      </div>
    </header>
  );
}
