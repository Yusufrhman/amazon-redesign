"use client";
import FormInput from "@/components/form/FormInput";
import FormSection from "@/components/form/FormSection";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const controls = useAnimation();
  const router = useRouter();

  const generateRandomArray = (length, range) =>
    Array.from({ length }, () =>
      Math.floor(Math.random() * (range * 2) - range)
    );

  useEffect(() => {
    const animateGradient = () => {
      const xValues = generateRandomArray(20, 250);
      const yValues = generateRandomArray(10, 200);

      controls.start({
        x: xValues,
        y: yValues,
        transition: {
          duration: 30,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };

    animateGradient();
  }, [controls]);

  const [errorMessage, setErrorMessage] = useState({ email: "", password: "" });

  function submit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredData = Object.fromEntries(formData.entries());
    if (enteredData.email === "hansen@gmail.com") {
      setErrorMessage({
        email: "Account not found!",
        password: errorMessage.password,
      });
    } else if (enteredData.email.length < 1) {
      setErrorMessage({
        email: "Email required",
        password: errorMessage.password,
        confirm: errorMessage.confirm,
      });
    } else if (enteredData.password.length < 6) {
      setErrorMessage({
        email: errorMessage.email,
        password: "Password must be atleast 6 characters",
      });
    } else {
      setErrorMessage({ email: "", password: "" });
      router.push("/?isLoggedIn=true");
    }
  }
  return (
    <main className="w-11/12 2xl:w-10/12 mx-auto my-10 relative flex items-center justify-center px-24 py-8">
      <motion.div
        className="bg-gradient-radial from-dark-yellow via-transparent to-transparent aspect-square h-[50svh] absolute blur-3xl left-1/2 translate-x-1/2"
        animate={controls}
      ></motion.div>
      <div className=" w-4/5 lg:w-3/5 xl:w-2/5 2xl:w-1/4 bg-dark-blue px-8 py-10 xl:py-8 2xl:py-6 rounded-2xl">
        {" "}
        <FormSection title="Log in">
          <form className="space-y-4 md:space-y-6" onSubmit={submit}>
            <FormInput
              id="email"
              label="Your email"
              type="email"
              placeholder="name@company.com"
              isError={errorMessage.email !== ""}
              errorMessage={errorMessage.email}
            />
            <FormInput
              id="password"
              label="Password"
              type="password"
              placeholder="••••••••"
              isError={errorMessage.password !== ""}
              errorMessage={errorMessage.password}
            />

            <button
              type="submit"
              className={`font-bold text-white px-4 py-1 rounded-md  bg-dark-yellow w-fit relative z-10 `}
            >
              Log in
            </button>
          </form>
        </FormSection>
      </div>
    </main>
  );
}
