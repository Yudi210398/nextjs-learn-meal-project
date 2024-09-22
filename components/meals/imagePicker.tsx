"use client";

import { useRef } from "react";
import classes from "./imagePicker.module.css";

interface DataImagePicker {
  name?: string;
  label?: string;
}

export default function ImagePicker({ label, name }: DataImagePicker) {
  const imageinput = useRef<HTMLInputElement>(null);
  function handleImage() {
    imageinput?.current?.click();
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageinput}
        />
        <button className={classes.button} type="button" onClick={handleImage}>
          Gambar
        </button>
      </div>
    </div>
  );
}
