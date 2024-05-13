import { drupal } from "lib/drupal";
import { GetStaticPropsResult } from "next";
import Head from "next/head";
import { useState } from "react";
import { CopyBlock, github } from "react-code-blocks";
import { Layout } from "templates/layout";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import ContentSection from "components/containers/content-section";
import Checkbox from "components/forms/checkbox";
import Fieldset from "components/forms/fieldset";
import Input from "components/forms/input";
import Radio from "components/forms/radio";
import Range from "components/forms/range";
import Select from "components/forms/select";
import Textarea from "components/forms/textarea";
import Heading from "components/heading/heading";
import AccordionExample from "./examples/accordion-example";
import BreadcrumbsExample from "./examples/breadcrumbs-example";
import ButtonExample from "./examples/button-example";
import DropdownExample from "./examples/dropdown-example";
import HeadingExample from "./examples/heading-example";
import MobileMenuExample from "./examples/mobile-menu-example";
import ModalExample from "./examples/modal-example";
import NotificationExample from "./examples/notification-example";
import TabsExample from "./examples/tabs-example";
import { Carousel } from "components/carousel/carousel";
import { Scroller } from "components/scroller/scroller";
import CarouselExample from "./examples/carousel-example";
import ScrollerExample from "./examples/scroller-example";

interface ComponentsProps {
  mainMenu?: any;
}

