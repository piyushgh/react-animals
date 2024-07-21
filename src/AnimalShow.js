import "./AnimalShow.css";
import cow from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import bird from "./svg/bird.svg";
import gator from "./svg/gator.svg";
import dog from "./svg/dog.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";
import { useState } from "react";

const svgMap = {
  cow,
  cat,
  bird,
  gator,
  dog,
  horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handliClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div onClick={handliClick} className="animal-show">
      <img className="animal" alt={type} src={svgMap[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + "px", maxWidth: 100 + "px" }}
      />
    </div>
  );
}

export default AnimalShow;
