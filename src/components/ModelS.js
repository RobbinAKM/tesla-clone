import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "images/audio.jpg" },
  { url: "images/connected.jpg" },
  { url: "images/game.jpg" },
  { url: "images/new-interior.jpg" },
];

const ModelS = () => {
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default ModelS;
