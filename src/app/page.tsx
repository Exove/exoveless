import AccordionExample from "../examples/accordion-example";
import BreadcrumbsExample from "../examples/breadcrumbs-example";
import ButtonExample from "../examples/button-example";
import DropdownExample from "../examples/dropdown-example";
import HeadingExample from "../examples/heading-example";
import ModalExample from "../examples/modal-example";
import NotificationExample from "../examples/notification-example";
import TabsExample from "../examples/tabs-example";
import CarouselExample from "../examples/carousel-example";
import ScrollerExample from "../examples/scroller-example";
import RichTextExample from "../examples/rich-text-example";
import FormExample from "@/examples/form-example";
import SidePanelExample from "@/examples/side-panel-example";
import SidePanelMenuExample from "@/examples/side-panel-menu-example";
import ToasterExample from "@/examples/toaster-example";
import ComponentSearch from "@/components/component-search/component-search";

export default function Home() {
  return (
    <ComponentSearch>
      <div data-component="AccordionExample">
        <AccordionExample />
      </div>

      <div data-component="BreadcrumbsExample">
        <BreadcrumbsExample />
      </div>

      <div data-component="ButtonExample">
        <ButtonExample />
      </div>

      <div data-component="CarouselExample">
        <CarouselExample />
      </div>

      <div data-component="DropdownExample">
        <DropdownExample />
      </div>

      <div data-component="FormExample">
        <FormExample />
      </div>

      <div data-component="HeadingExample">
        <HeadingExample />
      </div>

      <div data-component="ModalExample">
        <ModalExample />
      </div>

      <div data-component="NotificationExample">
        <NotificationExample />
      </div>

      <div data-component="RichTextExample">
        <RichTextExample />
      </div>

      <div data-component="ScrollerExample">
        <ScrollerExample />
      </div>

      <div data-component="SidePanelExample">
        <SidePanelExample />
      </div>

      <div data-component="SidePanelMenuExample">
        <SidePanelMenuExample />
      </div>

      <div data-component="ToasterExample">
        <ToasterExample />
      </div>

      <div data-component="TabsExample">
        <TabsExample />
      </div>
    </ComponentSearch>
  );
}
