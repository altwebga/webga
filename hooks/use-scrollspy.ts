import { useState, useEffect } from "react";

export function useScrollspy(ids: string[], offset: number = 0) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            
            // Обновляем hash в URL без перезагрузки страницы (replaceState не засоряет историю)
            if (entry.target.id) {
              const hash = `#${entry.target.id}`;
              if (window.location.hash !== hash) {
                window.history.replaceState(null, "", hash);
              }
            }
          }
        });
      },
      { rootMargin: `-${offset}px 0px 0px 0px`, threshold: 0.3 }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [ids, offset]);

  return activeId;
}
