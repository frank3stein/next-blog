import PostGrid from "../posts/post-grid";

export default function Featured(props) {
  const { posts } = props;
  return (
    <div className="">
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </div>
  );
}
