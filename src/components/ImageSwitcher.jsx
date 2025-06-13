import React, { useState, useEffect } from "react";

import cottonTail from "../assets/cotton_tail.jpg";
import africanGrey from "../assets/african_grey.jpg";
import donkey from "../assets/donkey.jpg";
import cat from "../assets/cat.jpg";

const images = [cottonTail, africanGrey, donkey, cat];

const ImageSwitcher = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalTime, setIntervalTime] = useState(
    Math.floor(Math.random() * (30000 - 15000 + 1)) + 15000
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(() => Math.floor(Math.random() * images.length));
      setIntervalTime(Math.floor(Math.random() * (30000 - 15000 + 1)) + 15000);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime]);

  return (
    <div>
      <img
        src={images[currentIndex]}
        alt="Random Image"
        style={{ maxWidth: "100%", height: "auto", opacity: 0.5 }}
      />
    </div>
  );
};

export default ImageSwitcher;
