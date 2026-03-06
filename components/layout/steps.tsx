import Image from "next/image";

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
  title = "Launch with Assurance",
  description = "Simplify your workflow with our tools that provide clear insights, minimizing the complexity of managing intricate deployment data.",
  steps = [
    {
      number: 1,
      title: "Monitor Deployments live",
      description:
        "Track your deployments with clarity, seeing updates take place as they happen.",
      imageSrc: "/img/no-image.svg",
    },
    {
      number: 2,
      title: "Immediate Issue Detection",
      description:
        "Spot issues instantly and address them with precise metrics for optimized performance.",
      imageSrc: "/img/no-image.svg",
      showConnectors: true,
    },
    {
      number: 3,
      title: "Revert to a Stable Version",
      description:
        "With just a few actions, revert to a previous version and restore system health swiftly.",
      imageSrc: "/img/no-image.svg",
    },
  ],
}: StepsProps) => {
  return (
    <section>
      <div className="container mx-auto px-4 py-20 border-l border-r border-b border-dashed">
        <div className="mx-auto flex max-w-3xl flex-col justify-center gap-7 md:text-center">
          <h2 className="text-2xl font-bold md:text-4xl">{title}</h2>
          <p className="text-sm text-muted-foreground md:text-base">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-4 lg:px-16">
          {steps.map((step) => (
            <StepItem key={step.number} {...step} totalSteps={steps.length} />
          ))}
        </div>
      </div>
    </section>
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
    <div className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10">
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
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary bg-secondary font-mono text-lg text-primary-foreground">
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
        height={225}
        className="z-10 aspect-video w-full rounded-xl border object-cover min-[960px]:max-h-56 min-[960px]:w-auto"
      />
    </div>
  );
}

export { Steps };
