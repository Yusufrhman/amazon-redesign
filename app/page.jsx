"use client"
import HEADSETIMG from "@/public/main-hero/headset.svg";
import SABUNIMG from "@/public/main-hero/sabun.jpg";
import KABINETIMG from "@/public/main-hero/kabinet.jpg";
import COMPUTERIMG from "@/public/main-hero/computer.jpg";

import Caraousel from "@/components/caraousel/Caraousel";
import MainButton from "@/components/shared/button/MainButton";

import IMG1 from "@/public/dont-miss-out/image-1.png";
import IMG2 from "@/public/dont-miss-out/image-2.png";
import IMG3 from "@/public/dont-miss-out/image-3.png";
import IMG4 from "@/public/dont-miss-out/image-4.png";
import IMG5 from "@/public/dont-miss-out/image-5.png";
import IMG6 from "@/public/dont-miss-out/image-6.png";

import SHOPIMG1 from "@/public/shop/image-1.png";
import SHOPIMG2 from "@/public/shop/image-2.png";
import SHOPIMG3 from "@/public/shop/image-3.png";
import SHOPIMG4 from "@/public/shop/image-4.png";
import SHOPIMG5 from "@/public/shop/image-5.png";
import SHOPIMG6 from "@/public/shop/image-6.png";

import PRODUCTIMG1 from "@/public/might-be/image-1.png";
import PRODUCTIMG2 from "@/public/might-be/image-2.png";
import PRODUCTIMG3 from "@/public/might-be/image-3.png";

import ORDERIMG1 from "@/public/your-order/image-1.png"
import ORDERIMG2 from "@/public/your-order/image-2.png"

import LEARNMOREIMG from "@/public/learn-more/image-1.png";

import Image from "next/image";
import ImageCard from "@/components/dont-miss-out/ImageCard";
import ProductCard from "@/components/might-be/ProductCard";

