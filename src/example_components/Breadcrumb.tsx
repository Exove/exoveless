"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Breadcrumb() {
  const pathname = usePathname();
  const t = useTranslations();

  const segments = pathname.split("/").filter(Boolean);

  // Function to format URL segments: remove hyphens and capitalize first word
  const formatSegment = (segment: string) => {
    return segment
      .split("-")
      .map((word, index) => (index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word))
      .join(" ");
  };

  if (segments.length === 0) return null;

  return (
    <nav
      aria-label={t("navigation.breadcrumb")}
      className="flex items-center gap-2 text-sm text-stone-400"
    >
      <Link href="/" className="flex items-center gap-1 hover:text-stone-300">
        {t("navigation.home")}
      </Link>

      {segments.slice(0, -1).map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");

        return (
          <div key={href} className="flex items-center gap-2">
            <span className="font-bold text-stone-600">/</span>
            <Link href={href} className="hover:text-stone-300">
              {segment === "articles" ? t("articles.title") : formatSegment(segment)}
            </Link>
          </div>
        );
      })}
    </nav>
  );
}
