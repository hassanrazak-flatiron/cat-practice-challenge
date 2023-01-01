import React from "react";

export default function CatCard({cat,removeCat}) {

  const{name,breed,image,score,id} = cat


  return (
    <div>
      {" "}
      <div className="card">
        <h2>{name}</h2>
        <img src={image} />
        <p>
          Score: <strong>{score}</strong>
        </p>
        <button onClick = {() => removeCat(id)}className="delete">😾</button>
      </div>
    </div>
  );
}
