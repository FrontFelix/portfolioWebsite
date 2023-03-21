"use client";
import { SiBuildkite, SiApachenetbeanside, SiAwsfargate } from "react-icons/si";
import { BiCodeCurly } from "react-icons/bi";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Work() {
  // const [ref, inView, entry] = useInView({
  //   threshold: 1,
  //   triggerOnce: true,
  // });
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 80 },
  };

  const textVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -80 },
  };
  return (
    <div
      id="experience"
      className="flex gap-5 flex-col p-8 xl:p-0 container-small-width text-white text-left w-full"
    >
      <motion.h1
        transition={{ duration: 0.2, when: "afterChildren" }}
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
        className="text-3xl text-center md:text-left"
        initial="hidden"
      >
        Erfarenheter
      </motion.h1>
      <motion.p
        transition={{ duration: 0.2, delay: 0.1, when: "beforeChildren" }}
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
        initial="hidden"
        className="text-center md:text-left"
      >
        Erfaren inom Front-end utveckling med fokus på användarupplevelse
      </motion.p>
      {/* Boxes Flex */}
      <div className="flex-col xl:flex-row justify-between">
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            ref={ref}
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
            variants={variants}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="workBox mx-auto lg:mx-0 bg-blue-50 flex-col justify-between flex p-8 text-white rounded bg-darker-primary"
          >
            <div className="flex justify-between">
              <h2 className="text-xl">Frontend</h2>
              <BiCodeCurly size={"1.5rem"} />
            </div>
            <div>
              <SiBuildkite size={"6rem"} />
            </div>
            <div>
              <h1 className="text-xl">
                Skapa responsiva och dynamiska gränssnitt med React och Next.js!
              </h1>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="workBox mx-auto lg:mx-0 bg-blue-50 flex-col justify-between flex p-8 text-primary-black rounded bg-primary"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl">Backend</h2>
              <BiCodeCurly size={"1.5rem"} />
            </div>
            <div>
              <SiApachenetbeanside size={"6rem"} />
            </div>
            <div>
              <h1 className="text-xl">
                Skapa effektiva backend-system med Node.js och Express.js!
              </h1>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="workBox mx-auto lg:mx-0 flex-col justify-between flex p-8 text-primary-black rounded"
          >
            <div className="flex justify-between">
              <h2 className="text-xl">Databas</h2>
              <BiCodeCurly size={"1.5rem"} />
            </div>
            <div>
              <SiAwsfargate size={"6rem"} />
            </div>
            <div>
              <h1 className="text-xl">
                Skapa säkra backend-system med Firebase och MongoDB!
              </h1>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
