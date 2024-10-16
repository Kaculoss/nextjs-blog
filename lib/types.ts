import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "next-sanity";

export type BasicBlog = {
  title: string;
  smallDescription: string;
  slug: string;
  titleImage: SanityImageSource;
  _id: string;
};

export type Blog = BasicBlog & {
  createdAt: string;
  content: PortableTextBlock;
};
