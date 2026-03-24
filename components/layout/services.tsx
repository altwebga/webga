"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SectionContainer } from "../containers/section-container";
import { Heading } from "../shared/heading";
import { socialLinks } from "../shared/contact-popup";

interface ServicesItem {
  id: string;
  title: string;
  summary: string;
  fullDescription: React.ReactNode;
  image: string;
}

const defaultServicesItems: ServicesItem[] = [
  {
    id: "item-1",
    title: "Разработка сайтов",
    summary:
      "Создаем современные, адаптивные и высокопроизводительные сайты любой сложности.",
    fullDescription: (
      <div className="space-y-4">
        <p>
          Мы специализируемся на разработке веб-проектов, которые работают на
          успех вашего бизнеса. Будь то мощный корпоративный портал, продающий
          лендинг или сложный интернет-магазин — мы используем самые современные
          технологии, чтобы ваш проект был быстрым, безопасным и масштабируемым.
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground text-sm">
          <li>
            UX/UI проектирование с упором на конверсию посетителей в
            покупателей.
          </li>
          <li>
            Адаптивная верстка (Mobile First) для идеального отображения на
            любых устройствах.
          </li>
          <li>
            Высокая производительность и оптимизация загрузки (оценки 90+ в
            Google PageSpeed).
          </li>
          <li>
            Интеграция с внешними сервисами: CRM, платежными шлюзами, 1С и
            складскими программами.
          </li>
        </ul>
      </div>
    ),
    image: "/img/web.png",
  },
  {
    id: "item-2",
    title: "SEO-продвижение",
    summary:
      "Комплексная поисковая оптимизация для вывода вашего сайта в топ Яндекс и Google.",
    fullDescription: (
      <div className="space-y-4">
        <p>
          Красивый сайт не приносит пользы, если его не видят потенциальные
          клиенты. Наша команда SEO-экспертов проводит глубокую аналитику вашей
          ниши и конкурентов, формируя эффективную стратегию вывода веб-ресурса
          в ТОП-10 поисковых систем Яндекса и Google.
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground text-sm">
          <li>
            Полный технический аудит ресурса и исправление ошибок, мешающих
            ранжированию.
          </li>
          <li>
            Сбор и кластеризация максимально широкого семантического ядра.
          </li>
          <li>
            Написание и оптимизация качественного контента, настройка метатегов.
          </li>
          <li>
            Легальное наращивание трастовой ссылочной массы для роста авторитета
            домена.
          </li>
        </ul>
      </div>
    ),
    image: "/img/seo.png",
  },
  {
    id: "item-3",
    title: "Контекстная реклама",
    summary:
      "Настройка эффективных рекламных кампаний в Яндекс.Директ. Прозрачная аналитика.",
    fullDescription: (
      <div className="space-y-4">
        <p>
          Нужны продажи «уже завтра»? Контекстная реклама — самый быстрый способ
          получить горячих клиентов. Мы настраиваем кампании в Яндекс.Директ
          так, чтобы каждый вложенный рубль возвращался с максимальной прибылью
          (высокий ROAS).
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground text-sm">
          <li>
            Анализ целевой аудитории и подбор максимально конверсионных
            запросов.
          </li>
          <li>
            Создание цепляющих текстово-графических объявлений для поиска и РСЯ.
          </li>
          <li>
            Глубокая настройка веб-аналитики (Яндекс.Метрика) для отслеживания
            каждой заявки и звонка.
          </li>
          <li>
            Регулярная оптимизация ставок, чистка площадок и A/B тестирование
            креативов.
          </li>
        </ul>
      </div>
    ),
    image: "/img/ads.png",
  },
  {
    id: "item-4",
    title: "Дизайн и брендинг",
    summary:
      "Уникальный визуальный стиль, логотипы и UI/UX дизайн, который запоминается.",
    fullDescription: (
      <div className="space-y-4">
        <p>
          Дизайн — это не только про красоту, это язык, на котором ваш бренд
          общается с аудиторией. Мы создаем осмысленный визуальный стиль,
          который отстраивает вас от конкурентов, вызывает доверие и напрямую
          влияет на лояльность клиентов.
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground text-sm">
          <li>
            Разработка логотипов и полноценных брендбуков (фирменный стиль).
          </li>
          <li>
            Проектирование пользовательских интерфейсов (UI/UX) на основе
            аналитики пользовательского поведения.
          </li>
          <li>
            Дизайн промо-материалов, баннеров для соцсетей и рекламных
            креативов.
          </li>
          <li>
            Редизайн устаревших сайтов для соответствия современным трендам.
          </li>
        </ul>
      </div>
    ),
    image: "/img/brand.png",
  },
  {
    id: "item-5",
    title: "Обслуживание сайтов",
    summary: "Техническая поддержка, обновление контента и защита от вирусов.",
    fullDescription: (
      <div className="space-y-4">
        <p>
          Сайт — это живой организм, который требует регулярного ухода. Мы берем
          на себя все технические заботы: от продления домена и хостинга до
          экстренного восстановления после сбоев. Вы занимаетесь бизнесом, а мы
          — бесперебойной работой вашего ресурса.
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground text-sm">
          <li>Круглосуточный мониторинг доступности сайта (Uptime).</li>
          <li>Регулярное создание и проверка резервных копий (бэкапов).</li>
          <li>
            Защита от DDoS-атак, сканирование и удаление вредоносного кода.
          </li>
          <li>
            Внесение правок в контент, добавление новых страниц и функционала по
            запросу.
          </li>
        </ul>
      </div>
    ),
    image: "/img/services.png",
  },
  {
    id: "item-6",
    title: "SMM-продвижение",
    summary:
      "Раскрутка в социальных сетях. Создаем вовлекающий контент и настраиваем таргетинг.",
    fullDescription: (
      <div className="space-y-4">
        <p>
          Социальные сети — мощный инструмент для формирования бренд-комьюнити и
          генерации лидов. Мы берем социальные сети вашего бизнеса под ключ:
          генерируем идеи, снимаем, пишем и запускаем рекламу, чтобы превратить
          подписчиков в преданных покупателей.
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground text-sm">
          <li>Разработка индивидуальной SMM-стратегии и контент-плана.</li>
          <li>
            Оформление сообществ и создание единого визуального стиля профиля.
          </li>
          <li>
            Копирайтинг, продающие и вовлекающие посты, создание Reels/Shorts.
          </li>
          <li>Настройка и ведение таргетированной рекламы (ВКонтакте и др).</li>
        </ul>
      </div>
    ),
    image: "/img/smm.png",
  },
];

