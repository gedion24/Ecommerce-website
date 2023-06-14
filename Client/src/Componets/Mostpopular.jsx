import React from "react";
import mouse from "../assets/mouse.png";

const cards = [
  {
    image: mouse,
    name: "PS5 controller",
    price: "$200",
    dicuont: "400",
  },
  {
    image: mouse,
    name: "mouse",
    price: "$200",
    dicuont: "$400",
    promo: "sale",
  },
  {
    image: mouse,
    name: "keyboard",
    price: "$200",
    dicuont: "$400",
    promo: "hot",
  },
  {
    image: mouse,
    name: "headset",
    price: "$200",
    dicuont: "$400",
  },
];

function Mostpopular() {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-full h-auto xl:px-32 lg:px-20 md:px-7 sm:px-4 px-3 mt-7 space-y-20 ">
          <div className="w-full h-auto flex flex-col space-y-5">
            <h1 className="font-bold text-4xl">Most Popular</h1>
            <div className="flex space-x-20">
              <h1>all</h1>
              <h1>all</h1>
              <h1>all</h1>
              <h1>all</h1>
              <h1>all</h1>
            </div>
          </div>
        </div>
        <div className="w-full h-auto justify-center xl:px-32 lg:px-20 md:px-7 sm:px-4  ">
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4   ">
            {cards.map((cards) => (
              <div
                key={cards}
                className="w-80    h-auto bg-slate-00 flex flex-col space-y-2 mx-auto px-4  "
              >
                <div className="w-auto h-auto relative">
                  <img src={cards.image} className="w-full" alt="" />
                  <div className="absolute top-5 right-5 p-1  w-16  justify-center items-center flex bg-tertiary text-white font-bold ">
                    {}nnn
                  </div>
                </div>
                <p className="font-bold text-lg ">{cards.name}</p>
                <div className="flex gap-x-4">
                  <p className=" font-semibold line-through text-base">
                    {cards.price}
                  </p>
                  <p className="font-bold text-lg"> {cards.dicuont}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Mostpopular;
