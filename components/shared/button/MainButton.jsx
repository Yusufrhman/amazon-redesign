export default function MainButton({ children, className }) {
  return (
    <button
      className={`bg-dark-yellow text-white text-xl font-bold px-4 py-2 rounded-lg drop-shadow-xl ${className}`}
    >
      {children}
    </button>
  );
}
