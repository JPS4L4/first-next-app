import PostLists from "@/components/PostLists";
import PostPagination from "@/components/PostPagination";
import { allPosts, Post } from "contentlayer/generated";

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

const totalPosts = posts.length;
const postsPerPage = 2;
const totalPages = Math.ceil(totalPosts / postsPerPage);

export const metadata = {
  title: "Lista de Posts",
  description: "Lista de todos los posts que tiene el usuario",
};

const Posts = () => {
  const currentPage = 1;
  const offSet = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(offSet, offSet + postsPerPage);
  return (
    <div>
      <h1 className="text-center my-4 text-3xl">Post</h1>
      <div className="grid gap-4">
        <PostLists posts={currentPosts} />
        <PostPagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Posts;
