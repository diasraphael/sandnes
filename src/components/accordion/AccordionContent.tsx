import React, { useRef } from 'react';
interface AccordionContentProps {
  children: React.ReactNode;
  open: boolean;
}

const AccordionContent = ({ children, open }: AccordionContentProps) => {
  const accordionElement = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={accordionElement}
      className="overflow-hidden bg-day-light-5 transition-max-h duration-300 ease-out px-2"
      style={
        open
          ? { height: accordionElement?.current?.scrollHeight }
          : { height: '0px' }
      }
    >
      <div className="px-4 py-2">{children}</div>
    </div>
  );
};

export default AccordionContent;
