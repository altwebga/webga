import { ThemeSwitch } from "./theme-switch";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="h-16 container mx-auto px-4 flex flex-col md:flex-row gap-4 justify-between items-center">
        <p>copyright</p>
        <ThemeSwitch />
      </div>
    </footer>
  );
}
