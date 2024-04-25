import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));
console.log(posts);

export const metadata = {
  title: "Lista de Posts",
  description: "Lista de todos los posts que tiene el usuario",
};

const Posts = () => {
  return (
    <div>
      <h1 className="text-center my-4 text-3xl">Post</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <article>
            <h2 className="text-2xl">
              <Link href={post.url}>{post.title}</Link>
            </h2>
            <time>
              {new Date(post.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Posts;
