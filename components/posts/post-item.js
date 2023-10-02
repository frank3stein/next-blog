import Image from "next/image";
import Link from "next/link";

export default function PostItem(props) {
  const {
    title,
    image,
    excerpt,
    date,
    slug,
    width = 300,
    height = 200,
  } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li>
      <Link href={linkPath}>
        <a>
          <div>
            <Image
              src={imagePath}
              alt={title}
              width={width}
              height={height}
              layout="responsive"
            />
          </div>
          <div>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
