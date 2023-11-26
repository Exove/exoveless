import Link from "next/link";
import Dropdown from "components/dropdown/dropdown";
import MobileMenu from "components/mobile-menu/mobile-menu";
import { useLanguageMenu } from "components/language-menu/language-menu";
import DarkModeSwitcher from "components/dark-mode-switcher/dark-mode-switcher";
import { BiSearch } from "react-icons/bi";

interface HeaderProps {
  menu?: any;
}

export default function Header({ menu }: HeaderProps) {
  const mobileMenu = [];
  const [languageMenu, mobileLanguageMenu] = useLanguageMenu();

  menu?.map((item) => mobileMenu.push({ title: item.title, url: item.url }));
  mobileMenu.push(mobileLanguageMenu);

  return (
    <header>
      <div className="container flex items-center justify-between py-6 mx-auto font-sans">
        <div className="flex items-center gap-40">
          <Link href="/" passHref className="flex items-center gap-4">
            <span className="hidden text-2xl font-semibold border-2 border-black lg:inline-block">
              Next Drupal
            </span>
          </Link>
          <div className="hidden gap-6 text-lg lg:flex">
            {menu?.map((item, index) => (
              <div key={index}>
                <Link href={item.url}>{item.title}</Link>
              </div>
            ))}
          </div>
        </div>
        <button className="inline-flex items-center py-3 pl-4 pr-12 border-2 bg-stone-200 hover:bg-white">
          <BiSearch className="w-5 h-5 mr-3" /> Quick search
        </button>
        <div className="flex items-center gap-8">
          <div className="hidden lg:inline-block">
            <Dropdown
              label="Language"
              items={languageMenu}
              directionLeft={true}
            />
          </div>
          {/* <div className="items-center hidden lg:flex">
            <DarkModeSwitcher />
          </div> */}
          <div className="inline-block lg:hidden">
            <MobileMenu items={mobileMenu} />
          </div>
        </div>
      </div>
    </header>
  );
}
