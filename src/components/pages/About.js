import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const About = () => {
  const n = useParams();
  useEffect(() => {
    alert("hi");
  });
  return (
    <>
      <h1>About {n.name}</h1>
    </>
  );
};

export default About;
