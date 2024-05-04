import PostLists from "@/components/PostLists";
import PostPagination from "@/components/PostPagination";
import { totalPages, getPostsPagination } from "@/utils/PostPaginationUtils";
import { notFound } from "next/navigation";

interface Props {
  params: {
    number: string;
  };
}

export const generateStaticParams = () => {
  return Array.from({ length: totalPages }).map((_, index) => ({
    number: `${index + 1}`,
  }));
};

const LayoutPages = ({ params }: Props) => {
  let arrayCurrentPosts;

  try {
    if (!/^\d+$/.test(params.number)) {
      throw new Error("Invalid number");
    }

    const currentPage = parseInt(params.number);
    arrayCurrentPosts = getPostsPagination(currentPage).currentPosts;
  } catch (error) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-center my-4 text-3xl">Post</h1>
      <div className="grid gap-4">
        <PostLists posts={arrayCurrentPosts} />
        {totalPages > 1 && (
          <PostPagination
            totalPages={totalPages}
            currentPage={parseInt(params.number)}
          />
        )}
      </div>
    </div>
  );
};

export default LayoutPages;
