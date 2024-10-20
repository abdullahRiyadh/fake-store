import React, { useContext } from "react";

// import useParams
import { useParams } from "react-router-dom";
// import cart context
import { CartContext } from "../contexts/CartContext";
// import product context
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  // console.log(products);
  const { addToCart } = useContext(CartContext);
  //  get the single product based on the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  // console.log(product);

  // if product isnot found
  if (!product) {
    return (
      <section
        className="h-screen flex justify-center
    items-center"
      >
        Loading....
      </section>
    );
  }
  // destructure product
  const { title, price, description, image } = product;

  return (
    <section className="pt-32 pb-12  md:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center ">
          {/* image and text wrapper */}
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 ">
            <img className="max-w-[200px]" src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-xl font-medium mb-2 max-w-[450px] mx-auto">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-3">
              $ {price}
            </div>
            <p className="mb-4 text-xs">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-primary py-2 px-4 text-white rounded-xl"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
