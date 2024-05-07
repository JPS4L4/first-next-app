const isNumber = (value: string) => !/^\d+$/.test(value);

export const getPagination = <T>(
  items: T[],
  postPerPage = 2,
  currentPage = "1"
) => {
  if (isNumber(currentPage)) {
    throw new Error("Invalid Number")
  }

  const currentPageInt = parseInt(currentPage, 10);
  const totalPosts = items.length;
  const totalPages = Math.ceil(totalPosts / postPerPage);

  if (currentPageInt > totalPages) {
    throw new Error(`page ${currentPageInt} does not exists`);
  }

  const offSet = (currentPageInt - 1) * postPerPage;
  const currentPosts = items.slice(offSet, offSet + postPerPage);

  return {
    currentPosts,
    totalPages,
  };
};
