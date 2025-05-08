export const filterData = (searchText, restroData)=> {
    const filterData = restroData.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  }