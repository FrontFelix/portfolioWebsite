"use client";
import { motion } from "framer-motion";

import { AiOutlineCoffee } from "react-icons/ai";

export default function Hero() {
  return (
    <div className="flex gap-5 flex-col lg:flex-row lg:justify-between lg:items-center p-8 xl:p-0 container-small-width text-white text-left">
      <div className="flex flex-col gap-5 w-auto lg:w-auto">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
          className="text-4xl font-bold text-center lg:text-left"
        >
          Teknikentusiast
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.3 },
          }}
          className="text-center lg:text-left"
        >
          Hej ! Jag är en 21-årig kille från Göteborg som har varit inne på
          programmeringsspåret sedan jag var 15 år. Jag har specialiserat mig på
          frontend-utveckling och har en passion för att utforska nya tekniker
          och verktyg. Min tekniska nyfikenhet och snabba inlärningsförmåga gör
          mig till en skicklig utvecklare med öga för detaljer.
        </motion.p>
        <motion.a
          className="flex items-center gap-4 bg-primary md:w-1/2 w-2/3 mx-auto lg:mx-0 lg:w-1/3 justify-center py-1 rounded text-primary-black"
          initial={{ x: 100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            y: [10, 10, 0, 10, 0, 10, 0, 10],
            transition: {
              duration: 0.3,
              delay: 0.4,
              y: { delay: 1.2, duration: 2.2 },
            },
          }}
          href="#contact"
        >
          <p>Träffas på kaffe ? </p>
          <AiOutlineCoffee />
        </motion.a>
        <div className="flex">
          <a></a>
        </div>
      </div>
      <div className="w-auto lg:w-auto">
        <div className="relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ height: "100%" }}
            animate={{
              borderBottom: "4px solid #85d5ff",
              height: "0%",
              transition: {
                duration: 0.7,
                delay: 0.7,
                height: { delay: 0.9 },
                borderBottom: { duration: 0.05 },
              },
            }}
            className="z-20 absolute  w-2/3 md:w-1/3 lg:w-1/2 bg-primary-black"
          />
          <motion.img
            className="w-2/3 lg:w-1/2 md:w-1/3  block mx-auto lg:mx-0 rounded"
            alt="profile picture"
            src="./me.jpg"
          />
        </div>
      </div>
    </div>
  );
}
