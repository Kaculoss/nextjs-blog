import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { BasicBlog, Blog } from "./types";

export const getBasicBlog = async (): Promise<BasicBlog[]> => {
  return client.fetch(
    groq`*[_type == 'blog'] | order(_createdAt desc) {
      title,
      smallDescription,
      "slug": slug.current,
      titleImage,
      _id
   }`
  );
};

export const getBlog = async (slug: string): Promise<Blog> => {
  return client.fetch(
    groq`*[_type == "blog" && slug.current == $slug][0] {
      title,
      smallDescription,
      "slug": slug.current,
      titleImage,
      _id,
      createdAt,
      content
   }`,
    { slug }
  );
};
