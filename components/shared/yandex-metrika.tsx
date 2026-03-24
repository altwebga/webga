// components/YandexMetrika.tsx
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import ym, { YMInitializer } from "react-yandex-metrika";

const YM_COUNTER_ID = 108222062;

// Выносим логику трекинга в отдельный компонент
function RouterTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      // Собираем полный URL вместе с get-параметрами (например, utm-метками)
      const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;
      ym("hit", url);
    }
  }, [pathname, searchParams]);

  return null;
}

export const YandexMetrika = () => {
  return (
    <>
      <YMInitializer
        accounts={[YM_COUNTER_ID]}
        options={{
          defer: true,
          webvisor: true,
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
        }}
        version="2"
      />
      {/* Обязательно оборачиваем useSearchParams в Suspense для корректного SSR/SSG в Next.js */}
      <Suspense fallback={null}>
        <RouterTracker />
      </Suspense>
    </>
  );
};
