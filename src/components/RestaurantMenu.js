import Shimmer from "./Shimmer";
import useMenuInfo from "../utils/useMenuInfo";
import { FcRating } from "react-icons/fc";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndexes, setShowIndexes] = useState([]);

  const { menuInfo, noOfCategories } = useMenuInfo(resId);

  useEffect(() => {
    if (noOfCategories) {
      setShowIndexes(
        Array.from({ length: noOfCategories }, (x, i) => {
          if (i === 0) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [noOfCategories]);

  if (menuInfo === null) return <Shimmer />;

  const categories =
    menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const { name, cuisines, costForTwoMessage, avgRatingString } =
    menuInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card;

  // const categories =
  //   menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //     (c) =>
  //       c.card?.card?.["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   );

  console.log("showIndexes", showIndexes);
  console.log("noOfCategories", noOfCategories);

  return (
    <div className="flex flex-col mx-auto my-0 max-w-[600px] px-4 ">
      <div className="text-lg font-semibold py-2">{name}</div>
      <div className="flex flex-col border border-solid rounded-lg p-3">
        <p className="font-semibold flex items-center space-x-1">
          <FcRating />
          <span>
            {avgRatingString} - {costForTwoMessage}
          </span>
        </p>

        <div className="text-green-600">{cuisines.join(", ")}</div>
      </div>
      <div>
        <div className="">
          {categories.map((category, index) => (
            <RestaurantCategory
              key={index}
              index={index}
              data={category?.card?.card}
              showIndexes={showIndexes}
              setShowIndexes={setShowIndexes}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
