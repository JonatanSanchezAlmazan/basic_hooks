import { useState } from "react";

import "./Card.css";

const Card = ({ url, name }) => {
  const [isRotate, setIsRotate] = useState(false);

  const handleClick = () => {
    setIsRotate(!isRotate);
  };
  return (
    <div className="card" onClick={handleClick}>
      <img className={isRotate ? "rotate" : ""} src={url} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
