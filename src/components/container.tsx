import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import NextLink from "next/link";
import cn from "classnames";

interface LinkProps {
  href: string;
  text: string;
}

function InternalLink({ href, text }: LinkProps) {
  const { asPath: routerPath } = useRouter();

  const isActive = routerPath === href;

  return (
    <li className={cn("link", isActive ? "active-link" : "")}>
      <NextLink href={href}>
        <span className="capsize">{text}</span>
      </NextLink>
    </li>
  );
}

function ExternalLink({ href, text }: LinkProps) {
  return (
    <li className="link">
      <a target="_blank" rel="noopener noreferrer" href={href}>
        {text}
      </a>
    </li>
  );
}

export function Container(props: any) {
  const { children, ...customMeta } = props;

  const { asPath: routerPath } = useRouter();

  const meta = {
    title: "Caique Almeida – web developer.",
    description: `Front-end developer and Javascript enthusiast.`,
    // Add an static image
    // image: "",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link rel="shortcut icon" href="/images/logo.svg" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://caiqalmeida.dev${routerPath}`}
        />
        <link rel="canonical" href={`https://caiqalmeida.dev${routerPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Caique Almeida" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@caiqalmeida" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <div className="min-h-screen min-w-full bg-dark-purple text-white">
        <nav className="pt-20 pb-36 flex">
          <ul className="flex items-end gap-12 text-base mx-auto">
            <li>
              <NextLink href="/">
                <Image
                  src="/images/logo.svg"
                  alt="caique logo"
                  width={40}
                  height={40}
                />
              </NextLink>
            </li>
            <InternalLink href="/sobre" text="sobre" />
            <InternalLink href="/blog" text="blog" />
            <li>|</li>
            <ExternalLink href="https://github.com/caiqalmeida" text="github" />
            <ExternalLink
              href="https://www.linkedin.com/in/caiquedalmeida/"
              text="linkedin"
            />
          </ul>
        </nav>
      </div>
      <main>{children}</main>
    </>
  );
}
