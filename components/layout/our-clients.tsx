import { Marquee } from "../ui/marquee";
import { Container } from "../container/container";
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import { DirectusImage } from "../shared/directus-image";
import { Card } from "../ui/card";

type Customer = {
  id: string | number;
  title: string;
  content: string;
  cover_image: string;
};

async function getClients(): Promise<Customer[]> {
  return directus.request(
    readItems("customers", {
      fields: ["id", "title", "content", "cover_image"],
    })
  );
}

export async function OurClients() {
  const customers = await getClients();
  if (!customers?.length) return null;

  const mid = Math.ceil(customers.length / 2);
  const firstRow = customers.slice(0, mid);
  const secondRow = customers.slice(mid);

  return (
    <Container className="relative flex w-full flex-col items-center justify-center overflow-hidden my-32">
      <h2>Среди наших клиентов</h2>

      <Marquee pauseOnHover className="[--duration:50s]">
        {firstRow.map((customer) => (
          <CustomerCard key={customer.id} customer={customer} />
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover className="[--duration:50s]">
        {secondRow.map((customer) => (
          <CustomerCard key={customer.id} customer={customer} />
        ))}
      </Marquee>

      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r" />
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l" />
    </Container>
  );
}

function CustomerCard({ customer }: { customer: Customer }) {
  return (
    <Card className="pointer-events-none px-4 py-3">
      <div className="flex items-center gap-3">
        <DirectusImage
          url={customer.cover_image}
          alt={customer.title}
          width={48}
          height={48}
          className="rounded-full"
        />

        <div>
          <h3 className="text-base font-medium m-0">{customer.title}</h3>
          <p className="text-sm text-muted-foreground m-0">
            {customer.content}
          </p>
        </div>
      </div>
    </Card>
  );
}
