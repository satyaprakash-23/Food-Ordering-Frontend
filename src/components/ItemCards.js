import { cloudinarySrc } from "./Constants";
import { useDispatch } from "react-redux";
import {addItems} from "../redux/slices/cartSlice"
console.log("SATYACLICKED");
const ItemCards = (e) => {
  const dispatch = useDispatch();
  if (Object.keys(e).length === 0) {
    console.log("Props is empty");
  } else {
    console.log("Props is not empty");
  }
  console.log("SATYACLICKED", e);
  // console.log("SATYACLICKED", e.e.name);
  handleAddButton=()=>{
    dispatch(addItems(e))
  }
  // return props.props.map((e) => {
  return (
    <div className="flex w-full min-h-40 border-b-2 ">
      <div key={e.e.id} className="w-8/12 mt-4">
        <div className="font-bold w-9/12">{e?.e?.name}</div>
        {console.log("sunny", e.e.name)}
        <div className="w-9/12">
          {e.e.price ? "₹" + e.e.price / 100 : "₹" + e.e.defaultPrice / 100}
        </div>
        <div className="w-full">{e.e.description}</div>
      </div>
      <div className="relative w-4/12 flex  justify-center">
        <img
          src={cloudinarySrc + e.e.imageId}
          className="w-8/12 h-24 mt-10 "
        ></img>
        <button className="absolute w-16 text-green-700 font-bold bg-white rounded-lg mt-24 border border-green-700" onClick={(e)=>handleAddButton(e)}>
          Add
        </button>
      </div>
    </div>
  );
};

export default ItemCards;
