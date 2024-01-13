import { useRouter } from "next/router";

export function useLanguageMenu() {
  const { locales, asPath } = useRouter();

  const languages: Array<{ title: string; url: string; locale: string }> = [];

  locales?.map((locale) =>
    languages.push({
      title: locale == "en" ? "English" : locale == "es" ? "Español" : null,
      url: asPath,
      locale: locale,
    })
  );

  return [languages];
}
