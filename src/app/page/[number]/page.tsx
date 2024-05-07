import ButtonLink from "@/components/ButtonLink";
import PostLists from "@/components/PostLists";
import PostPagination from "@/components/PostPagination";
import { notFound } from "next/navigation";
import { allPosts, Post } from "contentlayer/generated";
import { getPagination } from "@/utils/Pagination";

interface Props {
  params: {
    number: string;
  };
}

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

export const generateStaticParams = () => {
  return Array.from({ length: posts.length }).map((_, index) => ({
    number: `${index + 1}`,
  }));
};

const LayoutPages = ({ params }: Props) => {
  let arrayCurrentPosts;
  let totalPagesNumber;

  try {
    const { currentPosts, totalPages } = getPagination(posts, 2, params.number);
    arrayCurrentPosts = currentPosts;
    totalPagesNumber = totalPages;
  } catch (error) {
    notFound();
  }

  return (
    <div>
      <div className="grid gap-4 p-4">
        <PostLists posts={arrayCurrentPosts} />
        {totalPagesNumber > 1 && (
          <PostPagination
            totalPages={totalPagesNumber}
            currentPage={parseInt(params.number)}
          />
        )}
      </div>
      <div className="text-center my-4">
        <ButtonLink href="/">Volver al Home</ButtonLink>
      </div>
    </div>
  );
};

export default LayoutPages;
