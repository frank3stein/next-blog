import PostItem from "./post-item";

export default function PostGrid(props) {
  const { posts } = props;
  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post}></PostItem>
      ))}
    </ul>
  );
}
