"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { SectionContainer } from "../containers/section-container";
import { Heading } from "../shared/heading";

interface Step {
  number: number;
  title: string;
  description: string;
  imageSrc: string;
  showConnectors?: boolean;
}

interface StepsProps {
  title?: string;
  description?: string;
  steps?: Step[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const Steps = ({
  title = "Как мы работаем",
  description = "Прозрачный процесс сотрудничества — от первой идеи до стабильно работающего и приносящего прибыль проекта",
  steps = [
    {
      number: 1,
      title: "Аналитика и Договор",
      description:
        "Погружаемся в ваш бизнес, проводим аудит текущей ситуации и конкурентов. Предлагаем оптимальное решение, фиксируем сроки, этапы и итоговую стоимость работ в договоре. Вы получаете четкий план действий.",
      imageSrc: "/img/contract.png",
    },
    {
      number: 2,
      title: "Реализация и Внедрение",
      description:
        "Наша команда приступает к работе: проектируем прототипы, рисуем дизайн, программируем и настраиваем рекламные кампании. Все процессы абсолютно прозрачны — вы получаете регулярные отчеты и доступ к тестовым стендам.",
      imageSrc: "/img/release.png",
      showConnectors: true,
    },
    {
      number: 3,
      title: "Запуск и Поддержка",
      description:
        "Торжественный запуск проекта! Но на этом наша работа не заканчивается: мы обеспечиваем надежную техническую поддержку, внедряем новый функционал по мере роста бизнеса и масштабируем рекламные каналы.",
      imageSrc: "/img/support.png",
    },
  ],
}: StepsProps) => {
  return (
    <SectionContainer id="process" className="scroll-mt-14 md:scroll-mt-20">
      <motion.div 
        className="mx-auto flex max-w-3xl flex-col justify-center gap-7 md:text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Heading as="h2" title={title} className="text-center" />
        <p className="text-sm text-muted-foreground md:text-base">
          {description}
        </p>
      </motion.div>
      <motion.div 
        className="mx-auto mt-14 flex max-w-5xl flex-col gap-4 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {steps.map((step) => (
          <StepItem key={step.number} {...step} totalSteps={steps.length} />
        ))}
      </motion.div>
    </SectionContainer>
  );
};

interface StepItemProps extends Step {
  totalSteps: number;
}

function StepItem({
  number,
  title,
  description,
  imageSrc,
  showConnectors = false,
  totalSteps,
}: StepItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10 group"
    >
      <div className="flex gap-4 min-[960px]:max-w-md">
        <div className="relative flex flex-col items-center justify-between gap-1">
          {showConnectors && (
            <span className="absolute -top-8 mx-auto h-8 w-[3px] shrink-0 bg-primary opacity-30" />
          )}
          <span
            className={`h-20 w-[3px] shrink-0 ${
              number === 1
                ? "bg-linear-to-b from-transparent to-primary"
                : number === totalSteps
                  ? "bg-linear-to-t from-transparent to-primary"
                  : "bg-primary"
            } opacity-30 group-hover:opacity-100 transition-opacity duration-500`}
          />
          <motion.span 
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary font-mono text-lg bg-background group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 z-10"
            whileHover={{ scale: 1.1 }}
          >
            {number}
          </motion.span>
          <span
            className={`h-20 w-[3px] shrink-0 ${
              number === totalSteps ? "bg-transparent" : "bg-primary opacity-30 group-hover:opacity-100 transition-opacity duration-500"
            }`}
          />
          {showConnectors && (
            <span className="absolute -bottom-8 mx-auto h-8 w-[3px] shrink-0 bg-primary opacity-30" />
          )}
        </div>
        <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:p-4">
          <h3 className="text-xl font-semibold text-primary min-[960px]:text-2xl group-hover:translate-x-2 transition-transform duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground min-[960px]:text-base">
            {description}
          </p>
        </div>
      </div>
      <motion.div 
        className="z-10 aspect-video w-full"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={400}
          className="aspect-video w-full rounded-xl border object-contain min-[960px]:max-h-56 min-[960px]:w-auto bg-accent-foreground/50 p-2 drop-shadow-md"
        />
      </motion.div>
    </motion.div>
  );
}

export { Steps };
