"use client";

import { useRef, useState } from "react";
import classes from "./imagePicker.module.css";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface DataImagePicker {
  name?: string;
  label?: string;
}

export default function ImagePicker({ label, name }: DataImagePicker) {
  const [picked, setPicked] = useState<any>(null);
  const imageinput = useRef<HTMLInputElement>(null);

  function handleImage() {
    imageinput?.current?.click();
  }

  function handlePickImage(e: any) {
    const file = e.target.files[0];

    if (!file) {
      setPicked(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (typeof fileReader.result === "string")
        setPicked(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!picked && <p>gk ada gambar</p>}
          {picked && <Image src={picked} alt="udah di pick" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageinput}
          onChange={handlePickImage}
          required
        />
        <button className={classes.button} type="button" onClick={handleImage}>
          Gambar
        </button>
      </div>
    </div>
  );
}
