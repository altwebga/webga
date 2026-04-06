import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-160px)]">
      <h2 className="text-8xl font-bold mb-4">404</h2>
      <p className="text-xl mb-6">Упс! Страница не найдена</p>
      <Button asChild>
        <Link href="/">Вернуться на главную</Link>
      </Button>
    </div>
  );
}
