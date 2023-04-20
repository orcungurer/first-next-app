// my-domain.com/news/news-detail
import { useRouter } from "next/router"; // 1

function DetailPage() {
  const router = useRouter(); // 2

  const newsId = router.query.newsId; // 3
  console.log("News ID:", newsId);

  return <h1>The Detail Page</h1>;
}

export default DetailPage;