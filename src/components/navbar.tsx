import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { routes, socialLinks } from "../data";

export const Navbar = () => {
  const { asPath: routerPath } = useRouter();

  return (
    <nav className="pt-20 pb-36 flex">
      <ul className="flex items-end gap-12 text-base mx-auto">
        <li>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="caique logo"
              width={40}
              height={40}
            />
          </Link>
        </li>
        {routes.map((route) => {
          const className = routerPath === route.path ? "active-link" : "";
          return (
            <li className={className} key={route.name}>
              <Link href={route.path}>{route.name}</Link>
            </li>
          );
        })}
        <li>|</li>
        {socialLinks.map((link) => (
          <li className="" key={link.name}>
            <a
              className="h-2"
              href={link.url}
              target="_blank"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
