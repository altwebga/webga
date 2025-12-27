import { CallAction } from "@/components/layout/call-action";
import { Hero } from "@/components/layout/hero";
import { OurAvantage } from "@/components/layout/our-advantage";
import { OurClients } from "@/components/layout/our-clients";
import { OurServices } from "@/components/layout/our-services";

export default function Home() {
  return (
    <div>
      <Hero />

      <OurServices />
      <OurAvantage />
      <OurClients />
      <CallAction />
    </div>
  );
}
