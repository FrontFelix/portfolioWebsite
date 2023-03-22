import { motion } from "framer-motion"


export default function ProjectContent({inView, project, index}) {

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 80 },
      };

    return ( 
        <motion.div
        variants={variants}
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.3, delay: index * 0.05 + 0.3 }}
        className="project-box w-full lg:w-96 md:w-2/5 flex flex-col gap-2 h-60"
      >
        {project.github === "none" ? (
          <div className="image-pointer-block">
            <img
              alt="project..."
              className="object-cover"
              src={project.image}
            />
          </div>
        ) : (
          <a
            className={
              project.github === "none" ? "image-pointer-block" : ""
            }
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="project..."
              className="object-cover"
              src={project.image}
            />
          </a>
        )}
      </motion.div>
    )
}