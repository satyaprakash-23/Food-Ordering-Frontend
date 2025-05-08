import { useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import CartPage from "./CartPage";

const CheckOut = () => {
  const orders = useSelector((state) => state.cart.items);
  console.log(orders);

  return (
    // orders.map((order)=>{
    //     return (
    //         <Cart cartItems={order}/>
    //     )
    // })
    // <Cart cartItems={orders} />
    <CartPage e={orders}/>
  );
};

export default CheckOut;
