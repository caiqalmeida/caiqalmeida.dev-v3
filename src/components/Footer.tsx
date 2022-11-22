import { LinkProps } from "../lib/types";

function ExternalLink({ href, text }: LinkProps) {
  return (
    <li className="link uppercase text-xs">
      <a target="_blank" rel="noopener noreferrer" href={href}>
        {text}
      </a>
    </li>
  );
}

export function Footer() {
  return (
    <footer>
      <ExternalLink href="https://github.com/caiqalmeida" text="github" />
      <ExternalLink
        href="https://www.linkedin.com/in/caiquedalmeida/"
        text="linkedin"
      />
    </footer>
  );
}
