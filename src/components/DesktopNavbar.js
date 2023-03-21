import { motion } from "framer-motion";
import { useState } from "react";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";

export default function DesktopNavbar() {
  const [animation, setAnimation] = useState("closed");

  const path01Variants = {
    open: { d: "M3.06061 2.99999L21.0606 21" },
    closed: { d: "M0 9.5L24 9.5" },
  };

  const path02Variants = {
    open: { d: "M3.00006 21.0607L21 3.06064" },
    moving: { d: "M0 14.5L24 14.5" },
    closed: { d: "M0 14.5L15 14.5" },
  };

  const navbarVariations = {
    open: { x: 0 },
    closed: { x: 1200 },
  };

  const fixedVariants = {
    open: { position: "fixed", top: "3rem", left: "2rem" },
    closed: { position: "relative", top: "", left: "" },
  };

  const fixed02Variants = {
    open: { position: "fixed", top: "3rem", right: "2rem" },
    closed: { position: "relative", top: "", right: "" },
  };

  const sidebarState = () => {
    setAnimation("moving");
    setTimeout(() => {
      setAnimation(animation === "closed" ? "open" : "closed");
    }, 200);
  };

  return (
    <motion.div
      initial={{ y: -200 }}
      animate={{ y: 0, transition: { duration: 0.6, delay: 1 } }}
    >
      <nav className="relative px-8 lg:px-8 xl:px-0 flex justify-between items-center text-white container-width border-red-50">
        <motion.a
          initial="closed"
          animate={animation === "open" ? "open" : "closed"}
          transition={{ duration: 0.8 }}
          variants={fixedVariants}
          className="text-3xl font-bold leading-none z-50"
          href="#"
        >
          Felix
        </motion.a>
        <div className="lg:hidden">
          <motion.button
            onClick={sidebarState}
            initial="closed"
            animate={animation === "open" ? "open" : "closed"}
            transition={{ duration: 0.8 }}
            variants={fixed02Variants}
            className="z-50"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <motion.path
                stroke="#FFFFFF"
                animate={animation}
                variants={path01Variants}
              />
              <motion.path
                stroke="#FFFFFF"
                animate={animation}
                variants={path02Variants}
              />
            </svg>
          </motion.button>
        </div>
        <motion.div
          initial="closed"
          animate={animation === "open" ? "open" : "closed"}
          transition={{ duration: 0.3 }}
          variants={navbarVariations}
          className="fixed bg-primary-black left-0 top-0 h-full w-full z-30 px-8 py-20 lg:hidden"
        >
          <ul className="flex flex-col gap-2 pt-8">
            <li>
              <a
                onClick={sidebarState}
                className="text-sm hover:text-gray-500 text-xl"
                href="#experience"
              >
                Erfarenhet
              </a>
            </li>
            <li>
              <a
                onClick={sidebarState}
                className="text-sm  hover:text-gray-500 text-xl"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                onClick={sidebarState}
                className="text-sm  hover:text-gray-500 text-xl"
                href="#recommendations"
              >
                Rekommendationer
              </a>
            </li>
            <li>
              <a
                onClick={sidebarState}
                className="text-sm  hover:text-gray-500 text-xl"
                href="#contact"
              >
                Kontakt
              </a>
            </li>
            <li className="mt-12">
              <div className="flex gap-2">
                <a
                  className="icon-links"
                  href="https://www.linkedin.com/in/felix-bakkum-252b26192/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin size={"2rem"} />
                </a>
                <a
                  className="icon-links"
                  href="https://github.com/FrontFelix"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub size={"2rem"} />
                </a>
              </div>
            </li>
          </ul>
        </motion.div>
        <ul className="hidden lg:flex lg:items-center lg:w-auto gap-8 text-white">
          <li>
            <a className="text-sm icon-links" href="#experience">
              Erfarenhet
            </a>
          </li>
          <li>
            <a className="text-sm  icon-links" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="text-sm  icon-links" href="#recommendations">
              Rekommendationer
            </a>
          </li>
          <li>
            <a className="text-sm  icon-links" href="#contact">
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
}
