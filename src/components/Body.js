import { restroData } from "./Constants.js";
import Cards,{WithLabeledCards} from "./Cards.js";
import React, { useEffect, useState } from "react";
import BlankBox from "./shimmer.js";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";
import useRestaurantData from "../utils/useRestaurantData.js";


// import { satya } from "./Constants.js";

const Body = () => {
  const [restaurants, fetchedFilteredData] = useRestaurantData();

  const [filteredData, setfilteredData] = useState(null);

  const EnhancedComponents = WithLabeledCards(Cards);
 
  

  useEffect(() => {
    if (fetchedFilteredData) {

      setfilteredData(fetchedFilteredData);
    }
  }, [fetchedFilteredData]);


  const [searchText, setSearchText] = useState("");

  if (!filteredData) {
    return <BlankBox />;
  }

  return (
    <>
      <div className="search">
        <input
          type="text"
          className="h-8 border rounded-md focus:bg-gray-200 ml-2 mt-2 mr-2"
          placeholder="search"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />

        <button
          className="border border-black w-12 rounded-md h-7 bg-gray-500 hover:bg-gray-900 text-white"
          onClick={() => {
            const data = filterData(searchText, restroData);
            // update the state - restaurants
            setfilteredData(data);
          }}
        >
          search
        </button>
      </div>

      <div className="flex flex-wrap gap-4 m-5">
        {filteredData.length === 0 ? (
          <h1>No Restaurants Found !!</h1>
        ) : (
          filteredData.map(function (restro) {
            const id = restro.info.id;
            return (
             
              <Link to={"/restaurant/" + id} key={id}>
                
                 <EnhancedComponents {...restro.info}/>
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
