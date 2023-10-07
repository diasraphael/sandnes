import React from 'react';
import FullWidthTabs from '../material/tabs/Tabs';

const Events = () => {
  return (
    <div className="w-full bg-white">
      <div className="p-16 max-w-7xl mx-auto">
        <div>Calendar</div>
        <div>Our Events</div>
        <FullWidthTabs></FullWidthTabs>
      </div>
    </div>
  );
};

export default Events;
