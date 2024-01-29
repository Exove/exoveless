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
      <Header menu={menus} />
      <div className="max-w-screen-lg px-4 lg:px-0 mx-auto">
        <main className="container py-10 mx-auto">{children}</main>
      </div>
    </>
  );
}
