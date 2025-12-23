export interface Image {
  id: string;
  filename_disk?: string | null;
  title?: string | null;
}

export interface Base {
  id: number;
  slug: string | null;
  date_created: string;
  date_updated: string | null;
  status: string;
  title: string;
  content: string | null;
  cover_image: string | null;
}

export interface SEO {
  title: string;
  meta_description: string;
  og_image: string;
}

export interface Hero extends Base {
  city: string;
}

export interface Article extends Base {
  seo: SEO;
}

export interface Project extends Base {
  release_date: string | null;
  client: number | null;
  site_url: string | null;
  rutube_id: string | null;
  seo: SEO;
}

export interface Service extends Base {
  short_content: string | null;
  price: string | null;
  seo: SEO;
}

export interface Customer {
  id: number;
  title: string;
  content: string;
  cover_image: string;
}

export interface Team {
  id: string;
  title: string;
  position: string;
  content: string | null;
  slug: string | null;
  photo: Image | string | null;
}
