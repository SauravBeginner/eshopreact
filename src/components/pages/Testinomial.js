import React, { useState } from "react";
import { Link } from "react-router-dom";
import testinomialApi from "./testinomialApi";
const Testinomial = () => {
  let [teston, setTeston] = useState(testinomialApi);
  return (
    <>
      <div className="testonomial">
        <div className="small-container">
          <div className="row">
            {testinomialApi.map((currentElement) => {
              return (
                <>
                  <div className="col-3" key={currentElement.id}>
                    <i className="fa fa-quote-left"></i>
                    <p>{currentElement.desc}</p>
                    <i className="fa fa-quote-right"></i>
                    <div className="rating">
                      {currentElement.reviews.map((r, index) => (
                        <i className="fa fa-star" key={index}></i>
                      ))}
                    </div>
                    <img src={`${currentElement.img}`} />
                    <h3> {currentElement.name}</h3>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testinomial;
