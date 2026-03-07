export function Footer() {
  return (
    <footer className="bg-background w-full border-t border-dashed">
      <div className="container mx-auto px-4 h-12 flex flex-col md:flex-row items-center justify-between">
        <p>© {new Date().getFullYear()} WebGA. All rights reserved.</p>
      </div>
    </footer>
  );
}
