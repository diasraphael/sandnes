import React from 'react';

/* interface EventProps {
  eventImage: string;
} */
//{ eventImage }: EventProps

const Card = () => {
  return (
    <div className="w-1/3 bg-white flex flex-col justify-between p-7">
      <div className="gap-x-5 items-center mb-8 flex">
        <img
          className="w-16 h-16 object-cover rounded-full flex-none"
          src={'../../../assets/church.jpg'}
          alt="events"
        />
        <h4 className="">Morning Prayer Group</h4>
      </div>
      <div>
        Kick off the day with stretching into the glorious beauty of all of
        God's abundance. Stretch flow for all levels, no equipment needed.
      </div>
      <div>
        <div>
          <div>
            <span></span>
            <span>Virtual Event</span>
          </div>
          <div>
            <span></span>
            <span>Virtual Event</span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Card;
