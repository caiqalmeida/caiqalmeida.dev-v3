// mb-4 text-3xl font-bold tracking-tight
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeCodeTitles from "rehype-code-titles";
import { MDXRemote } from "next-mdx-remote";
import "highlight.js/styles/night-owl.css";

import { Container } from "../../components";
import { getSlug } from "../../lib/mdx";

// TODO: Type BlogPost
export default function BlogPost({ post: { source, frontmatter } }: any) {
  return (
    <Container
      title={`${frontmatter.title} – Caíque Almeida`}
      description={frontmatter.description}
      date={new Date(frontmatter.date).toISOString()}
      type="article"
    >
      <header className="text-gradient">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          {frontmatter.title}
        </h1>
        <div className="flex justify-between align items-center mb-4">
          <span className="text-sm">{frontmatter.date}</span>
          <span className="text-sm">{frontmatter.readingTime}</span>
        </div>
      </header>

      <div className="post leading-relaxed">
        <MDXRemote {...source} lazy />
      </div>
    </Container>
  );
}

export async function getStaticPaths() {
  const paths = (await getSlug()).map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

import { getArticleFromSlug } from "../../lib/mdx";

export async function getStaticProps({ params }: any) {
  const { slug } = params;
  const { content, frontmatter } = await getArticleFromSlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ["anchor"] },
          },
          { behaviour: "wrap" },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  });

  return {
    props: {
      post: {
        source: mdxSource,
        frontmatter,
      },
    },
  };
}
