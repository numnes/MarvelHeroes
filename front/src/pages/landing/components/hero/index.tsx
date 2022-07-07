import SwitchHeart from "components/switchHeart";
import React from "react";

// Styles
import { HeroWrapper } from "./styles";

interface HeroProps {
  id: number;
  name: string;
  image: string;
  favorite: boolean;
}

const Hero: React.FC<HeroProps> = (props: HeroProps) => {
  return (
    <HeroWrapper>
      <div className="hero-image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="hero-inf">
        <div className="hero-name">{props.name}</div>
        <div className="hero-fav">
          <SwitchHeart value={props.favorite} />
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;