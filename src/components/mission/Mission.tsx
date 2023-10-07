import React from 'react';
import Accordion from '../accordion/Accordion';
import AccordionWrapper from '../accordion/AccordionWrapper';
interface Item {
  id: number;
  name: string;
  content: string;
}
const Mission = () => {
  const items: Item[] = [
    {
      id: 1,
      name: 'Our Mission',
      content:
        'No matter what struggles you’re facing in life, we want you to know you don’t have to walk through them alone.',
    },
    {
      id: 2,
      name: 'Our Vision',
      content:
        'No matter what struggles you’re facing in life, we want you to know you don’t have to walk through them alone.',
    },
    {
      id: 3,
      name: 'Our Goal',
      content:
        'No matter what struggles you’re facing in life, we want you to know you don’t have to walk through them alone.',
    },
  ];
  const handleCategoryClick = (index: number, item: Item) => {
    console.log(index, item);
  };
  return (
    <AccordionWrapper>
      {items.map((item, index) => (
        <Accordion
          key={item.id}
          index={index}
          onClick={() => {
            handleCategoryClick(index, item);
          }}
          header={() => <div>{item.name}</div>}
        >
          <div>{item.content}</div>
        </Accordion>
      ))}
    </AccordionWrapper>
  );
};

export default Mission;
