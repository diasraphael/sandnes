import React from 'react';
import AccordionContent from './AccordionContent';
import AccordionHeader from './AccordionHeader';
import { useAccordionContext } from './use-accordion';

interface AccordionProps {
  index: number;
  onClick: () => void;
  header: () => JSX.Element;
  children: React.ReactNode;
  disabled?: boolean;
  classNames?: string;
}

const Accordion = (props: AccordionProps) => {
  const {
    index,
    onClick,
    header,
    children,
    disabled = false,
    classNames,
  } = props;
  const { open, toggle } = useAccordionContext();
  const handleClick = (selected: number) => {
    console.log(index);
    if (!disabled) {
      toggle(selected);
    }
    onClick();
  };
  return (
    <div className="shadow mb-4 rounded-md">
      <AccordionHeader
        open={open === index}
        onClick={() => handleClick}
        header={header}
        disabled={disabled}
        classNames={classNames}
      ></AccordionHeader>
      <AccordionContent open={open === index}>{children}</AccordionContent>
    </div>
  );
};

export default Accordion;
