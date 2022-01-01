import React from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    <div class="card text-center shadow-2xl">
      <figure class="px-10 pt-10">
        <img src={props.img} alt="utility here" class="rounded-xl" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{props.heading}</h2>
        <p className="text-white">{props.para}</p>
        <div class="justify-center card-actions">
          <Link to={`${props.url}`}>
            <button class="btn btn-outline btn-accent">More info</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
