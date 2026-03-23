import Image from "next/image";
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

const Steps = ({
  title = "Как мы работаем",
  description = "Понятный процесс сотрудничества — от первой идеи до стабильной работы проекта",
  steps = [
    {
      number: 1,
      title: "Договор",
      description:
        "Обсуждаем ваши задачи и цели, предлагаем оптимальное решение и фиксируем все условия сотрудничества. Вы точно понимаете сроки, этапы и стоимость работ.",
      imageSrc: "/img/contract.png",
    },
    {
      number: 2,
      title: "Реализация",
      description:
        "Наша команда приступает к работе: проектируем, разрабатываем и внедряем решение. Вы получаете регулярные обновления и полный контроль над процессом.",
      imageSrc: "/img/release.png",
      showConnectors: true,
    },
    {
      number: 3,
      title: "Поддержка",
      description:
        "После запуска мы остаёмся на связи: обеспечиваем техническую поддержку, обновления и помогаем вашему проекту расти и развиваться.",
      imageSrc: "/img/support.png",
    },
  ],
}: StepsProps) => {
  return (
    <SectionContainer id="process">
      <div className="mx-auto flex max-w-3xl flex-col justify-center gap-7 md:text-center">
        <Heading as="h2" title={title} className="text-center" />
        <p className="text-sm text-muted-foreground md:text-base">
          {description}
        </p>
      </div>
      <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-4 lg:px-16">
        {steps.map((step) => (
          <StepItem key={step.number} {...step} totalSteps={steps.length} />
        ))}
      </div>
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
    <div
      id="steps"
      className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10"
    >
      <div className="flex gap-4 min-[960px]:max-w-md">
        <div className="relative flex flex-col items-center justify-between gap-1">
          {showConnectors && (
            <span className="absolute -top-8 mx-auto h-8 w-[3px] shrink-0 bg-primary opacity-70" />
          )}
          <span
            className={`h-20 w-[3px] shrink-0 ${
              number === 1
                ? "bg-linear-to-b from-transparent to-primary"
                : number === totalSteps
                  ? "bg-linear-to-t from-transparent to-primary"
                  : "bg-primary"
            } opacity-70`}
          />
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary  font-mono text-lg">
            {number}
          </span>
          <span
            className={`h-20 w-[3px] shrink-0 ${
              number === totalSteps ? "bg-transparent" : "bg-primary opacity-70"
            }`}
          />
          {showConnectors && (
            <span className="absolute -bottom-8 mx-auto h-8 w-[3px] shrink-0 bg-primary opacity-70" />
          )}
        </div>
        <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:p-4">
          <h3 className="text-xl font-semibold text-primary min-[960px]:text-2xl">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground min-[960px]:text-base">
            {description}
          </p>
        </div>
      </div>
      <Image
        src={imageSrc}
        alt="Placeholder image"
        width={400}
        height={400}
        className="z-10 aspect-video w-full rounded-xl border object-contain min-[960px]:max-h-56 min-[960px]:w-auto bg-accent-foreground"
      />
    </div>
  );
}

export { Steps };
