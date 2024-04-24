import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  const [searchText, setSearchText] = useState("");

  // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log(listOfRes);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline. Please check your internet connection</h1>
    );

  if (filteredRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="w-full mx-auto px-4 ">
        {/* Search and filter */}
        <div className="flex items-center justify-start gap-4">
          <div className="px-2  ">
            <input
              type="text"
              className="border border-solid rounded-md px-2"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="border border-solid border-black rounded-md mx-2 px-2"
              onClick={() => {
                const filteredRes = listOfRes.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRes(filteredRes);
              }}
            >
              Search
            </button>
            <button
              className="border border-solid border-black rounded-md px-1"
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
        </div>
        {/* Restaurant cards */}
        <div className="grid gap-1 grid-cols-4 items-center  m-4 ">
          {filteredRes.map((restaurants) => (
            <Link
              key={restaurants.info.id}
              to={"/restaurants/" + restaurants.info.id}
            >
              <RestaurantCard resInfo={restaurants} />
            </Link>
          ))}
        </div>
        {/* Footer */}
        <div>
          <div className="grid grid-cols-3 justify-items-center bg-black text-white">
            <div className="m-6 font-extrabold">FOOTER</div>
            <div className="m-6">
              <h1 className="font-medium">Company</h1>
              <ul>
                <li className="font-extralight">
                  <Link to="/about">About us</Link>
                </li>
                <li className="font-extralight">
                  <Link to="/grocery">Instamart</Link>
                </li>
                <li>xyz</li>
                <li>xyz</li>
                <li>xyz</li>
              </ul>
            </div>
            <div className="m-6">
              <h1 className="font-medium">Contact Us</h1>
              <ul>
                <li className="font-extralight">
                  <Link to="/contact">Help & Support</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
