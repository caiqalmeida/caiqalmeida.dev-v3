import Link from "next/link";

import { Container, BlogCard } from "../../components";
import { getAllArticles } from "../../lib/mdx";

// TODO: Type post
export default function Blog({ posts }: any) {
  return (
    <Container>
      {posts.map((post: any) => (
        <Link href={`/blog/${post.slug}`}>
          <BlogCard
            date={post.date}
            title={post.title}
            description={post.description}
            readingTime={post.readingTime}
          />
        </Link>
      ))}
    </Container>
  );
}

export async function getStaticProps() {
  const articles: any[] = await getAllArticles();

  articles
    .map((article) => article.data)
    .sort((a, b) => {
      if (a.data.date > b.data.date) return 1;
      if (a.data.date < b.data.date) return -1;

      return 0;
    });

  return {
    props: {
      posts: articles.reverse(),
    },
  };
}
