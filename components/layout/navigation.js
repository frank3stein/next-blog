import Link from "next/link";
import Logo from "./logo";

export default function Navigation() {
  return (
    <header>
      <Link href="/">
        <a>
          <Logo></Logo>
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="posts">All the Posts</Link>
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
