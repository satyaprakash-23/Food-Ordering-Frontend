import { useEffect, useState } from "react";
const useRestaurantMenu = (resid) =>{
    const [menu, setmenu] = useState(null);
    async function getMenu() {
      
        const respone = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7254956&lng=77.0890028&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`)
        const json = await respone.json();
        setmenu(json);
       
        
    }
    useEffect(()=>{
        getMenu();
    },[])
  
    return menu;
}

export default useRestaurantMenu;