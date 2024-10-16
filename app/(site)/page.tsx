import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getBasicBlog } from "@/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30;
export default async function Home() {
  const basicBlog = await getBasicBlog();

  return (
    <div className="grid  md:grid-cols-2 mt-5 gap-5">
      {basicBlog.map((blog) => (
        <Card key={blog._id}>
          <Image
            src={urlFor(blog.titleImage).url()}
            alt={blog.title}
            width={500}
            height={500}
            className="rounded-t-lg h-[200px] object-cover "
          />
          <CardContent className="mt-5">
            <h3 className="text-lg line-clamp-2 font-semibold">{blog.title}</h3>
            <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-400">
              {blog.smallDescription}
            </p>
            <Button asChild className=" w-full mt-7 ">
              <Link href={`/blog/${blog.slug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
