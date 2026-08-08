import Link from "next/link";
import Icon from "../icon";

import socialLinksStyles from "./socaillinks.module.scss";

type SocialLinksProps = {
  classes?: {
    root?: string;
    item?: string;
    link?: string;
  };
};

const socialLinks = [
  {
    href: "https://www.instagram.com/daksharchitects/",
    label: "Instagram",
    iconName: "icon-instagram",
  },
  {
    href: "https://www.facebook.com/daksharchitects/",
    label: "Facebook",
    iconName: "icon-facebook",
  },
  {
    href: "https://www.linkedin.com/company/daksharchitects/",
    label: "LinkedIn",
    iconName: "icon-linkedin",
  },
  {
    href: "https://www.tiktok.com/@daksharchitects",
    label: "TikTok",
    iconName: "icon-tiktok",
  },
];

const SocialLinks = ({ classes }: SocialLinksProps) => {
  const rootClassName =
    `${socialLinksStyles.socialList} ${classes?.root || ""}`.trim();
  const itemClassName =
    `${socialLinksStyles.socialItem} ${classes?.item || ""}`.trim();
  const linkClassName =
    `${socialLinksStyles.socialLink} ${classes?.link || ""}`.trim();

  return (
    <ul className={rootClassName}>
      {socialLinks.map((link) => (
        <li key={link.href} className={itemClassName}>
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            <Icon iconName={link.iconName} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
