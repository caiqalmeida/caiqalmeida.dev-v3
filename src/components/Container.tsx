import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import NextLink from "next/link";
import cn from "classnames";

import { LinkProps } from "../lib/types";

function InternalLink({ href, text }: LinkProps) {
  const { asPath: routerPath } = useRouter();

  const isActive = routerPath === href;

  return (
    <li
      className={cn(
        "link text-white opacity-70 tracking-wide text-xs",
        isActive ? "active-link" : ""
      )}
    >
      <NextLink href={href}>
        <span className="capsize">{text}</span>
      </NextLink>
    </li>
  );
}

export function Container(props: any) {
  const { children, ...customMeta } = props;

  const { asPath: routerPath } = useRouter();

  const meta = {
    title: "Caique Almeida – web developer.",
    description: `Front-end developer and Javascript enthusiast.`,
    // TODO: Add an static image
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

      <div className="max-w-2xl mx-auto">
        <nav className="flex mt-8 mb-24">
          <ul className="flex items-end gap-12 text-base">
            <li>
              <NextLink href="/">
                <Image
                  src="/images/logo.svg"
                  alt="caique logo"
                  width={30}
                  height={30}
                />
              </NextLink>
            </li>
            <InternalLink href="/sobre" text="Sobre" />
            <InternalLink href="/blog" text="Blog" />
          </ul>
        </nav>
        <main>{children}</main>
      </div>
    </>
  );
}
