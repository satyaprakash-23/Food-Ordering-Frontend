import { useEffect, useState } from "react";

const useRestaurantData = () => {
  const [allRestaurantData, setallRestaurantData] = useState(null);
  const [filteredData, setfilteredData] = useState(null);

  async function getRestaurantData() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7254956&lng=77.0890028&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      const restaurantData =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setallRestaurantData(restaurantData);
      setfilteredData(restaurantData);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }

  useEffect(() => {
    getRestaurantData();
  }, []);

  return [allRestaurantData, filteredData];
};

export default useRestaurantData;
