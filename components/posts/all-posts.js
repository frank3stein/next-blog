import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import PostGrid from "./post-grid";

export default function AllPosts(props) {
  return (
    <section>
      <h1>All Posts</h1>
      <PostGrid posts={props.posts}></PostGrid>
    </section>
  );
}
