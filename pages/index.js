import Head from "next/head";
import Image from "next/image";
import Featured from "../components/home/featured";
import Hero from "../components/home/hero";
import { getFeaturedPosts } from "../lib/posts-util";

// const DUMMY_POSTS = [
//   {
//     title: "Post 1",
//     image: "post-1.jpg",
//     excerpt: "This is the first post",
//     date: "2020-01-01",
//     slug: "post-1",
//   },
// ];

export default function Home() {
  return (
    <div className="container">
      <Head></Head>
      <Hero></Hero>
      <Featured posts={props.posts} />
    </div>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
