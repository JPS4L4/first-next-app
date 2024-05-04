import { Post } from "contentlayer/generated";
import PostItem from "./PostItem";

interface Props {
  posts: Post[];
}

const PostLists = ({ posts }: Props) => {
  return (
    <>
      {Array.isArray(posts) ? (
        posts.map((post) => (
          <PostItem key={post._raw.flattenedPath} post={post} />
        ))
      ) : (
        <>
          <h4>Error al cargar Items!</h4>
        </>
      )}
    </>
  );
};

export default PostLists;
