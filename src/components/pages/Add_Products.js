import React, { useState } from "react";

const Add_Products = () => {
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [rating, setRating] = useState("");
  let [type, setType] = useState("");
  let [pimg, setPimg] = useState(null);
  let [added, isAdded] = useState(false);

  return (
    <>
      {added ? (
        <div class="alert alert-success">
          <strong>Successfully!</strong> Added!
        </div>
      ) : (
        ""
      )}
      <div className="container">
        <div className="form-group">
          <label for="exampleInputName">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            placeholder="Enter Product Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPrice">Product Price</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPrice"
            placeholder="Enter Product Price"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <p>
            <label for="exampleInputRating">Product Rating</label>
          </p>
          <span className="ml-2">
            <input
              type="radio"
              id="exampleInputRating"
              name="rating"
              value="5"
              onChange={(event) => {
                setRating(event.target.value);
              }}
            />
            5 Star
          </span>
          <span className="ml-2">
            <input
              type="radio"
              id="exampleInputRating"
              name="rating"
              value="4"
              onChange={(event) => {
                setRating(event.target.value);
              }}
            />
            4 Star
          </span>
          <span className="ml-2">
            <input
              type="radio"
              id="exampleInputRating"
              name="rating"
              value="3"
              onChange={(event) => {
                setRating(event.target.value);
              }}
            />
            3 Star
          </span>
          <span className="ml-2">
            <input
              type="radio"
              id="exampleInputRating"
              name="rating"
              value="2"
              onChange={(event) => {
                setRating(event.target.value);
              }}
            />
            2 Star
          </span>
          <span className="ml-2">
            <input
              type="radio"
              id="exampleInputRating"
              name="rating"
              value="1"
              onChange={(event) => {
                setRating(event.target.value);
              }}
            />
            1 Star
          </span>
        </div>
        <div className="form-group">
          <label for="exampleInputType">Product Type</label>
          <select
            className="form-control"
            id="exampleInputType"
            onChange={(event) => {
              setType(event.target.value);
            }}
          >
            <option value="">-Select-</option>
            <option value="latest">Latest Products</option>
            <option value="featured">Featured Products</option>
          </select>
        </div>
        {
          <div className="form-group">
            <label for="exampleInputImage">Product Image</label>
            <input
              type="file"
              className="form-control"
              id="exampleInputImage"
              onChange={(event) => {
                setPimg(event.target.files[0]);
              }}
            />
          </div>
        }
        <button
          type="submit"
          className="btn btn-primary"
          onClick={async () => {
            var fd = new FormData();
            fd.append("name", name);
            fd.append("price", price);
            fd.append("rating", rating);
            fd.append("type", type);
            fd.append("pimg", pimg);

            var resp = await fetch(
              "https://eshopbacnkend.herokuapp.com/product/add",
              {
                method: "POST",
                body: fd,
              }
            );

            var data = await resp.json();
            isAdded(true);
            console.log(data);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Add_Products;
