import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../../img/NotFound.svg";
import { useStateValue } from "../../context/stateProvider";
import { actionType } from "../../context/reducer";

function RowContainer({ flag, data, scrollValue }) {
  const rowContainer = useRef();

  const [items, setItems] = useState([]);

  const [{ cartItems }, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addToCart();
  }, [items]);

  return (
    <div
      ref={rowContainer}
      className={`w-full my-12 flex items-center gap-3 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data?.length > 0 ? (
        data.map((item) => {
          return (
            <div
              key={item?.id}
              className="w-300 min-w-[300px] md:w-340 md:min-w-[340px] my-12 bg-cardOverlay rounded-lg p-2 h-auto backdrop-blur-lg hover:drop-shadow-lg "
            >
              <div className="w-full flex items-center justify-between">
                <motion.div
                  className="w-40 h-40 -mt-8 drop-shadow-2xl"
                  whileHover={{ scale: 1.2 }}
                >
                  <img
                    src={item?.imageUrl}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                  onClick={() => setItems([...cartItems, item])}
                >
                  <MdShoppingBasket className="text-white" />
                </motion.div>
              </div>

              <div className="w-full flex flex-col items-end justify-end">
                <p className="text-textColor font-semibold text-base md:text-lg">
                  {item?.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {item?.colories} Calories
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor font-medium">
                    <span className="text-sm text-red-500 font-bold">$</span>
                    {item?.price}
                  </p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} alt="not-found" className="h-340" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items not availabe
          </p>
        </div>
      )}
    </div>
  );
}

export default RowContainer;
