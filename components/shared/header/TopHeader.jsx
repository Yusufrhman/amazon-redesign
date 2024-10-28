"use client";
import { FaLanguage, FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { TbCoinFilled } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";

export default function TopHeader() {
  return (
    <div className="w-full h-fit bg-black z-40">
      <div className="w-11/12 2xl:w-10/12 mx-auto">
        <section className="w-full flex justify-end py-3">
          <ul className="flex items-center justify-center gap-4">
            <li>
              <div className="flex items-center gap-[0.35rem]">
                <FaLocationDot color="#FFFFFF" />
                <p className="text-white">Surabaya, Indonesia</p>
                <IoMdArrowDropdown color="#FFFFFF" />
              </div>
            </li>
            <li>
              {" "}
              <div className="flex items-center gap-[0.35rem]">
                <FaLanguage color="#FFFFFF" />
                <p className="text-white">ENG</p>
                <IoMdArrowDropdown color="#FFFFFF" />
              </div>
            </li>
            <li>
              {" "}
              <div className="flex items-center gap-[0.35rem]">
                <TbCoinFilled color="#FFFFFF" />
                <p className="text-white">IDR</p>
                <IoMdArrowDropdown color="#FFFFFF" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-[0.35rem]">
                <RiCustomerService2Fill color="#FFFFFF" />
                <p className="text-white">Customer Service</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
