export function Footer() {
  return (
    <footer className="bg-background w-full border-t border-dashed">
      <div className="container mx-auto px-4 py-6 min-h-12 flex flex-col gap-4 md:flex-row items-center justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} WebGA. Все права защищены.</p>
        <a
          href="https://seomix.ru/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          Больше информации о нас
        </a>
      </div>
    </footer>
  );
}
