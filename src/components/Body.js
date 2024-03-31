import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/resList";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.8095991&lng=93.9197011&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter-res">
        <button
          className="filter-res-btn"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRes(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurants) => (
          <RestaurantCard key={restaurants.info.id} resInfo={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
