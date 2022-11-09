import React from "react";
import "./Sell.css";

const Sell = () => {
  return (
    <div className="submit-container container">
      <div className="submit-card-bg">
        <h4>Basic Information </h4>
        <div className="submit-small">
          <div className="small-one">
            <label htmlFor="Title">Title</label>
            <input
              className="input-sup"
              type="text"
              placeholder="Enter House Title/Name"
            />
          </div>
          <div className="small-one">
            <label htmlFor="Title">Price</label>
            <input
              className="input-sub"
              type="text"
              placeholder="Enter Price"
            />
          </div>
        </div>
        <div className="text-area">
          <label htmlFor="Title">Description</label>
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="5"
            placeholder="House Description"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Sell;
