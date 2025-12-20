import React from "react";
import "../product/productCard.css"

const SimilarProductCard = () => {
  return (
    <div className="">
      <div className="group px-4 relative">
        <div className="card">
          <img
            className="card-media object-top"
            src={"https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg"}
            alt=""
          />
        </div>
        <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
          <div className="name">
            <h1>Niky</h1>
            <p>Blue Shirt</p>
          </div>
          <div className="price flex items-center gap-3">
            <span className="font-sans text-gray-800">$400</span>
            <span className="thin-line-through text-gray-400">$999</span>
            <span className="text-teal-500 font-semibold">60%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductCard;
