import PostLists from "@/components/PostLists";
import PostPagination from "@/components/PostPagination";
import { totalPages, getPostsPagination } from "@/utils/PostPaginationUtils";

export const metadata = {
  title: "Lista de Posts",
  description: "Lista de todos los posts que tiene el usuario",
};

const { currentPosts } = getPostsPagination();

const Posts = () => {
  return (
    <div>
      <h1 className="text-center my-4 text-3xl">Post</h1>
      <div className="grid gap-4">
        <PostLists posts={currentPosts} />
        {totalPages > 1 && (
          <PostPagination totalPages={totalPages} currentPage={1} />
        )}
      </div>
    </div>
  );
};

export default Posts;
