import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resInfo } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    sla,
    avgRating,
    areaName,
    aggregatedDiscountInfoV3,
  } = resInfo?.info;
  return (
    <div className="w-[180px] m-1 rounded-md hover:shadow-lg hover:scale-95 duration-300">
      <div className="flex-shrink-0 relative w-full h-32 ">
        <img
          className="object-cover w-full h-full rounded-md "
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="absolute bottom-0 w-full">
          <p className="px-1 text-white font-bold text-l bg-gradient-to-b from-transparent to-black">
            {aggregatedDiscountInfoV3?.header}{" "}
            {aggregatedDiscountInfoV3?.subHeader}
          </p>
        </div>
      </div>

      <div className="flex flex-col px-2 max-h-24">
        <div className="font-medium text-[12px] truncate">{name}</div>
        <div className="flex font-semibold text-[10px] ">
          <h6 className="text-[10px]">{avgRating}</h6>
          <h6 className="px-1 text-[10px]">{sla.slaString}</h6>
        </div>
        <div className=" truncate text-[10px]">{cuisines.join(", ")}</div>
        <div className="text-[10px]">{areaName}</div>
      </div>
    </div>
  );
};

// Higher Order Component

// export const withPromotedLabel = (RestaurantCard) => {
//   return () => {
//     return (
//       <div>
//         <label>Promoted</label>
//         <RestaurantCard />
//       </div>
//     );
//   };
// };

export default RestaurantCard;
