import { useState } from "react";
import ItemList from "./ItemList";
import { IoIosArrowDown } from "react-icons/io";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
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
      <div>{showItems && <ItemList items={data.itemCards} />}</div>
    </>
  );
};

export default RestaurantCategory;
