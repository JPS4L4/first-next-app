import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export const generateStaticParams = () => {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
};

export const generateMetadata = ({ params }: Props) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);

  return {
    title: post?.title,
    description: post?.description,
  };
};

const LayoutPosts = ({ params }: Props) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);

  let MDXContent;

  if (!post) {
    return notFound();
  } else {
    MDXContent = useMDXComponent(post.body.code);
  }

  return (
    <div>
      <h1 className="text-center my-4 text-3xl">{post.title}</h1>
      <time>
        {new Date(post.date).toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <MDXContent />
    </div>
  );
};

export default LayoutPosts;
