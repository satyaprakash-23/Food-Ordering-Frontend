import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuList from "./MenuList";
const RestaurantMenu = () => {
  const { resid } = useParams();
  // console.log(resid);

  const id = String(resid).replace(":", "");
  const menu = useRestaurantMenu(id);
  console.log(menu?.data?.cards);
  const foodCards = menu?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  console.log(foodCards);
  if (!foodCards) {
    return;
  }
  return (
    <div className="w-12/12 flex flex-col justify-center items-center mt-4">
      <div>
        <h1 className="font-bold text-lg">
          {menu?.data?.cards[2]?.card?.card?.info?.name}
        </h1>
      </div>
      <div className="mt-6 w-6/12 flex flex-col  items-center">
        {foodCards.map((e) => {
          console.log(e);

          if (
            e?.card?.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          ) {
            return <MenuList props={e} />;
          }

          if (
            e?.card?.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
          ) {
            return <MenuList props={e} />;
          }

          // Return null if no condition matches to avoid rendering anything
          return null;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
