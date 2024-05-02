import PostLists from "@/components/PostLists";
import PostPagination from "@/components/PostPagination";
import { allPosts, Post } from "contentlayer/generated";

interface Props {
  params: {
    number: string;
  };
}

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

const totalPosts = posts.length;
const postsPerPage = 2;
const totalPages = Math.ceil(totalPosts / postsPerPage);

const LayoutPages = ({ params }: Props) => {
  const currentPage = parseInt(params.number);
  const offSet = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(offSet, offSet + postsPerPage);

  return (
    <div>
      <h1 className="text-center my-4 text-3xl">Post</h1>
      <div className="grid gap-4">
        <PostLists posts={currentPosts} />
        <PostPagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default LayoutPages;
