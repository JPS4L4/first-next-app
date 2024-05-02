import { Post } from "contentlayer/generated";
import Link from "next/link";

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  return (
    <article className="shadow p-4 rounded-md">
      <h3 className="text-2xl">
        <Link href={post.url}>{post.title}</Link>
      </h3>
      <time>
        {new Date(post.date).toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
    </article>
  );
};

export default PostItem;
