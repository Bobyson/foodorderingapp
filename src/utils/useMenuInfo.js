import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useMenuInfo = (resId) => {
  const [menuInfo, setMenuInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    setMenuInfo(json.data);
  };

  return {
    menuInfo: menuInfo,
    noOfCategories:
      menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ).length,
  };
};

export default useMenuInfo;
