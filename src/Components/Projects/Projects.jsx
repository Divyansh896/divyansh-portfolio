import { motion, useAnimation } from "framer-motion";
import ProjectNiaCrm from "./ProjectNiaCrm";
import ProjectNCR from "./ProjectNCR";
import ProjectGymManagement from "./ProjectGymManagement";
import ProjectCreativeTales from "./ProjectCreativeTales";
import { useEffect } from "react";

// You can import more personal projects here later

function Projects() {
  const controls = useAnimation();

    useEffect(() => {
        controls.start("visible"); // Trigger animation immediately on mount
    }, [controls]);

  return (
    <main id="projects" className="py-5 bg-dark text-light">
      <div className="container">
        {/* 🌟 Section Heading */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          exit={{opacity:0, y:-30}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="fw-bold display-5 text-gradient">My Projects</h2>
          <p className="lead mt-3">
            A collection of projects I’ve contributed to — both as a team lead and as an independent developer.
            Each project reflects my focus on clean architecture, modern design, and scalable development.
          </p>
        </motion.div>

        {/* 👥 Team-Led Projects */}
        <section className="mb-5" aria-label="Team Projects">
          <motion.h3
            className="fw-semibold mb-4 border-start border-3 ps-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            Team Projects — As Lead Developer
          </motion.h3>

          <ProjectNiaCrm />
          <ProjectNCR />
          <ProjectCreativeTales />
        </section>

        <hr />

        {/* 💻 Solo Projects */}
        <section aria-label="Personal Projects">
          <motion.h3
            className="fw-semibold mb-4 border-start border-3 ps-3 mt-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            Personal Projects — Independent Development
          </motion.h3>

          <ProjectGymManagement />
          {/* Add more solo project components below */}
        </section>
      </div>
    </main>
  );
}

export default Projects;
