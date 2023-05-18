import React from "react";
import Delivery from "../../img/delivery.png";
import HeroBg from "../../img/heroBg.png";

function HomeContainer() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-6 h-6 rounded-full overflow-hidden bg-white drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] font-bold letter tracking-wide text-headingColor md:text-[4.5rem]">
          The Fastest Delivery in{" "}
          <span className="text-orange-600  text-[3rem] md:text-[5rem]">
            Your City
          </span>{" "}
        </p>
        <p className="text-base text-textColor text-justify md:text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laboriosam
          autem aut laborum quisquam placeat sed dolor dolorem libero magnam id,
          ipsum, veniam voluptas voluptatem. Quos suscipit iusto debitis culpa?
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <div className="w-full flex items-center justify-center relative">
          <img
            src={HeroBg}
            className="ml-auto h-420 w-full lg:w-auto lg:h-650"
            alt="hero-background-img"
          />
          <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center px-32 py-4">

          <div className="w-190 p-2 bg-cardOverlay backdrop-blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeContainer;
