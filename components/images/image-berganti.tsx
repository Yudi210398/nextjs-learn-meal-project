"use client";

import { useEffect, useState } from "react";
import classes from "./image.module.css";

import burger from "@/assets/burger.jpg";
import curry from "@/assets/curry.jpg";
import pizza from "@/assets/pizza.jpg";
import Image from "next/image";

const images = [
  { image: burger, alt: "enak" },
  { image: pizza, alt: "pizza enak" },
  { image: curry, alt: "curry enak" },
];

export default function ImageBerganti() {
  const [currentindex, setcurruntIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setcurruntIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => {
        console.log(index, currentindex);
        return (
          <Image
            key={index}
            src={image.image}
            className={index === currentindex ? classes.active : ""}
            alt={image.alt}
          />
        );
      })}
    </div>
  );
}
