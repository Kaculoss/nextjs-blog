import { getBlog } from "@/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export default async function BlogArticle({ params }: Props) {
  const blog = await getBlog(params.slug);
  return (
    <div className="mt-8">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Kaculoss - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {blog.title}
        </span>
      </h1>
      <Image
        src={urlFor(blog.titleImage).url()}
        alt={blog.title}
        width={800}
        height={800}
        priority
        className="rounded-lg mt-8 border "
      />

      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert">
        <PortableText value={blog.content} />
      </div>
    </div>
  );
}
