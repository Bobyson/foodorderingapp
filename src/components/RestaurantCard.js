import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resInfo } = props;

  const { cloudinaryImageId, name, cuisines, sla, avgRating } = resInfo?.info;
  return (
    <div>
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="res-details">
          <h5>{name}</h5>
          <h6>{cuisines.join(", ")}</h6>
          <h6>{sla.deliveryTime} MINS</h6>
          <h6>{avgRating}</h6>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