const defaultCarouselOptions = {
  align: "start" as const,
  loop: true,
  breakpoints: {
    "(max-width: 768px)": {
      dragFree: true,
    },
  },
};

interface ServicesProps {
  title?: string;
  items?: ServicesItem[];
}

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

function Services({
  title = "Наши услуги",
  items = defaultServicesItems,
}: ServicesProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };

    updateSelection();
    carouselApi.on("select", updateSelection);

    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <SectionContainer id="services" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="mb-8 flex items-center justify-between md:flex-row md:items-end">
          <Heading as="h2" title={title} />
          <div className="flex shrink-0 items-center justify-center gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </motion.div>
      <div className="container mx-auto overflow-hidden">
        <Carousel setApi={setCarouselApi} opts={defaultCarouselOptions}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <CarouselContent>
              {items.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pl-5 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div variants={itemVariants} className="h-full">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="group flex flex-col justify-between h-full cursor-pointer hover:bg-accent/50 p-4 rounded-xl transition-colors border border-transparent hover:border-border">
                          <div>
                            <div className="flex aspect-square bg-accent-foreground text-clip rounded-xl overflow-hidden">
                              <div className="flex-1">
                                <motion.div
                                  whileHover={{ scale: 1.05 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30,
                                  }}
                                  className="relative size-full origin-bottom py-6"
                                >
                                  <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={400}
                                    height={400}
                                    className="size-full rounded-lg object-contain object-center drop-shadow-md"
                                  />
                                </motion.div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-2 line-clamp-3 wrap-break-word pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl transition-colors">
                            {item.title}
                          </div>
                          <div className="mb-4 line-clamp-2 text-sm text-muted-foreground md:text-base">
                            {item.summary}
                          </div>
                          <div className="mt-auto flex items-center text-sm font-semibold text-primary">
                            Подробнее{" "}
                            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">
                            {item.title}
                          </DialogTitle>
                          <DialogDescription asChild>
                            <div className="pt-4 text-base text-foreground/90">
                              {item.fullDescription}
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-6 flex flex-wrap justify-end gap-3">
                          {socialLinks.map((link) => (
                            <Button
                              key={link.title}
                              asChild
                              variant="outline"
                              className="flex items-center gap-2"
                            >
                              <a
                                href={`${link.url}?text=${encodeURIComponent(`Здравствуйте! Меня интересует: ${item.title}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Image
                                  src={link.icon}
                                  alt={link.title}
                                  width={20}
                                  height={20}
                                  className="w-5 h-5"
                                />
                                {link.title}
                              </a>
                            </Button>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </motion.div>
        </Carousel>
      </div>
    </SectionContainer>
  );
}

export { Services, defaultServicesItems as data };
