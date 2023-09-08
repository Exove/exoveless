import { Tab } from "@headlessui/react";

interface TabsProps {
  items: any;
}

export default function Tabs({ items }: TabsProps) {
  return (
    <Tab.Group>
      <Tab.List className="flex">
        {items.map((item, index) => (
          <Tab
            key={index}
            className="w-full p-2 font-medium ui-selected:bg-white"
          >
            {item.title}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {items.map((item, index) => (
          <Tab.Panel key={index} className="p-5 bg-white">
            <ul>{item.body}</ul>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
