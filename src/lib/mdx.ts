import path from "path";
import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";
import { sync } from "glob";

const articlesPath = path.join(process.cwd(), "src/data/posts");

export async function getSlug() {
  const paths = sync(`${articlesPath}/*.mdx`);

  return paths.map((path) => {
    const pathContent = path.split("/");
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extension] = fileName.split(".");

    return slug;
  });
}

export async function getArticleFromSlug(slug: string) {
  const articleDirectory = path.join(articlesPath, `${slug}.mdx`);
  const source = fs.readFileSync(articleDirectory);
  const { content, data } = matter(source);

  return {
    content,
    frontmatter: {
      slug,
      description: data.description,
      title: data.title,
      date: data.date,
      readingTime: readingTime(source as any).text,
      ...data,
    },
  };
}

export async function getAllArticles() {
  const articles: string[] = fs.readdirSync(
    path.join(process.cwd(), "src/data/posts")
  );

  return articles.reduce((allArticles, articleSlug): any => {
    const source = fs.readFileSync(
      path.join(process.cwd(), "src/data/posts", articleSlug),
      "utf-8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: articleSlug.replace(".mdx", ""),
        readingTime: readingTime(source).text,
      },
      ...allArticles,
    ];
  }, []);
}
