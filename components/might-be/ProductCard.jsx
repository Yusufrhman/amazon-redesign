import Image from "next/image";

export default function ProductCard({ img, title, price, size }) {
  return (
    <div className="bg-white rounded-xl aspect-[6/7] w-full overflow-hidden p-4 flex flex-col gap-4 group">
      <div className="w-full h-4/6 rounded-lg overflow-hidden">
        <Image
          src={img}
          alt=""
          className="w-full object-cover aspect-square group-hover:scale-110 group-hover:opacity-80 transition"
        />
      </div>
      <div className="flex flex-col justify-start gap-2 h-2/6">
        <h3 className="text-black font-bold text-xl 2xl:text-2xl">{title}</h3>
        <p className="text-dark-yellow font-semibold text-lg 2xl:text-xl">
          {price}
        </p>
        <p className="text-black font-light text-xl">{size}</p>
      </div>
    </div>
  );
}
