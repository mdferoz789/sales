import React from "react";
import { ProductItem } from "./ProductItem";
import { Link } from "react-router-dom";


export const Home = () => {
  return (
    <div>
      <h1>Home page will back soon</h1> <p>we apologize for your inconvinience</p>
      <h3>Kindly go through the other paths like <Link to="/product">Product</Link> </h3>
      Thank you
    </div>
  );
};
