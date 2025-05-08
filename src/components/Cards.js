import { cloudinarySrc } from "./Constants.js";

// console.log(cloudinarySrc);

const Cards = ({ name, cloudinaryImageId, avgRating, locality, sla }) => {
  // console.log(name);
  return (
    <>
      <div className="">
        <img
          className="w-60 h-40 m-2 rounded-lg"
          src={cloudinarySrc + cloudinaryImageId}
          alt="food-pic"
        ></img>
      </div>
      <div className="ml-4 text-md ">
        <h4 className="font-bold text-md">{name}</h4>
        <ul className="text-gray-500">
          <li>⭐{avgRating}</li>
          <li>{sla?.deliveryTime} min</li>
          <li>{locality}</li>
        </ul>
      </div>
    </>
  );
};

export const WithLabeledCards = (Cards) => {
  return (props) => {
    const { aggregatedDiscountInfoV3, ...rest } = props;

    return (
      <div className="w-60 ">
        <label className="font-bold text-lg absolute text-white bg-black">
          {aggregatedDiscountInfoV3?.header +
            " " +
            (aggregatedDiscountInfoV3?.subHeader === undefined
              ? ""
              : aggregatedDiscountInfoV3?.subHeader)}
        </label>
        <Cards {...rest} />
      </div>
    );
  };
};

export default Cards;
