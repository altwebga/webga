import { Container } from "@/components/container/container";
import { TextAnimate } from "@/components/ui/text-animate";

const text = {
  title: "Наши услуги",
  subTitle:
    "Полный комплкс услуг для быстрого старта ваше бизнеса в интернете.",
};

export default function ServicesPage() {
  return (
    <Container className="mt-20">
      <h1>{text.title}</h1>
      <TextAnimate animation="blurIn" as="p">
        {text.subTitle}
      </TextAnimate>
    </Container>
  );
}
