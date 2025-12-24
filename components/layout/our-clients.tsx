import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import { DirectusImage } from "../shared/directus-image";

async function getClients() {
  return directus.request(
    readItems("customers", {
      fields: ["title", "id", "cover_image"],
    })
  );
}

export async function OurClients() {
  const customers = await getClients();
  return (
    <section className="mt-32">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl">Среди наших клиентов</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-4 mt-8">
          {customers.splice(0, 4).map((customer) => (
            <div
              key={customer.id}
              className="flex flex-row gap-2 h-14 items-center"
            >
              <DirectusImage
                url={customer.cover_image}
                alt={customer.title}
                width={80}
                height={80}
                className="rounded-full border w-14 h-14"
              />
              <p className="text-xl uppercase m-0">{customer.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
