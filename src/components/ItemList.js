import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex p-2 justify-between border-b-2"
        >
          <div className="flex flex-col w-7/12 py-3 ">
            <span>{item.card.info.name}</span>
            <span className="font-light text-xs">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="font-thin text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-24 flex relative h-24 my-auto">
            <div className="absolute bottom-0">
              <button className="px-3 mx-5 bg-white font-bold text-sm text-green-700 shadow-md rounded-md">
                ADD
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="object-cover w-full h-full rounded-md "
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
