import Heading from "components/heading/heading";
import PlusMinusIcon from "components/icons/plus-minus-icon";
import { useId, useState } from "react";
import AnimateHeight from "react-animate-height";

interface AccordionProps {
  title: string;
  body: any;
}

export default function Accordion({ title, body }: AccordionProps) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div>
      <button
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(open ? false : true)}
        className="flex items-center justify-between w-full p-5 mb-3 font-medium text-left border-2 hover:bg-stone-200"
      >
        <Heading level="h3" size="small">
          {title}
        </Heading>
        <div className="w-6 h-6">
          <PlusMinusIcon
            verticalClassName={open && "rotate-90"}
            horizontalClassName={open && "rotate-180"}
          />
        </div>
      </button>

      <AnimateHeight id={id} duration={150} height={open ? "auto" : 0}>
        <div className="px-5 pt-3 pb-8">{body}</div>
      </AnimateHeight>
    </div>
  );
}
