// my-domain.com/news
import Link from "next/link"; // 2
import { Fragment } from "react";

function NewsPage() {
  return (
    // 1
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          {/* 3 */}
          <Link href="/news/nextjs">NextJS is awesome</Link>
        </li>
        <li>Another list element</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
