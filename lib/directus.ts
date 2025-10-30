import { createDirectus, rest, graphql, authentication } from "@directus/sdk";

interface SEO {
  title: string;
  meta_description: string;
}

interface Image {
  id: string;
  title: string;
}

export interface IHero {
  hero_title: string;
  hero_city: string;
  hero_content: string;
  hero_image: Image;
}

interface Base {
  id: string;
  status: "published" | "draft" | "archived";
  slug: string;
  title: string;
  content: string;
}

export interface IArticle extends Base {
  date_created: Date;
  seo: SEO;
  cover_image: Image;
}

export interface IProject extends Base {
  release_date: string;
  client: {
    title: string;
    direction: string;
    logo: {
      id: string;
      title: string;
    };
  };
  site: string;
  video_url: string;
  seo: SEO;
  cover_image: Image;
}

export interface IService extends Base {
  short_content: string | null;
  price: string;
  seo: SEO;
  cover_image: Image;
}

export interface IStageItem {
  step: number;
  title: string;
  content: string;
}

export interface IStage {
  stage: {
    phase: IStageItem[];
  };
}

export interface IClient {
  id: string;
  title: string;
  direction: string;
  logo: Image;
}

export interface ITeam {
  id: string;
  title: string;
  position: string;
  content: string;
  slug: string;
  photo: Image;
  certificates: {
    id: string;
    directus_files_id: {
      id: string;
      title: string;
    };
  }[];
}

interface Schema {
  articles: IArticle[];
  projects: IProject[];
  services: IService[];
  clients: IClient[];
  hero: IHero;
  stage: IStage;
}

const directusUrl = process.env.GRAPHQL_ENDPOINT || "http://localhost:8485";
const token = process.env.ACCESS_TOKEN || "";
const directus = createDirectus<Schema>(directusUrl)
  .with(rest())
  .with(graphql())
  .with(authentication());

await directus.setToken(token);

export default directus;
