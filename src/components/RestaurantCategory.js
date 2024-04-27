import { useState } from "react";
import ItemList from "./ItemList";
import { IoIosArrowDown } from "react-icons/io";

const RestaurantCategory = ({ data, index, showIndexes, setShowIndexes }) => {
  const handleClick = () => {
    const temp = showIndexes.map((item, i) => {
      if (i === index) {
        return !item;
      } else {
        return false;
      }
    });
    setShowIndexes(temp);
  };
  return (
    <>
      {/* Accordion Header */}
      <div
        className="flex justify-between py-3 cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-semibold text-l">
          {data.title} ({data.itemCards.length})
        </span>
        <span>
          <IoIosArrowDown />
        </span>
      </div>
      <div>{showIndexes[index] && <ItemList items={data.itemCards} />}</div>
    </>
  );
};

export default RestaurantCategory;
