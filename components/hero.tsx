import { PopUpContainer } from "./popup-container";

export function Hero() {
  return (
    <div className="bg-background/25">
      <div className="h-screen px-4 container mx-auto flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-1">
          <h1>
            Разработка и продвижение сайтов в <span>Горно-Алтайске</span>
          </h1>
          <p>
            Делю эффективные сайты, запускаю SEO и рекламу, настраиваю аналитику
            и помогаю бизнесу расти. Работаю на результат — если не понравится,
            верну деньги.
          </p>
          <PopUpContainer />
        </div>
        <div className="flex-1"></div>
      </div>
      <video
        src="/videos/bg-video.mp4"
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 object-cover z-[-1] w-full h-screen"
      ></video>
    </div>
  );
}
