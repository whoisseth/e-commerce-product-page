/** @format */

import { LeftMainDiv } from "./components/LeftMainDiv";
import Navbar from "./components/Navbar";
import { RightDiv } from "./components/RightDiv";

export default function Home() {
  return (
    <div className="">
      <main className=" flex flex-col gap-10 px-2 max-w-5xl mx-auto">
        <Navbar />
        <div
          className="flex flex-col md:flex-row items-center  px-3  gap-10 pb-10
        "
        >
          {/* left  */}
          <LeftMainDiv />
          {/* right */}
          <RightDiv />
        </div>
      </main>
    </div>
  );
}
