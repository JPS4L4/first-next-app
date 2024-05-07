import ButtonLink from "@/components/ButtonLink";
import PostLists from "@/components/PostLists";
import PostPagination from "@/components/PostPagination";
import { getPagination } from "@/utils/Pagination";
import { allPosts, Post } from "contentlayer/generated";

export const metadata = {
  title: "Lista de Posts",
  description: "Lista de todos los posts que tiene el usuario",
};

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

const { currentPosts, totalPages } = getPagination(posts);

const Posts = () => {
  return (
    <div>
      <div className="grid gap-4">
        <PostLists posts={currentPosts} />
        {totalPages > 1 && (
          <PostPagination totalPages={totalPages} currentPage={1} />
        )}
      </div>
      <div className="text-center my-4">
        <ButtonLink href="/">Volver al Home</ButtonLink>
      </div>
    </div>
  );
};

export default Posts;
