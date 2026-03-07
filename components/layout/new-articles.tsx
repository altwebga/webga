"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SectionContainer } from "../containers/section-container";

interface BlogItem {
  id: string;
  title: string;
  summary: string;
  href: string;
  image: string;
}

// Keep complex objects separate for reusability
const defaultBlogItems: BlogItem[] = [
  {
    id: "item-1",
    title: "Mastering TensorFlow: A Comprehensive Guide",
    summary:
      "Unlock the full potential of TensorFlow with this in-depth guide covering everything from basic concepts to advanced techniques for building powerful machine learning models.",
    href: "#",
    image: "/img/no-image.svg",
  },
  {
    id: "item-2",
    title: "Deep Dive into Neural Networks with Keras",
    summary:
      "Explore the intricacies of neural network architectures and learn how to implement them effectively using Keras, TensorFlow's high-level API.",
    href: "#",
    image: "/img/no-image.svg",
  },
  {
    id: "item-3",
    title: "TensorFlow.js: Machine Learning in the Browser",
    summary:
      "Bring the power of machine learning to your web applications with TensorFlow.js. Learn to train and deploy models directly in the browser.",
    href: "#",
    image: "/img/no-image.svg",
  },
  {
    id: "item-4",
    title: "Optimizing TensorFlow Models for Production",
    summary:
      "Discover best practices for optimizing your TensorFlow models for speed and efficiency in production environments, including quantization and pruning.",
    href: "#",
    image: "/img/no-image.svg",
  },
  {
    id: "item-5",
    title: "Advanced Computer Vision with TensorFlow",
    summary:
      "Delve into advanced computer vision tasks such as object detection, image segmentation, and style transfer using TensorFlow's powerful tools.",
    href: "#",
    image: "/img/no-image.svg",
  },
  {
    id: "item-6",
    title: "Natural Language Processing with TensorFlow and Transformers",
    summary:
      "Learn how to build state-of-the-art NLP models using TensorFlow and the Transformer architecture for tasks like text generation and sentiment analysis.",
    href: "#",
    image: "/img/no-image.svg",
  },
];

const defaultCarouselOptions = {
  align: "start" as const,
  loop: true,
  breakpoints: {
    "(max-width: 768px)": {
      dragFree: true,
    },
  },
};

interface NewArticlesProps {
  title?: string;
  items?: BlogItem[];
}

function NewArticles({
  // Hero section - inline defaults for simple strings
  title = "TensorFlow Insights",
  // Complex objects use separate constants
  items = defaultBlogItems,
}: NewArticlesProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };

    updateSelection();
    carouselApi.on("select", updateSelection);

    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <SectionContainer>
      <div>
        <div className="mb-8 flex items-center justify-between md:flex-row md:items-end">
          <div>
            <h2 className="text-xl font-semibold md:text-5xl">{title}</h2>
          </div>
          <div className="flex shrink-0 items-center justify-center gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto overflow-hidden">
        <Carousel setApi={setCarouselApi} opts={defaultCarouselOptions}>
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-5 md:basis-1/2 lg:basis-1/3"
              >
                <a
                  href={item.href}
                  className="group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex aspect-3/2 text-clip rounded-xl">
                      <div className="flex-1">
                        <div className="relative size-full origin-bottom py-6 transition duration-300">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={600} // Adjust width as needed
                            height={400} // Adjust height as needed
                            className="size-full rounded-lg object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 line-clamp-3 wrap-break-word pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                    {item.title}
                  </div>
                  <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
                    {item.summary}
                  </div>
                  <div className="flex items-center text-sm text-primary">
                    Read more{" "}
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </SectionContainer>
  );
}

export { NewArticles, defaultBlogItems as data };
