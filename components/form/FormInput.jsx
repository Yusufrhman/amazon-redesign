import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const FormInput = ({
  id,
  label,
  type = "text",
  placeholder,
  isError,
  errorMessage,
}) => {
  const isPassword = type === "password";
  const [isHidden, setIsHidden] = useState(true);
  return (
    <motion.div
      animate={isError ? { x: [0, -5, 5, -5, 5, 0] } : { x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <label
        htmlFor={id}
        className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
          isError && "text-red-700"
        }`}
      >
        {label}
      </label>
      <div className="w-full h-full relative">
        {isPassword &&
          (!isHidden ? (
            <FaEyeSlash
              size={24}
              className="absolute right-2 top-1/2 -translate-y-1/2"
              color="white"
              onClick={() => setIsHidden(true)}
            />
          ) : (
            <FaEye
              size={24}
              className="absolute right-2 top-1/2 -translate-y-1/2"
              color="white"
              onClick={() => setIsHidden(false)}
            />
          ))}
        <input
          type={!isPassword ? type : isHidden ? type : "text"}
          name={id}
          id={id}
          placeholder={placeholder}
          className={` text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-dark-yellow dark:focus:border-dark-yellow outline-dark-yellow ${
            isError && "text-red-700 border-red-700 outline-red-700"
          }`}
        />
      </div>
      {isError && <p className="text-xs text-red-700 p-1">{errorMessage}</p>}
    </motion.div>
  );
};

export default FormInput;
