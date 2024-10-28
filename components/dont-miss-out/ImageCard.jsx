import Image from "next/image";

const ImageCard = ({ src, className }) => (
  <div className={`w-full rounded-xl  overflow-hidden group ${className}`}>
    <Image
      src={src}
      alt=""
      className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-80 transition"
    />
  </div>
);

export default ImageCard;
