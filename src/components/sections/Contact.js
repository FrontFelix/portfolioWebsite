import { useRef } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion, useInView } from "framer-motion";
import { toast } from "react-toastify";
export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const sendMessageToWebhook = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const company = document.getElementById("company").value;
    const phone = document.getElementById("phone").value;

    const webhookUrl =
      "https://discordapp.com/api/webhooks/1087687219898236938/B6EGpurW_27Q58PoaHO5gKYu1M_rcE0CNLuzjjzcfYJMkI65tlPjLY0aZwEM1vDD8wk-";

    const messageContent = `Ny person vill kontakta dig, hör av dig snarast <@324632257912373249>.\nNamn: ${name}\nEmail address: ${email}\nFöretag: ${company}\nTelefonnummer: ${phone}'`;

    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: messageContent }),
    })
      .then((response) => {
        toast.success("Meddelande skickat!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("company").value = "";
        document.getElementById("phone").value = "";
      })
      .catch((error) => {});
  };

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 80 },
  };

  const textVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -80 },
  };

  return (
    <div
      ref={ref}
      id="contact"
      className="container-small-width w-full text-left flex justify-between gap-8 lg:gap:0 items-center text-white flex-col lg:flex-row p-8 lg:p-8 xl:p-0"
    >
      <div className="w-full lg:w-2/5 flex gap-5 flex-col">
        <motion.h1
          variants={textVariants}
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-3xl font-bold"
        >
          Kontakta mig!
        </motion.h1>
        <motion.p
          variants={textVariants}
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-xl"
        >
          Jag ser fram emot att höra från dig! Fyll i dina detaljer nedan och
          skicka ett meddelande till mig så återkommer jag så snart som möjligt.
          Låt oss nätverka och utforska möjligheterna tillsammans!
        </motion.p>
        <motion.div
          variants={textVariants}
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex gap-2"
        >
          <a
            className="icon-links"
            href="https://www.linkedin.com/in/felix-bakkum-252b26192/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin aria-label="icon" size={"2rem"} />
          </a>
          <a
            className="icon-links"
            href="https://github.com/FrontFelix"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub aria-label="icon" size={"2rem"} />
          </a>
        </motion.div>
      </div>
      <div className="w-full lg:w-1/2">
        <form
          onSubmit={(e) => {
            sendMessageToWebhook(e);
          }}
          className="flex flex-wrap gap-8 justify-start lg:justify-end"
        >
          <div className="flex flex-col gap-1 w-full lg:w-1/3">
            <motion.label
              variants={variants}
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              Namn
            </motion.label>
            <motion.input
              variants={variants}
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.3, delay: 0.4 }}
              id="name"
              required
              placeholder="Felix B"
              className="bg-transparent contact-input outline-none"
            />
          </div>
          <div className="flex flex-col gap-1 w-full lg:w-1/2">
            <motion.label
              variants={variants}
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.3, delay: 0.45 }}
            >
              Email address
            </motion.label>
            <motion.input
              variants={variants}
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.3, delay: 0.45 }}
              id="email"
              type="email"
              placeholder="felixb@dev.com"
              required
              className="bg-transparent contact-input outline-none"
            />
          </div>
          <div className="flex flex-col gap-1 w-full lg:w-1/3">
            <motion.label
              variants={variants}
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              Företag
            </motion.label>
            <motion.input
              variants={variants}
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.3, delay: 0.5 }}
              id="company"
              placeholder="Felix Studios"
              className="bg-transparent contact-input outline-none"
            />
          </div>
          <div className="flex flex-col gap-1 w-full lg:w-1/2">
            <motion.label
              variants={variants}
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.3, delay: 0.55 }}
            >
              Telefonnummer
            </motion.label>
            <motion.input
              variants={variants}
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.3, delay: 0.55 }}
              type="tel"
              id="phone"
              placeholder="+46 0736 432211"
              className="bg-transparent contact-input outline-none"
            />
          </div>
          <motion.button
            whileHover={{scale: 1.05, transition: { duration: .2}}}
            variants={variants}
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.3, delay: 0.6 }}
            type="submit"
            className="px-4 self-start justify-start bg-primary py-1 rounded text-primary-black"
          >
            Skicka meddelande
          </motion.button>
        </form>
      </div>
    </div>
  );
}
