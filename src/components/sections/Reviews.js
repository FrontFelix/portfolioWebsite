import { useState, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { MdFormatQuote } from "react-icons/md";
export default function Reviews() {
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

  const revs = [
    {
      name: "Mikael Gustafsson",
      role: "Arkitekt/Utvecklare/Co-founder Garrison West",
      date: "2023-03-21",
      description: `
      Jag har fått möjligheten att jobba med Felix under 2 x 10 veckors praktik. Det har varit superkul att följa Felix utvecklingen under dessa perioder då han gått från klarhet till klarhet. Om jag skulle sammanfatta några nyckelord om Felix:
       Grymma utvecklar-skills, han fått vara lite utanför sin comfortzone med nya ramverk och tekniker och lärt sig dessa på väldigt kort tid. Välskriven kod!
      En riktigt problemlösare, han har get sig fan på att det skall gå och grottar runt och hittar alltid en bra eller kreativ lösning.
        `,
    },
    {
      name: "Conner Murphy",
      role: "Utvecklare Radiator Digital",
      date: "2021-05-10",
      description: `Jag kan varmt rekommendera Felix som utvecklare. 
      Jag har haft nöjet att vara hans mentor under en tid och jag imponeras ständigt av hans driv, passion och förmåga. 
      Felix är alltid ivrig att lära sig och lösa utmaningar, vilket är en av många anledningar till varför han borde bygga ditt nästa projekt!`,
    },
    {
      name: "Markus Wiland",
      role: "IT-konsult på Garrison Consulting",
      date: "2023-03-17",
      description: `
        Felix är en otroligt snabb och duktig person inom programmering med en passion för front-end utveckling. 
        Han är en snabb inlärare som ständigt strävar efter att lära sig mer och utmana sig själv. Han är också mycket öppen för att utöka sin kunskap och utmana sig själv att lära sig nya saker,
        inklusive back-end utveckling. 
        Med sin positiva inställning och en vilja att ta sig an nya utmaningar, är Felix en duktig utvecklare.`,
    },
  ];
  return (
    <div
      id="recommendations"
      className="flex flex-col p-8 xl:p-0 container-small-width text-white text-left w-full"
    >
      <motion.h1
        variants={textVariants}
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.3 }}
        className="text-3xl"
      >
        Rekommendationer
      </motion.h1>
      <motion.p
        variants={textVariants}
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="mb-5"
      >
        Referenser från tidigare kollegor
      </motion.p>
      <div ref={ref} className="flex flex-col xl:flex-row gap-8">
        {revs.map((user, index) => (
          <motion.div
            variants={variants}
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.3, delay: index * 0.05 + 0.3 }}
            className="flex flex-col gap-1 rev-box w-full"
          >
            <h1 className="text-2xl color-primary">
              {user.name} <span className="text-xs italic">{user.date}</span>
            </h1>
            <h2>{user.role}</h2>
            <MdFormatQuote
              size={"2rem"}
              className="color-primary"
              style={{ transform: "scaleX(-1)", marginLeft: "-.4rem" }}
            />
            <p className="text-sm">{user.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
