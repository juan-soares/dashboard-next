import Link from "next/link";
import { links } from "./NavLinks.const";

export function NavLinks() {
  return (
    <ul>
      {links.map(({ icon, id, slug, title }) => {
        const LinkIcon = icon;
        return (
          <li key={id}>
            <Link href={slug}>
              <LinkIcon width={20} height={20} />
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