export default function Components({ mainMenu }: ComponentsProps) {
  const [inputValue, setInputValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState("two");
  const [rangeValue, setRangeValue] = useState(20);
  const [selectValue, setSelectValue] = useState("ca");
  const [textareaValue, setTextareaValue] = useState("");

  return (
    <Layout menus={mainMenu.items}>
      <Head>
        <title>Exoveless | Components</title>
        <meta name="description" content="Library of reusable components." />
      </Head>

      <AccordionExample />

      <BreadcrumbsExample />

      <ButtonExample />

      <CarouselExample />

      <ScrollerExample />

      <DropdownExample />

      <HeadingExample />

      <MobileMenuExample />

      <ModalExample />

      <NotificationExample />

      <TabsExample />
      <ContentSection>
        <Heading level="h2" size="large">
          Checkbox
        </Heading>
        <Checkbox
          label="I agree with the terms and conditions."
          onChange={(event) => setCheckboxValue(event.target.checked)}
          checked={checkboxValue}
        />
        {checkboxValue && (
          <div className="mt-5">checkboxValue: {checkboxValue.toString()}</div>
        )}
        <CodeBlock>
          {`
// Controlled component
const [checkboxValue, setCheckboxValue] = useState(false);

<Checkbox
  label="I agree with the terms and conditions."
  onChange={(event) => setCheckboxValue(event.target.checked)}
  checked={checkboxValue}
/>
          `}
        </CodeBlock>
      </ContentSection>
      <ContentSection>
        <Heading level="h2" size="large">
          Input
        </Heading>
        <Input
          label="Base input"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        {inputValue && <div className="mt-5">inputValue: {inputValue}</div>}
        <CodeBlock>
          {`
// Controlled component
const [inputValue, setInputValue] = useState("");

<Input
  label="Base input"
  value={inputValue}
  onChange={(event) => {
    setInputValue(event.target.value);
  }}
/>
          `}
        </CodeBlock>
      </ContentSection>
      <ContentSection>
        <Heading level="h2" size="large">
          Radio
        </Heading>

        <Fieldset legend="Choose one" screenReadersOnly>
          <Radio
            onChange={(event) => setRadioValue(event.target.value)}
            label="Radio 1"
            name="buttonset"
            value="one"
            activeValue={radioValue}
          />
          <Radio
            onChange={(event) => setRadioValue(event.target.value)}
            label="Radio 2"
            name="buttonset"
            value="two"
            activeValue={radioValue}
          />
          <Radio
            onChange={(event) => setRadioValue(event.target.value)}
            label="Radio 3"
            name="buttonset"
            value="three"
            activeValue={radioValue}
          />
        </Fieldset>
        {radioValue && <div className="mt-5">radioValue: {radioValue}</div>}
        <CodeBlock>
          {`
// Controlled component
const [radioValue, setRadioValue] = useState("two");

<Fieldset legend="Choose one" screenReadersOnly>
  <Radio
    onChange={(event) => setRadioValue(event.target.value)}
    label="Radio 1"
    name="buttonset"
    value="one"
    activeValue={radioValue}
  />
  <Radio
    onChange={(event) => setRadioValue(event.target.value)}
    label="Radio 2"
    name="buttonset"
    value="two"
    activeValue={radioValue}
  />
</Fieldset>
          `}
        </CodeBlock>
      </ContentSection>
      <ContentSection>
        <Heading level="h2" size="large">
          Range
        </Heading>
        <Range
          label="Volume"
          value={rangeValue}
          onChange={(event) => setRangeValue(event.target.value)}
        />
        {rangeValue && <div className="mt-5">rangeValue: {rangeValue}</div>}
        <CodeBlock>
          {`
// Controlled component
const [rangeValue, setRangeValue] = useState(20);

<Range
  label="Volume"
  value={rangeValue}
  onChange={(event) => setRangeValue(event.target.value)}
/>
          `}
        </CodeBlock>
      </ContentSection>
      <ContentSection>
        <Heading level="h2" size="large">
          Select
        </Heading>
        <Select
          label="Label"
          value={selectValue}
          onChange={(event) => setSelectValue(event.target.value)}
          options={[
            { name: "Choose country", value: "" },
            { name: "United States", value: "us" },
            { name: "Canada", value: "ca" },
            { name: "France", value: "fr" },
            { name: "Germany", value: "de" },
          ]}
        />
        {selectValue && <div className="mt-5">selectValue: {selectValue}</div>}
        <CodeBlock>
          {`
// Controlled component
const [selectValue, setSelectValue] = useState("ca");

<Select
  label="Label"
  value={selectValue}
  onChange={(event) => setSelectValue(event.target.value)}
  options={[
    { name: "Choose country", value: "" },
    { name: "United States", value: "us" },
    { name: "Canada", value: "ca" },
    { name: "France", value: "fr" },
    { name: "Germany", value: "de" },
  ]}
/>
          `}
        </CodeBlock>
      </ContentSection>
      <ContentSection>
        <Heading level="h2" size="large">
          Textarea
        </Heading>
        <Textarea
          label="Label"
          value={textareaValue}
          onChange={(event) => {
            setTextareaValue(event.target.value);
          }}
        />
        {textareaValue && (
          <div className="mt-5">textareaValue: {textareaValue}</div>
        )}
        <CodeBlock>
          {`
// Controlled component
const [textareaValue, setTextareaValue] = useState("");

<Textarea
  label="Label"
  value={textareaValue}
  onChange={(event) => {
    setTextareaValue(event.target.value);
  }}
/>
          `}
        </CodeBlock>
      </ContentSection>
    </Layout>
  );
}

function CodeBlock({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-5 overflow-hidden">
      <button onClick={() => setOpen(!open)}>
        {open ? (
          <div className="flex items-center gap-1 text-sm">
            Code <ChevronUpIcon className="h-5 w-5" />
          </div>
        ) : (
          <div className="flex items-center gap-1 text-sm">
            Code <ChevronDownIcon className="h-5 w-5" />
          </div>
        )}
      </button>
      {open && (
        <code className="mt-2 block border border-gray-300 p-3">
          <CopyBlock text={children} language="jsx" theme={github} />
        </code>
      )}
    </div>
  );
}

export async function getStaticProps(
  context,
): Promise<GetStaticPropsResult<ComponentsProps>> {
  const mainMenu = await drupal.getMenu("main", {
    locale: "en",
    defaultLocale: "en",
  });

  return {
    props: {
      mainMenu,
    },
    revalidate: 10, // Activates ISR with 10 seconds period.
  };
}
