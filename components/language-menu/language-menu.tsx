import { useRouter } from "next/router";

export function useLanguageMenu() {
  const { locales, asPath } = useRouter();

  const languages = [];

  locales?.map((locale) =>
    languages.push({
      title:
        locale == "en" ? "English" : locale == "es" ? "Español" : "undefined",
      url: asPath,
      locale: locale,
    })
  );

  const mobileLanguages = { title: "Language", sublinks: languages };

  return [languages, mobileLanguages];
}
