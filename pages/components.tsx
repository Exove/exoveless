import React, { useState } from "react";
import Head from "next/head";
import { GetStaticPropsResult } from "next";
import { Layout } from "templates/layout";
import { drupal } from "lib/drupal";

import Button from "components/button/button";
import Heading from "components/heading/heading";
import Select from "components/forms/select";
import Dropdown from "components/dropdown/dropdown";
import Notification from "components/notification/notification";
import ContentSection from "components/containers/content-section";
import Accordion from "components/accordion/accordion";
import Tabs from "components/tabs/tabs";
import Modal from "components/modal/modal";
import MobileMenu from "components/mobile-menu/mobile-menu";
import Checkbox from "components/forms/checkbox";
import Input from "components/forms/input";
import Radio from "components/forms/radio";
import Range from "components/forms/range";
import Textarea from "components/forms/textarea";
import Fieldset from "components/forms/fieldset";
import ButtonContainer from "components/containers/button-container";

interface ComponentsProps {
  mainMenu?: any;
}

export default function Components({ mainMenu }: ComponentsProps) {
  const [inputValue, setInputValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState("two");
  const [rangeValue, setRangeValue] = useState(20);
  const [switchValue, setSwitchValue] = useState(false);
  const [selectValue, setSelectValue] = useState("ca");
  const [textareaValue, setTextareaValue] = useState("");

  const accordionItems = [
    {
      title: "Accordion title number one",
      body: "With consumer awareness articles and documentaries frequently picking up on this topic, it's likely the case that retailers find it harder to get away with the more obvious ploys. We are becoming ever more savvy consumers and there's probably not a great deal that gets past us.",
    },
    {
      title: "Accordion title number two",
      body: "With consumer awareness articles and documentaries frequently picking up on this topic, it's likely the case that retailers find it harder to get away with the more obvious ploys. We are becoming ever more savvy consumers and there's probably not a great deal that gets past us. But here's a few retail tricks to keep in mind when you are rushing around the weekly supermarket stock-up.With consumer awareness articles and documentaries frequently picking up on this topic, it's likely the case that retailers find it harder to get away with the more obvious ploys.",
    },
    {
      title: "Accordion title number three",
      body: "With consumer awareness articles and documentaries frequently picking up on this topic, it's likely the case that retailers find it harder to get away with the more obvious ploys. We are becoming ever more savvy consumers and there's probably not a great deal that gets past us. But here's a few retail tricks to keep in mind when you are rushing around the weekly supermarket stock-up.",
    },
  ];

  return (
    <Layout menus={mainMenu.items}>
      <Head>
        <title>Components</title>
        <meta name="description" content="A Next.js site powered by Drupal." />
      </Head>

      <ContentSection>
        <Heading level="h2" size="large">
          Accordion
        </Heading>
        {accordionItems.map((item, index) => (
          <Accordion key={index} title={item.title} body={item.body} />
        ))}
      </ContentSection>

      <ContentSection>
        <Heading level="h2" size="large">
          Button
        </Heading>
        <ButtonContainer>
          <Button type="primary">Primary</Button>
          <Button type="secondary">Secondary button</Button>
          <Button type="outlined">Outlined</Button>
          <Button type="disabled">Disabled</Button>
        </ButtonContainer>
      </ContentSection>

      <ContentSection>
        <Heading level="h2" size="large">
          Button as a link
        </Heading>
        <ButtonContainer>
          <Button url="#" type="primary">
            Primary
          </Button>
          <Button url="#" type="secondary">
            Longname for testing secondary button
          </Button>
          <Button url="#" type="outlined">
            Outlined
          </Button>
          <Button url="#" type="disabled">
            Disabled
          </Button>
        </ButtonContainer>
      </ContentSection>

      <ContentSection>
        <Heading level="h2" size="large">
          Button with click event
        </Heading>
        <Button
          type="primary"
          onClick={() => {
            console.log("click");
          }}
        >
          Click
        </Button>
      </ContentSection>

      <ContentSection>
        <Heading level="h2" size="large">
          Dropdown menu
        </Heading>
        <Dropdown
          label="Language"
          items={[
            { title: "Finnish", url: "#" },
            { title: "English", url: "#" },
            { title: "Swedish", url: "#" },
          ]}
        />
      </ContentSection>

      <ContentSection>
        <Heading level="h2" size="large">
          Heading
        </Heading>
        <Heading level="h1" size="xl">
          Heading XL
        </Heading>
        <Heading level="h2" size="large">
          Heading Large
        </Heading>
        <Heading level="h3" size="medium">
          Heading Medium
        </Heading>
        <Heading level="h4" size="small" uppercase>
          Heading Small uppercase
        </Heading>
      </ContentSection>

      <ContentSection>
        <Heading level="h2" size="large">
          Mobile menu
        </Heading>
        <MobileMenu
          items={[
            { title: "Finnish", url: "#" },
            {
              title:
                "English English English English English English English English",
              url: "#",
            },
            { title: "Swedish", url: "#" },
            { title: "Finnish", url: "#" },
            { title: "English", url: "#" },
            {
              title:
                "SwedishSwedishSwedishSwedishSwedishSwedishSwedish Swedish Swedish",
              url: "#",
            },
            { title: "Finnish", url: "#" },
            { title: "English", url: "#" },
            {
              title: "Swedish",
              url: "#",
              sublinks: [
                { title: "Sublink numero yks", url: "#" },
                { title: "Sublink numero kaks", url: "#" },
                { title: "Sublink numero kol", url: "#" },
                { title: "Sublink numero nel", url: "#" },
              ],
            },
            { title: "Finnish", url: "#" },
            { title: "English", url: "#" },
          ]}
        />
      </ContentSection>

      <ContentSection>
        <Heading level="h2" size="large">
          Modal
        </Heading>
        <Modal title="Title" buttonText="Close">
          Your payment has been successfully submitted. We’ve sent you an email
          with all of the details of your order.
        </Modal>
      </ContentSection>

      <ContentSection>
        <Heading level="h2" size="large">
          Notification
        </Heading>
        <Notification message="Change a few things up and try submitting again." />
        <Notification
          type="success"
          message="Success: Change a few things up and try submitting again."
        />
        <Notification
          type="error"
          message="Error: Change a few things up and try submitting again."
        />
        <Notification
          type="warning"
          message="Warning: Change a few things up and try submitting again."
        />
      </ContentSection>

      <ContentSection>
        <Heading level="h2" size="large">
          Tabs
        </Heading>
        <Tabs
          items={[
            {
              title: "Accordion title number one",
              body: "With consumer awareness articles and documentaries frequently picking up on this topic, it's likely the case that retailers find it harder to get away with the more obvious ploys. We are becoming ever more savvy consumers and there's probably not a great deal that gets past us. But here's a few retail tricks to keep in mind when you are rushing around the weekly supermarket stock-up.",
            },
            {
              title: "Accordion title number two",
              body: "2 With consumer awareness articles and documentaries frequently picking up on this topic, it's likely the case that retailers find it harder to get away with the more obvious ploys. We are becoming ever more savvy consumers and there's probably not a great deal that gets past us. But here's a few retail tricks to keep in mind when you are rushing around the weekly supermarket stock-up.",
            },
            {
              title: "Accordion title number three longer title testing",
              body: "3 With consumer awareness articles and documentaries frequently picking up on this topic, it's likely the case that retailers find it harder to get away with the more obvious ploys. We are becoming ever more savvy consumers and there's probably not a great deal that gets past us. But here's a few retail tricks to keep in mind when you are rushing around the weekly supermarket stock-up.",
            },
          ]}
        />
      </ContentSection>

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
      </ContentSection>

      <ContentSection>
        <Heading level="h2" size="large">
          Radio
        </Heading>

        <Fieldset legend="Choose one" screenReadersOnly={true}>
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
      </ContentSection>
    </Layout>
  );
}

export async function getStaticProps(
  context
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
