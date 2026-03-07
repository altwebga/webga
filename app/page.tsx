import { CallToAction } from "@/components/layout/cta";
import { Featured } from "@/components/layout/featured";
import { Hero } from "@/components/layout/hero";
import { NewArticles } from "@/components/layout/new-articles";
import { Steps } from "@/components/layout/steps";

export default function Page() {
  return (
    <>
      <Hero />
      <Featured />
      <Steps />
      <CallToAction />
      <NewArticles />
    </>
  );
}
