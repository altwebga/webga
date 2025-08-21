import { PopUpContainer } from "./popup-container";

export function Hero() {
  return (
    <div className="dark:bg-background/50 dark:bg-none bg-[url(/img/bg-image.jpg)] bg-no-repeat bg-cover ">
      <div className="h-[90vh] px-4 container mx-auto flex flex-col gap-4 justify-center">
        <div className="w-full max-w-4xl">
          <h1 className="text-2xl md:text-5xl">
            Разработка и продвижение сайтов <br />
            <span className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-4xl md:text-8xl font-extrabold text-transparent">
              в Горно-Алтайске
            </span>
          </h1>
          <p className="pt-4">
            Делю эффективные сайты, запускаю SEO и рекламу, настраиваю аналитику
            и помогаю бизнесу расти. Работаю на результат — если не понравится,
            верну деньги.
          </p>
          <PopUpContainer />
        </div>
      </div>
      <video
        src="/videos/bg-video-2.webm"
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 object-cover z-[-1] w-full h-[90vh] hidden dark:block"
      ></video>
    </div>
  );
}
