import React from 'react';
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

export type AccordionContext = {
  open: null | number;
  toggle: (index: null | number) => void;
};

export const AccordionContext = createContext<AccordionContext | null>(null);
/* eslint-disable react-refresh/only-export-components */
export const useAccordionContext = () => {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error('Missing Accordion provider in tree');
  }
  return ctx;
};

export const AccordionProvider: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (index: number | null) => {
    setOpen((prevIndex) => (prevIndex === index ? null : index));
  };
  const value = {
    open,
    toggle,
  };
  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
};
