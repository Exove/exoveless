import { useLanguageMenu } from "components/language-menu/language-menu";
import Link from "next/link";

interface HeaderProps {
  menu?: Array<{ title: string; url: string }>;
}

export default function Header({ menu }: HeaderProps) {
  const [languages] = useLanguageMenu();

  // Create the mobile menu.
  const mobileMenu = [];
  menu?.map((item) => mobileMenu.push({ title: item.title, url: item.url }));

  return (
    <header>
      <div className="container mx-auto flex items-center justify-between py-6">
        <div className="flex items-center gap-40">
          <Link href="/" passHref className="flex items-center gap-4">
            <span className="text-2xl font-semibold">Exoveless UI</span>
          </Link>

          {/* <div className="hidden gap-6 text-lg lg:flex fl">
            {menu?.map((item, index) => (
              <div key={index}>
                <Link href={item.url}>{item.title}</Link>
              </div>
            ))}
          </div> */}
        </div>

        {/* <div className="flex items-center gap-8">
          <div className="hidden lg:inline-block">
            <Dropdown label="Language" items={languages} directionLeft />
          </div>
          <div className="inline-block">
            <MobileMenu items={mobileMenu} />
          </div>
        </div> */}
      </div>
    </header>
  );
}
