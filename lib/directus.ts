import { createDirectus, rest, authentication } from "@directus/sdk";
import {
  Article,
  Project,
  Service,
  Customer,
  Hero,
  Team,
} from "@/config/types";

export interface Schema {
  articles: Article[];
  projects: Project[];
  services: Service[];
  customers: Customer[];
  hero: Hero;
  team: Team[];
}

const directusUrl = process.env.ENDPOINT ?? "http://localhost:8055";
const token = process.env.TOKEN ?? "";

const directus = createDirectus<Schema>(directusUrl)
  .with(authentication())
  .with(rest());

if (token) {
  await directus.setToken(token);
}

export default directus;