import BGGRADIENT from "@/public/background-gradient.svg";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const isLoggedIn = searchParams.get("isLoggedIn") === "true";

  const caraouselItems = [
    {
      image: HEADSETIMG,
      title: "Luxurious in Every Way",
      desc: "Check Out New Headphones",
    },
    { image: SABUNIMG, title: "Be Ready, Be Curly", desc: "enchanced formula" },
    {
      image: KABINETIMG,
      title: "Breakfast, Lunch, and Dinner ",
      desc: "tupperware for everyday use",
    },
    {
      image: COMPUTERIMG,
      title: "Fulfill Your Dreams",
      desc: "all new set up from Apple",
    },
  ];
  return (
    <main className="w-11/12 2xl:w-10/12 mx-auto my-10 relative">
      <Image
        src={BGGRADIENT}
        alt=""
        className="absolute -left-1/2 -z-10 top-0"
      />
      <Image
        src={BGGRADIENT}
        alt=""
        className="absolute -right-1/2 -z-10 bottom-0"
      />

      <Caraousel items={caraouselItems} />
      <ul className="w-full flex gap-2 my-4">
        <li>
          <MainButton>All</MainButton>
        </li>
        <li>
          <MainButton>Today's Deal</MainButton>
        </li>
        <li>
          <MainButton>Gift Cards</MainButton>
        </li>
        <li>
          <MainButton>Registry & Gifting</MainButton>
        </li>
        <li>
          <MainButton>Sell on Amazon</MainButton>
        </li>
      </ul>

      {isLoggedIn && (
        <section className="w-full my-10 flex items-center justify-between aspect-[16/2] bg-dark-blue rounded-xl overflow-clip">
          <p className="text-white font-bold text-3xl 2xl:text-4xl px-12">
            YOUR ORDER
          </p>
          <ul className="flex justify-end h-full">
            <li className="overflow-hidden w-1/12 h-full hover:w-2/6 transition-all duration-300 ease-in-out">
              <Image
                src={ORDERIMG1}
                alt=""
                className="w-full h-full object-cover"
              />
            </li>
            <li className="overflow-hidden w-1/12 h-full hover:w-2/6 transition-all duration-300 ease-in-out">
              <Image
                src={ORDERIMG2}
                alt=""
                className="w-full h-full object-cover"
              />
            </li>
            <li className="overflow-hidden w-1/12 h-full hover:w-2/6 transition-all duration-300 ease-in-out">
              <Image
                src={ORDERIMG1}
                alt=""
                className="w-full h-full object-cover"
              />
            </li>
            <li className="overflow-hidden w-1/12 h-full hover:w-2/6 transition-all duration-300 ease-in-out">
              <Image
                src={ORDERIMG2}
                alt=""
                className="w-full h-full object-cover"
              />
            </li>
          </ul>
        </section>
      )}

      <section className="w-full my-20 flex flex-col gap-8">
        <section className="flex items-end justify-between">
          <h3 className="font-bold text-2xl text-white drop-shadow-lg">
            Don't Miss Out - Big Sale
          </h3>
          <button className="text-white text-base">
            See More <span className="text-xl"> &gt;</span>
          </button>
        </section>
        <section className="flex flex-col w-full gap-12">
          <section className="w-full h-fit flex items-center gap-6">
            <ImageCard src={IMG1} className={"aspect-square "} />
            <ImageCard src={IMG2} className={"aspect-square "} />
            <ImageCard src={IMG3} className={"aspect-square "} />
            <ImageCard src={IMG4} className={"aspect-square "} />
          </section>
          <div className="w-full h-3/4 aspect-[20/3] relative group rounded-xl overflow-hidden">
            <h4 className="text-black font-bold text-3xl left-6 bottom-6 absolute w-[15%] tracking-widest drop-shadow-[0px_3px_3px_rgba(0,0,0,0.5)] z-10">
              Limited Time Offer
            </h4>
            <Image
              src={IMG5}
              alt=""
              className="w-full h-full object-cover  group-hover:scale-110 group-hover:opacity-80 transition"
            />
          </div>
          <div className="w-full h-3/4 aspect-[18/5] relative group rounded-xl overflow-hidden">
            <h4 className="text-black font-bold text-5xl left-8 bottom-8 absolute w-fit tracking-widest drop-shadow-[0px_3px_3px_rgba(0,0,0,0.5)] z-10">
              Free Delivery
            </h4>
            <Image
              src={IMG6}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-80 transition"
            />
          </div>
        </section>
      </section>

      <section className="w-full my-20 flex flex-col gap-8">
        <section className="flex items-end justify-between">
          <h3 className="font-bold text-2xl text-white drop-shadow-lg">
            Shop by Categories
          </h3>
          <button className="text-white text-base">
            See More <span className="text-xl"> &gt;</span>
          </button>
        </section>
        <section className="flex flex-col w-full gap-12">
          <section className="w-full h-fit flex items-center gap-6">
            <ImageCard src={SHOPIMG1} className={"aspect-[6/7]"} />
            <ImageCard src={SHOPIMG2} className={"aspect-[6/7]"} />
            <ImageCard src={SHOPIMG3} className={"aspect-[6/7]"} />
            <ImageCard src={SHOPIMG4} className={"aspect-[6/7]"} />
          </section>
          <section className="flex gap-6">
            <div className="relative w-full h-full">
              <h4 className="absolute top-0 right-0 text-white font-bold text-5xl p-6 drop-shadow-[0px_3px_3px_rgba(0,0,0,0.5)] z-10">
                Men's Wear
              </h4>
              <ImageCard src={SHOPIMG5} className={"aspect-auto"} />
            </div>
            <div className="relative w-full h-full">
              <h4 className="absolute top-0 left-0 text-black font-bold text-5xl p-6 drop-shadow-[0px_3px_3px_rgba(0,0,0,0.5)] z-10">
                Women's Wear
              </h4>
              <ImageCard src={SHOPIMG6} className={"aspect-auto"} />
            </div>
          </section>
        </section>
      </section>

      <section className="w-full my-20 flex flex-col gap-8">
        <section className="flex items-end justify-between">
          <h3 className="font-bold text-2xl text-white drop-shadow-lg">
            Might Be Your Interest!
          </h3>
          <button className="text-white text-base">
            See More <span className="text-xl"> &gt;</span>
          </button>
        </section>
        <section className="flex flex-col w-full gap-12">
          <section className="w-full h-fit flex items-center gap-6">
            <ProductCard
              img={PRODUCTIMG2}
              title="Asics Black"
              price={"Rp. 300.000"}
              size={"M"}
            />
            <ProductCard
              img={PRODUCTIMG1}
              title="Men's White T-Shirt"
              price={"Rp. 225.000"}
              size={"L"}
            />
            <ProductCard
              img={PRODUCTIMG2}
              title="Asics Black"
              price={"Rp. 300.000"}
              size={"M"}
            />
            <ProductCard
              img={PRODUCTIMG1}
              title="Men's White T-Shirt"
              price={"Rp. 225.000"}
              size={"L"}
            />
          </section>
          <section className="flex gap-6 relative">
            <h4 className="absolute bottom-0 left-0 text-black font-normal text-5xl p-6 z-10">
              LIMITED OFFER
            </h4>
            <ImageCard src={PRODUCTIMG3} className={"aspect-[16/4]"} />
          </section>
        </section>
      </section>

      <section className="w-full my-20 flex flex-col gap-8">
        <section className="flex items-end justify-between">
          <h3 className="font-bold text-2xl text-white drop-shadow-lg">
            Learn More
          </h3>
          <button className="text-white text-base">
            See More <span className="text-xl"> &gt;</span>
          </button>
        </section>
        <ImageCard src={LEARNMOREIMG} className={"aspect-[16/5]"} />
      </section>
    </main>
  );
}
