import ItemCards from "./ItemCards";
import { useState } from "react";

const MenuList = (props) => {
  console.log(props);

  // State to track the index of the open accordion
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Close if already open
  };

  return (
    <div className="w-full bg-white-400 mt-4 shadow-lg">
      {props?.props?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" && (
        <div className="w-full">
          <div
            className="flex justify-between cursor-pointer border-b-2"
            onClick={() => toggleAccordion(0)} // Using `0` for the main category
          >
            <div className="font-bold text-lg">
              {props?.props?.card?.card.title +
                " (" +
                props?.props?.card?.card.itemCards.length +
                ")"}
            </div>
            <div className="cursor-pointer" onClick={() => toggleAccordion(0)}>
              ⬇️
            </div>
          </div>
          {openIndex === 0 && ( // Only show if openIndex is `0`
            <div>
              {props?.props?.card?.card.itemCards.map((item) => (
                <ItemCards e={item.card.info} key={item.card.info.id} />
              ))}
            </div>
          )}
        </div>
      )}

      {props?.props?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" && (
        <div className="w-full">
          <div className="flex justify-between mb-2">
            <div className="font-bold text-lg">
              {props?.props?.card?.card.title}
            </div>
          </div>
          {props?.props?.card?.card.categories.map((e, index) => {
            const categoryIndex = index + 1; // Assign unique indices for subcategories
            return (
              <div className="shadow-lg" key={e.title}>
                <div className="h-10 flex justify-between">
                  <div
                    className="font-bold text-sm w-full cursor-pointer"
                    onClick={() => toggleAccordion(categoryIndex)}
                  >
                    {e.title + " (" + e.itemCards.length + ")"}
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => toggleAccordion(categoryIndex)}
                  >
                    ⬇️
                  </div>
                </div>
                {openIndex === categoryIndex && ( // Only show if index matches
                  <div className="z-50">
                    {e.itemCards.map((item) => (
                      <ItemCards e={item.card.info} key={item.card.info.id} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MenuList;
