export default function CaraouselButton({ isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative w-8 h-8 flex items-center justify-center"
    >
      {isActive && (
        <div className="absolute w-12 h-12 border rounded-full border-dark-yellow"></div>
      )}
      <div
        className={`w-full h-full rounded-full ${
          isActive ? "bg-dark-yellow" : "bg-white"
        }`}
      ></div>
    </button>
  );
}
