/** @format */
"use client";

import { FaCartShopping } from "react-icons/fa6";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useAtom } from "jotai";
import { countAtom, productAtom } from "../atom";

import produtimg1 from "@/assets/images/image-product-1.jpg";

export function RightDiv() {
  // countAtom
  const [count, setCount] = useAtom(countAtom);
  const [product, setProduct] = useAtom(productAtom);

  function increaseCount() {
    setCount(count + 1);
  }

  function dicreaseCount() {
    setCount(count - 1);
  }

  function addToCart() {
    setProduct({
      image: produtimg1,
      procutName: "Autumn Limited Edition...",
      productCount: count,
      productPrice: 125
    });
  }

  return (
    <div className="1/2 max-w-[384px] flex flex-col gap-5">
      <p className=" text-xs font-bold text-orange-500">SNEAKER COMPANY</p>

      <h2 className="text-3xl font-bold">Fall Limited Edition Sneakers</h2>
      <p className="text-gray-400">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <section>
        <div className="flex gap-3 ">
          <div className="text-3xl font-bold">$125.00</div>
          <div className="px-3 py-2 bg-orange-100 rounded-xl text-orange-400 font-bold">
            50%
          </div>
        </div>
        <div className="line-through text-gray-200 font-bold"> $250.00</div>
      </section>

      <section className="flex items-center gap-5">
        {/* plus and minus btn  */}
        <div className=" flex gap-2 rounded-xl text-orange-400 bg-gray-100  items-center     h-14 w-32 px-5 justify-between">
          <button onClick={dicreaseCount}>
            <FaMinus />
          </button>
          <span className="text-black font-bold"> {count} </span>
          <button onClick={increaseCount}>
            <FaPlus />
          </button>
        </div>

        <button
          onClick={addToCart}
          className="flex gap-3 bg-orange-400 text-white px-6 py-3 rounded-xl "
        >
          <span>
            <FaCartShopping className="text-xl" />
          </span>

          <span className="font-bold">Add to Card</span>
        </button>
      </section>
    </div>
  );
}
