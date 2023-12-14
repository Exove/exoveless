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
      <div className="font-sans text-black">
        <Header menu={menus} />
        <div className="max-w-screen-md px-6 mx-auto">
          <main className="container py-10 mx-auto">{children}</main>
        </div>
      </div>
    </>
  );
}
