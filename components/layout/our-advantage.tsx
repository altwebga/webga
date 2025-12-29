import { Container } from "../container/container";
import { TextAnimate } from "../ui/text-animate";
import { Button } from "../ui/button";

const text = {
  title: "Мы точно знаем, что нужно делать, и не ведем долгих переговоров.",
  subTitle: "Наши преимущества",
  description:
    "Мы общаемся простым и понятным языком — без лишних терминов. Подробно рассказываем обо всех этапах работы и держим в курсе процесса. Мы не требуем ТЗ или бриф: все необходимые вопросы задаём по телефону или на встрече. Тексты для сайта пишем самостоятельно — вам не нужно ничего готовить. Если собственных фотографий пока нет, мы подбираем подходящую замену.",
};

export function OurAvantage() {
  return (
    <Container className="my-32">
      <div className="flex flex-col gap-4 md:ml-40">
        <div>
          <p className="text-xl text-muted-foreground">{text.subTitle}</p>
        </div>
        <div className="md:w-2/3">
          <TextAnimate
            animation="blurIn"
            as="h2"
            className="text-4xl md:text-6xl leading-10 md:leading-14"
          >
            {text.title}
          </TextAnimate>
          <p>{text.description}</p>
          <div className="flex flex-row gap-4 mt-8">
            <Button size={"lg"}>Начать проект</Button>
            <Button
              size={"lg"}
              disabled
              variant={"destructive"}
              className="line-through"
            >
              Заполнить бриф
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
