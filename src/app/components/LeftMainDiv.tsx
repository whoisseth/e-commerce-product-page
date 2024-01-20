/** @format */
"use client";

import { useState } from "react";

import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FaAngleLeft } from "react-icons/fa6";

import produtimg1 from "@/assets/images/image-product-1.jpg";
import produtimg2 from "@/assets/images/image-product-2.jpg";
import produtimg3 from "@/assets/images/image-product-3.jpg";
import produtimg4 from "@/assets/images/image-product-4.jpg";
import { cn } from "@/utils/cn";
import { FaAngleRight } from "react-icons/fa";

const images = [produtimg1, produtimg2, produtimg3, produtimg4];

export function LeftMainDiv() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [openModal, setModal] = useState(false);
  const [animationParent] = useAutoAnimate();

  const [mainProductImage, setMainProcutImage] = useState(images[0]);

  // currentImageIndex ==3
  // imges.length ==4

  function nextImage() {
    // if (images.length > 5)
    // 3+1 > 4
    if (currentImageIndex + 1 < images.length) {
      setCurrentImageIndex(currentImageIndex + 1);
      setMainProcutImage(images[currentImageIndex + 1]);
    } else {
      return null;
    }
  }

  function preImage() {
    // if (images.length > 5)
    setCurrentImageIndex(currentImageIndex - 1);
    // 3-1 > 4

    // 0-1  4
    // 3-1 <4 &&  3>0)
    if (currentImageIndex - 1 < images.length && currentImageIndex > 0) {
      setMainProcutImage(images[currentImageIndex - 1]);
    } else {
      return null;
    }
  }

  return (
    <div ref={animationParent} className="w-1/2 flex  gap-4 flex-col">
      <Image
        onClick={() => setModal(true)}
        className="w-[384px] h-[384px] rounded-xl cursor-pointer "
        src={mainProductImage}
        alt="procut-img"
      />
      <div className="flex gap-2  w-[384px] justify-between">
        {images.map((d, i) => (
          <div
            onClick={() => setMainProcutImage(d)}
            key={i}
            className={cn(
              " w-[84px] h-[84px] relative rounded-xl overflow-hidden border-2  border-transparent cursor-pointer  ",
              { "border-orange-400": mainProductImage === d }
            )}
          >
            <Image className="  h-full w-full " src={d} alt="procut-img" />
            {mainProductImage === d && (
              <div className="h-full w-full bg-orange-300/70 absolute top-0 left-0" />
            )}
          </div>
        ))}
      </div>

      {/* modal */}
      {openModal && (
        <div className=" h-screen w-full fixed flex items-center justify-center  flex-col bg-black/80 top-0 left-0  gap-4 ">
          <div className="w-[384px] flex justify-end">
            <MdOutlineClose
              className="text-4xl text-white cursor-pointer"
              onClick={() => setModal(false)}
            />
          </div>
          <div className=" relative">
            {/* pre btn */}
            <button
              disabled={currentImageIndex === 0}
              onClick={preImage}
              className={cn(
                "bg-white h-10 w-10 flex items-center justify-center  rounded-full absolute top-1/2 left-[-25px] ",
                {
                  "bg-slate-400 ": currentImageIndex === 0
                }
              )}
            >
              <FaAngleLeft className="text-2xl  " />
            </button>
            {/* next btn */}
            <button
              disabled={currentImageIndex == images.length - 1}
              onClick={nextImage}
              //   currentImageIndex
              className={cn(
                "bg-white h-10 w-10 flex items-center justify-center  rounded-full absolute top-1/2 right-[-25px] ",
                {
                  "bg-slate-400 ": currentImageIndex == images.length - 1
                }
              )}
            >
              <FaAngleRight className="text-2xl  " />
            </button>

            <Image
              className="w-[384px] h-[384px] rounded-xl "
              src={mainProductImage}
              alt="procut-img"
            />
          </div>
          <div className="flex gap-2  w-[384px] justify-between">
            {images.map((d, i) => (
              <div
                //   setCurrentImageIndex
                onClick={() => {
                  setMainProcutImage(d);
                  setCurrentImageIndex(i);
                }}
                key={i}
                className={cn(
                  " w-[84px] h-[84px] relative rounded-xl overflow-hidden border-2  border-transparent cursor-pointer  ",
                  { "border-orange-400": mainProductImage === d }
                )}
              >
                <Image className="  h-full w-full " src={d} alt="procut-img" />
                {mainProductImage === d && (
                  <div className="h-full w-full bg-orange-300/70 absolute top-0 left-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
