"use client";
import Image from "next/image";
import border from "../../public/border.svg";
import right from "../../public/bg-right.svg";
import left from "../../public/bg-left.svg";
import { useEffect, useState } from "react";
import RandomImage from "@/components/RandomImage";

const images = require.context("../../public/imgs", true);
const imageList = images.keys().map((image) => images(image));
const colorList = [
  "border-pink-300",
  "border-blue-300",
  "border-purple-300",
  "border-yellow-300",
  "border-teal-300",
];
export default function Home() {
  const [currentImages, setImage] = useState([]);
  const showImage = () => {
    const newStyle = {
      right: `${Math.floor(Math.random() * 100)}%`,
      top: `${Math.floor(Math.random() * 80)}%`,
    };
    if (currentImages.length >= 5) {
      setImage([
        ...currentImages.slice(1),
        {
          style: newStyle,
          img: imageList[Math.floor(Math.random() * imageList.length)],
          color: colorList[Math.floor(Math.random() * colorList.length)],
        },
      ]);
    } else {
      setImage([
        ...currentImages,
        {
          style: newStyle,
          img: imageList[Math.floor(Math.random() * imageList.length)],
          color: colorList[Math.floor(Math.random() * colorList.length)],
        },
      ]);
    }
  };
  useEffect(() => {
    const id = setInterval(() => {
      showImage();
    }, 1000);
    return () => {
      clearInterval(id);
    };
  });
  return (
    <main className="relative flex h-screen flex-col items-start justify-between bg-[#D7F3FF]">
      <Image alt="hi" src={right} className="absolute right-0 top-0 w-2/3" />
      <Image alt="hi" src={left} className="absolute left-0 bottom-0 w-1/2" />
      <div className="relative flex h-screen flex-col items-start justify-between w-full">
        <Image alt="hi" src={border} className="w-full" />
        <div className="flex flex-col text-[#826BE4] ml-24">
          <div className="text-9xl">Happy</div>
          <div className="text-[200px] -mt-[100px]">Mother's Day</div>
          <div className="text-6xl -mt-[100px] self-end">
            You are a mom like no other
          </div>
        </div>
        <Image alt="hi" src={border} className="w-full rotate-180" />
      </div>
      {currentImages.map((img, i) => {
        return (
          <RandomImage
            alt="hi"
            src={img.img}
            key={i}
            img_style={img.style}
            color={img.color}
          />
        );
      })}
    </main>
  );
}
