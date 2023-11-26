import { PreviewAlert } from "templates/preview-alert";
import Header from "./header";

interface LayoutProps {
  menus?: any;
  children?: any;
}

export function Layout({ children, menus }: LayoutProps) {
  return (
    <>
      <PreviewAlert />
      <div className="text-black">
        <Header menu={menus} />
        <div className="max-w-screen-md px-6 mx-auto">
          <main className="container py-10 mx-auto font-sans">{children}</main>
        </div>
      </div>
    </>
  );
}
