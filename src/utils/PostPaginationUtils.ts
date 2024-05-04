import { allPosts, Post } from "contentlayer/generated";

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

const totalPosts = posts.length;
const postPerPage = 3;
export const totalPages = Math.ceil(totalPosts / postPerPage);

export const getPostsPagination = (currentPage: number = 1) => {
  if (currentPage > totalPages) {
    throw new Error(`page ${currentPage} does not exists`);
  }

  const offSet = (currentPage - 1) * postPerPage;
  const currentPosts = posts.slice(offSet, offSet + postPerPage);

  return {
    currentPosts,
  };
};
