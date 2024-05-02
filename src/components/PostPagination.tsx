import Link from "next/link";

interface Props {
  totalPages: number;
  currentPage: number;
}

const PostPagination = ({ totalPages, currentPage = 1 }: Props) => {
  return (
    <div className="flex gap-4">
      <Link
        href={`/page/${currentPage - 1}`}
        className={`${
          currentPage === 1
            ? "text-gray-600 pointer-events-none"
            : "text-blue-700"
        }`}
      >
        preview
      </Link>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button disabled={currentPage === index + 1}>
          <Link
            key={index}
            href={`/page/${index + 1}`}
            className={`${
              currentPage === index + 1
                ? "text-gray-600 pointer-events-none"
                : "text-blue-700"
            }`}
          >
            {index + 1}
          </Link>
        </button>
      ))}
      <Link
        href={`/page/${currentPage + 1}`}
        className={`${
          currentPage === totalPages
            ? "text-gray-600 pointer-events-none"
            : "text-blue-700"
        }`}
      >
        next
      </Link>
    </div>
  );
};

export default PostPagination;
