import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";

interface SocialLinks {
  title: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLinks[] = [
  {
    title: "MAX",
    url: "https://max.ru/u/f9LHodD0cOL2QIWfos_GcmKjJi58O_WHfZIveyk3CwD0cxTPEJeERa1WmOU",
    icon: "/icons/max.min.svg",
  },
  {
    title: "WhatsApp",
    url: "https://wa.me/79236609500",
    icon: "/icons/wa.min.svg",
  },
  {
    title: "Telegram",
    url: "https://t.me/sib_kos",
    icon: "/icons/tg.min.svg",
  },
];

interface ContactPopupProps {
  buttonText?: string;
  textLink?: string;
}

export function ContactPopup({
  buttonText = "Начать проект",
  textLink = "Добрый день, пишу с сайта webga.ru, хочу заказать сайт",
}: ContactPopupProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"lg"} className="group w-full sm:w-48">
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Начать проект</DialogTitle>
          <DialogDescription>
            Напишите нам в любой из мессенджеров
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.title}
              href={`${link.url}?text=${encodeURIComponent(textLink)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Image src={link.icon} alt={link.title} width={28} height={28} />
              <DialogClose>{link.title}</DialogClose>
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
