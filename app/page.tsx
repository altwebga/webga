import { Hero } from "@/components/layout/hero";
import { OurClients } from "@/components/layout/our-clients";
import { OurServices } from "@/components/layout/our-services";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <OurClients /> */}
      <OurServices />
    </div>
  );
}
