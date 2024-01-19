/** @format */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

import logo from "@/assets/images/logo.svg";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import userImg from "@/assets/images/image-avatar.png";
import productImage1 from "@/assets/images/image-product-1.jpg";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useAtom } from "jotai";
import { productAtom } from "../atom";

type Props = {};
const links = [
  {
    href: "#",
    title: "Collections"
  },
  {
    href: "#",
    title: "Men"
  },
  {
    href: "#",
    title: "WoMen"
  },
  {
    href: "#",
    title: "About"
  },
  {
    href: "#",
    title: "Contact"
  }
];

export default function Navbar({}: Props) {
  const [product, setProduct] = useAtom(productAtom);
  const [animationParent] = useAutoAnimate();

  const [isCart, setCart] = useState(false);
  const [isSidebarOpen, setSidebar] = useState(false);

  function toggleCartUi() {
    setCart(!isCart);
  }

  return (
    <div
      ref={animationParent}
      className="border-b flex justify-between items-center h-[80px]"
    >
      {isSidebarOpen && <MobileNavLinks setSidebar={setSidebar} />}

      {/* left */}
      <div className=" flex gap-16 items-center">
        <div className="flex gap-3 items-center">
          <LuMenu
            onClick={() => setSidebar(true)}
            className="text-3xl sm:hidden cursor-pointer min-h-7 min-w-7"
          />
          <Image className="h-5 w-auto" src={logo} alt="logo" />
        </div>
        <div className="  flex gap-5">
          {links.map((d, i) => (
            <Link
              className=" hidden  text-gray-400 te text-sm sm:flex items-center  h-[80px]  border-b-[4px]  border-transparent   hover:border-orange-400  transition-all "
              key={i}
              href={d.href}
            >
              <span>{d.title}</span>
            </Link>
          ))}
        </div>
        {/* logo */}
        {/* links */}
      </div>
      {/* right  */}

      <div className="flex gap-4">
        {/* cart icon */}
        <div className="relative">
          <IoCartOutline
            onClick={toggleCartUi}
            className="text-3xl cursor-pointer"
          />
          {product ? (
            <div className="bg-orange-500 text-white h-5 w-4 text-xs rounded-full flex items-center justify-center absolute top-[-5px] right-0">
              {" "}
              {product?.productCount}{" "}
            </div>
          ) : null}
          {isCart && <CartUi />}
        </div>

        <Image
          className="h-8 w-8  ring-[2px] ring-transparent  cursor-pointer hover:ring-orange-400 rounded-full"
          src={userImg}
          alt="user-img"
        />
        {/* user icon */}
      </div>
    </div>
  );
}

function CartUi() {
  const [product, setProduct] = useAtom(productAtom);

  // product
  return (
    <div className="absolute top-12 right-[-50px] border w-[350px]  max-w-[350px] p-3 rounded-md shadow-md  flex flex-col gap-3  bg-white ">
      {product ? (
        <>
          <p className="text-xl font-bold">Cart</p>

          <div className="w-full bg-gray-300 h-[1px]" />
          <section className="flex justify-between gap-3">
            {/* product image */}
            <Image
              className="h-10 rounded w-auto"
              src={productImage1}
              alt="prodcut-img"
            />
            {/* procut details */}
            <div className=" text-sm">
              <p className="text-gray-400">{product?.procutName}</p>
              <p>
                <span className="text-gray-400">
                  {" "}
                  ${product?.productPrice} x {product?.productCount}{" "}
                </span>{" "}
                <span className="font-bold">
                  {" "}
                  $ {product?.productPrice * product?.productCount}.00
                </span>{" "}
              </p>
            </div>
            {/* delete icon */}
            <button onClick={() => setProduct(null)}>
              <MdDelete className="text-3xl text-gray-400" />
            </button>
          </section>
        </>
      ) : (
        <div className="text-gray-300 text-sm">You cart is empty</div>
      )}

      <button className="w-full bg-orange-400 text-white py-1.5 rounded-md">
        Checkout
      </button>
    </div>
  );
}

// setSidebar
type MobileNavLinks = {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileNavLinks({ setSidebar }: MobileNavLinks) {
  return (
    <div className="flex h-screen w-full bg-black/60  fixed top-0 left-0">
      <div className="h-full bg-white w-[250px] p-4 flex flex-col gap-6  ">
        <IoMdClose
          onClick={() => setSidebar(false)}
          className="text-3xl cursor-pointer"
        />
        <div className="  flex gap-5 flex-col">
          {links.map((d, i) => (
            <Link
              className=" hover:text-orange-400   text-gray-400 te text-sm sm:flex items-center      transition-all "
              key={i}
              href={d.href}
            >
              <span>{d.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
