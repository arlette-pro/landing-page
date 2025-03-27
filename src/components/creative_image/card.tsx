"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const Card = ({ title, subtitle, description, image }: CardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleShowPreview = () => {
    setIsVisible(true);
  };

  const handleExit = (e: any) => {
    if (e.target === e.currentTarget) setIsVisible(false);
  };

  return (
    <>
      {isVisible ? (
        <div
          className="absolute z-50 top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center"
          onClick={handleExit}
        >
          <div className="w-[800px] h-[500px] bg-white rounded-2xl overflow-hidden">
            <img src={image} alt="image" className={`w-full object-cover`} />
          </div>
        </div>
      ) : null}
      <div className="flex items-center justify-center flex-col">
        <div className="w-[400px] h-[200px] overflow-hidden rounded-2xl relative">
          <div
            onClick={handleShowPreview}
            className="absolute top-0 left-0 bg-black/35 cursor-pointer w-full h-full flex items-center justify-center opacity-0 transition-all hover:opacity-100"
          >
            <div>
              <FaEye size={55} color="white" />
            </div>
          </div>
          <img src={image} alt="image" className={`w-full object-cover`} />
        </div>

        <div className="w-[350px] border p-2 relative -top-12 bg-white ">
          <h2 className="text-lg font-bold">{title}</h2>
          <h3 className="text-sm text-gray-500">{subtitle}</h3>
          <p className="text-sm">{description}</p>
          <div className="flex justify-end">
            <Link href="/see more" className="font-bold hover:underline">
              {" "}
              see more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
