import React from "react";

const Featured_Section = () => {
  return (
    <>
      <div className="catagories">
        <h2 className="title">Featured Section</h2>
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img src="images/category-1.jpg" />
            </div>
            <div className="col-3">
              <img src="images/category-2.jpg" />
            </div>
            <div className="col-3">
              <img src="images/category-3.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured_Section;
