import Shimmer from "./Shimmer";
import useMenuInfo from "../utils/useMenuInfo";
import { CDN_URL } from "../utils/constants";
import { FcRating } from "react-icons/fc";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menuInfo = useMenuInfo(resId);

  if (menuInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRatingString } =
    menuInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

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
        <div className="p-3">Available Items</div>
        <div className="">
          <ul>
            {itemCards.map((item) => (
              <li
                className="flex flex-col p-2 border-b-2"
                key={item.card.info.id}
              >
                <div className="flex justify-between">
                  <div className="w-72">
                    <div className="font-semibold text-sm text-gray-500">
                      {item.card.info.name}
                    </div>
                    <div className="font-thin text-xs">
                      {"Rs."}
                      {item.card.info.price / 100 ||
                        item.card.info.defaultPrice / 100}
                    </div>
                    <div className="truncate font-thin text-xs">
                      <p>{item.card.info.description}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 relative w-24 h-24 p-0.5">
                    <img
                      className="object-cover w-full h-full rounded-md"
                      src={CDN_URL + item.card.info.imageId}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
