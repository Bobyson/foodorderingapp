import Shimmer from "./Shimmer";
import useMenuInfo from "../utils/useMenuInfo";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menuInfo = useMenuInfo(resId);

  if (menuInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
