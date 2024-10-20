import React, { useContext } from "react";
// import Link
import { Link } from "react-router-dom";
// import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  // destructuring item
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-x-4 py-1 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[100px] flex items-center gap-x-4 ">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[50px]" src={image} alt={title} />
        </Link>
        <div className="w-full flex flex-col">
          {/* title & remove icon */}
          <div className="flex justify-between mb-2">
            {/* title */}
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/* remove icon */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition"></IoMdClose>
            </div>
          </div>
          <div className="flex gap-x-2 h-[30px] text-sm">
            {/* quantity */}
            <div className="flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium">
              {/* minus icon */}
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 flex justify-center items-center cursor-pointer  h-full"
              >
                <IoMdRemove></IoMdRemove>
              </div>

              {/* amount */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              {/* plus icon */}
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd></IoMdAdd>
              </div>
            </div>
            {/* item price */}
            <div className=" flex-1 flex justify-around items-center">
              <div className="flex items-center justify-center">
                <span>$</span> <span>{price}</span>
              </div>
            </div>
            {/* final price */}
            {/* make the price at 2 decimals */}
            <div className="flex-1 flex justify-end items-center text-primary font-medium">
          
              <div className="flex items-center justify-center">
                <span>$</span>
                <span> {` ${parseFloat(price * amount).toFixed(2)}`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
