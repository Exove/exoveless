import Container from "@/components/Container";
import Heading from "@/components/Heading";
import { Link } from "@/i18n/routing";
import { parseLink } from "@/lib/parse-link";
import { Locale } from "@/types/locales";
import configPromise from "@payload-config";
import { getLocale, getTranslations } from "next-intl/server";
import { getPayload } from "payload";
import { FacebookIcon, InstagramIcon, LinkedInIcon, YoutubeIcon } from "./Icons";

export async function Footer() {
  const locale = (await getLocale()) as Locale;

  const payload = await getPayload({
    config: configPromise,
  });

  const [footerMenu, footer] = await Promise.all([
    payload.findGlobal({
      slug: "footer-menu",
      depth: 1,
      locale: locale,
    }),
    payload.findGlobal({
      slug: "footer",
      locale: locale,
    }),
  ]);

  const t = await getTranslations();

  return (
    <footer className="bg-stone-800 pb-8 pt-16 text-stone-400">
      <Container>
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-6 xl:gap-24">
          {/* Company Info */}
          <div className="md:col-span-2">
            {footer.general?.title && (
              <Heading level="h2" size="sm" className="mb-4 text-white">
                {footer.general.title}
              </Heading>
            )}
            {footer.general?.description && <p className="mb-4">{footer.general?.description}</p>}
            <ul className="mt-6 flex gap-4">
              {footer.general?.social?.facebook && (
                <li>
                  <Link href={footer.general.social.facebook} className="block hover:text-white">
                    <span className="sr-only">Facebook</span>
                    <FacebookIcon />
                  </Link>
                </li>
              )}
              {footer.general?.social?.instagram && (
                <li>
                  <Link href={footer.general.social.instagram} className="block hover:text-white">
                    <span className="sr-only">Instagram</span>
                    <InstagramIcon />
                  </Link>
                </li>
              )}
              {footer.general?.social?.linkedin && (
                <li>
                  <Link href={footer.general.social.linkedin} className="block hover:text-white">
                    <span className="sr-only">LinkedIn</span>
                    <LinkedInIcon />
                  </Link>
                </li>
              )}
              {footer.general?.social?.youtube && (
                <li>
                  <Link href={footer.general.social.youtube} className="block hover:text-white">
                    <span className="sr-only">YouTube</span>
                    <YoutubeIcon />
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Footer Menu */}
          <div className="md:col-span-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {footerMenu.items?.map((menuItem, index) => (
                <nav key={index} aria-label={`${t("footer.menuLabel")} ${menuItem.label}`}>
                  <Heading level="h2" size="sm" className="mb-4 text-white">
                    {menuItem.label}
                  </Heading>
                  <ul className="space-y-2">
                    {menuItem.children?.map((child, index) => {
                      const { linkUrl, linkLabel } = parseLink(child.link);
                      if (linkUrl) {
                        return (
                          <li key={index}>
                            <Link href={linkUrl} className="hover:text-white">
                              {linkLabel}
                            </Link>
                          </li>
                        );
                      }
                      return null;
                    })}
                  </ul>
                </nav>
              ))}

              {/* Contact Info */}
              {Object.values(footer.contact ?? {}).some((value) => value) && (
                <div>
                  <Heading level="h2" size="sm" className="mb-4 text-white">
                    {t("footer.contact")}
                  </Heading>

                  <address className="not-italic">
                    <div className="mb-2">
                      {footer.contact?.address && <p>{footer.contact.address}</p>}
                      {footer.contact?.city && (
                        <p>
                          {footer.contact.postalCode} {footer.contact.city}
                        </p>
                      )}
                    </div>
                    {footer.contact?.phone && (
                      <p>
                        <Link className="hover:text-white" href={`tel:${footer.contact.phone}`}>
                          {footer.contact.phone}
                        </Link>
                      </p>
                    )}
                    {footer.contact?.email && (
                      <p>
                        <Link className="hover:text-white" href={`mailto:${footer.contact.email}`}>
                          {footer.contact.email}
                        </Link>
                      </p>
                    )}
                  </address>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        {footer.copyright && (
          <div className="mt-12 flex items-center justify-center border-t border-stone-700 pt-4 text-sm">
            <p>
              &copy; {new Date().getFullYear()} {footer.copyright}
            </p>
          </div>
        )}
      </Container>
    </footer>
  );
}
