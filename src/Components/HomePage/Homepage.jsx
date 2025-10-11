import "./Homepage.css";
import { FaGithub, FaInstagram, FaLinkedin, FaCode, FaUser, FaTools, FaDatabase, FaHourglass, FaLink, FaCogs, FaMobileAlt, FaGitAlt, FaReact, FaGlobe } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Link  } from "react-router-dom";


// Main Hero Section Variants
const homeVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut", staggerChildren: 0.2 },
    },
};

const homeChildVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Image variant (grows from 0)
const imgVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};


// 💡 Skills Animations
const SkillVarients = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.2,
        },
    },
};

const SkillItemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

// 📊 Stats Animations

// Parent container variant
const statsContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            ease: "easeOut",
        },
    },
};

// Each card variant
const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};




const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


function Homepage() {

    const controls = useAnimation();

    useEffect(() => {
        controls.start("visible"); // Trigger animation immediately on mount
    }, [controls]);


    return (
        <main role="main" className="text-white home-section">
            {/* Home Section */}
            <section id="home" className="d-flex align-items-center">
                <div className="container">
                    <div className="wrapper">
                        <motion.img
                            src="/profile.jpg"
                            alt="Divyansh"
                            animate={controls} // runs on load
                            className="circle-img float-left me-md-4 mb-4 mb-md-0"
                            variants={imgVariant}   // <-- separate image variant
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        />

                        {/* Intro Text */}
                        <motion.div
                            className="intro-text"
                            variants={homeVariant}
                            initial="hidden"
                            animate={controls} // runs on load
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.h1
                                className="fw-bold text-gradient mb-3"
                                variants={homeChildVariant}
                                animate={controls} // runs on load
                            >
                                Hi, I’m <b>Divyansh</b>
                            </motion.h1>

                            <motion.p className="fw-semibold mb-2" variants={homeChildVariant} animate={controls}>
                                Full-Stack Developer | React, ASP.NET, SQL Server
                            </motion.p>

                            <motion.p className="fw-semibold mb-3" variants={homeChildVariant} animate={controls}>
                                I build full-stack web apps using C#, ASP.NET Core, and React — focused
                                on clean code, scalability, and real-world impact.
                            </motion.p>

                            <motion.div className="buttons d-flex gap-3 mb-3" variants={homeChildVariant} animate={controls}>
                                <Link to="/projects" className="btn btn-primary btn-sm">
                                    Explore My Work
                                </Link>

                                <a href="./DivyanshCV.pdf" className="btn btn-outline-light btn-sm" download>
                                    Download My CV
                                </a>
                            </motion.div>

                            <motion.div className="social-media-btns d-flex gap-3" variants={homeChildVariant} animate={controls}>
                                <a href="https://github.com/divyansh896" target="_blank" rel="noreferrer">
                                    <FaGithub />
                                </a>
                                <a href="https://instagram.com/divyansh.__x" target="_blank" rel="noreferrer">
                                    <FaInstagram />
                                </a>
                                <a href="https://www.linkedin.com/in/divyansh-divyansh-318a2a33a/" target="_blank" rel="noreferrer">
                                    <FaLinkedin />
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section id="Skills">
                {/* Skills Section */}
                <div className="container py-5 d-flex flex-column align-items-center">
                    <h2 className="mb-4 text-gradient fw-bold text-center">
                        Skills & Technologies
                    </h2>

                    <motion.div
                        variants={SkillVarients}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        className="skills-wrapper d-flex flex-wrap justify-content-center gap-4"
                        style={{ maxWidth: "900px" }}
                        id="skills"
                    >
                        <motion.div
                            variants={SkillItemVariants}
                            className="skill-item d-flex align-items-center gap-3 p-3 border rounded-3 shadow-sm"
                            whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(0,0,0,0.25)" }}
                        >
                            <FaReact className="text-primary icon-small" />
                            <span className="fw-semibold">React Apps</span>
                        </motion.div>

                        <motion.div
                            variants={SkillItemVariants}
                            className="skill-item d-flex align-items-center gap-3 p-3 border rounded-3 shadow-sm"
                            whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(0,0,0,0.25)" }}
                        >
                            <FaGlobe className="text-success icon-small" />
                            <span className="fw-semibold">Web Applications</span>
                        </motion.div>

                        <motion.div
                            variants={SkillItemVariants}
                            className="skill-item d-flex align-items-center gap-3 p-3 border rounded-3 shadow-sm"
                            whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(0,0,0,0.25)" }}
                        >
                            <FaDatabase className="text-warning icon-small" />
                            <span className="fw-semibold">SQL & Databases</span>
                        </motion.div>

                        <motion.div
                            variants={SkillItemVariants}
                            className="skill-item d-flex align-items-center gap-3 p-3 border rounded-3 shadow-sm"
                            whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(0,0,0,0.25)" }}
                        >
                            <FaCogs className="text-danger icon-small" />
                            <span className="fw-semibold">REST APIs (ASP.NET Core)</span>
                        </motion.div>

                        <motion.div
                            variants={SkillItemVariants}
                            className="skill-item d-flex align-items-center gap-3 p-3 border rounded-3 shadow-sm"
                            whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(0,0,0,0.25)" }}
                        >
                            <FaMobileAlt className="text-info icon-small" />
                            <span className="fw-semibold">.NET MAUI (Mobile)</span>
                        </motion.div>

                        <motion.div
                            variants={SkillItemVariants}
                            className="skill-item d-flex align-items-center gap-3 p-3 border rounded-3 shadow-sm"
                            whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(0,0,0,0.25)" }}
                        >
                            <FaGitAlt className="text-dark icon-small" />
                            <span className="fw-semibold">Git & GitHub</span>
                        </motion.div>
                    </motion.div>
                </div>

            </section>

            {/* Developer Snapshot Section */}
            <section id="snapshot">
                <motion.div
                    className="container py-5"
                    id="stats"
                    variants={statsContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <h2 className="text-center mb-5 fw-bold text-gradient">
                        My Developer Snapshot
                    </h2>

                    <div className="row g-4 text-center justify-content-center">
                        {/* Card 1 */}
                        <motion.div
                            variants={cardVariants}
                            whileInView="visible"
                            initial="hidden"
                            viewport={{ once: false, amount: 0.5 }}
                            className="col-12 col-md-4"
                        >
                            <div className="stat-card p-4 rounded-4 shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
                                <FaCode className="text-primary icon-large mb-2" />
                                <h5 className="fw-bold mt-2 text-gradient">10+ Full-Stack Projects</h5>
                                <p className="small mb-0">Projects Completed</p>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            variants={cardVariants}
                            whileInView="visible"
                            initial="hidden"
                            viewport={{ once: false, amount: 0.5 }}
                            className="col-12 col-md-4"
                        >
                            <div className="stat-card p-4 rounded-4 shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
                                <FaUser className="text-success icon-large mb-2" />
                                <h5 className="fw-bold mt-2 text-gradient">2 Team-Based Projects</h5>
                                <p className="small mb-0">Internships / Roles</p>
                            </div>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            variants={cardVariants}
                            whileInView="visible"
                            initial="hidden"
                            viewport={{ once: false, amount: 0.5 }}
                            className="col-12 col-md-4"
                        >
                            <div className="stat-card p-4 rounded-4 shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
                                <FaTools className="text-danger icon-large mb-2" />
                                <h5 className="fw-bold mt-2 text-gradient">12+ Technologies</h5>
                                <p className="small mb-0">React, .NET, SQL, etc.</p>
                            </div>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div
                            variants={cardVariants}
                            whileInView="visible"
                            initial="hidden"
                            viewport={{ once: false, amount: 0.5 }}
                            className="col-12 col-md-4"
                        >
                            <div className="stat-card p-4 rounded-4 shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
                                <FaDatabase className="text-warning icon-large mb-2" />
                                <h5 className="fw-bold mt-2 text-gradient">6 Databases</h5>
                                <p className="small mb-0">SQL & NoSQL Designed</p>
                            </div>
                        </motion.div>

                        {/* Card 5 */}
                        <motion.div
                            variants={cardVariants}
                            whileInView="visible"
                            initial="hidden"
                            viewport={{ once: false, amount: 0.5 }}
                            className="col-12 col-md-4"
                        >
                            <div className="stat-card p-4 rounded-4 shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
                                <FaLink className="text-info icon-large mb-2" />
                                <h5 className="fw-bold mt-2 text-gradient">3+ APIs</h5>
                                <p className="small mb-0">REST APIs Built</p>
                            </div>
                        </motion.div>

                        {/* Card 6 */}
                        <motion.div
                            variants={cardVariants}
                            whileInView="visible"
                            initial="hidden"
                            viewport={{ once: false, amount: 0.5 }}
                            className="col-12 col-md-4"
                        >
                            <div className="stat-card p-4 rounded-4 shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
                                <FaGithub className="text-white icon-large mb-2" />
                                <h5 className="fw-bold mt-2 text-gradient">5+ Projects</h5>
                                <p className="small mb-0">GitHub Repositories</p>
                            </div>
                        </motion.div>

                        {/* Card 7 */}
                        <motion.div
                            variants={cardVariants}
                            whileInView="visible"
                            initial="hidden"
                            viewport={{ once: false, amount: 0.5 }}
                            className="col-12 col-md-4"
                        >
                            <div className="stat-card p-4 rounded-4 shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
                                <FaHourglass className="text-secondary icon-large mb-2" />
                                <h5 className="fw-bold mt-2 text-gradient">1000+ Hours</h5>
                                <p className="small mb-0">Self-Learning Time</p>
                            </div>
                        </motion.div>

                        {/* Card 8 */}
                        <motion.div
                            variants={cardVariants}
                            whileInView="visible"
                            initial="hidden"
                            viewport={{ once: false, amount: 0.5 }}
                            className="col-12 col-md-4"
                        >
                            <div className="stat-card p-4 rounded-4 shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
                                <FaTools className="text-white icon-large mb-2" />
                                <h5 className="fw-bold mt-2 text-gradient">Multiple Tools</h5>
                                <p className="small mb-0">VS Code, Postman, Git, Azure...</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            </section>

            {/* About Section */}

            <section id="about" className="about-section  container py-5">
                <div className="row align-items-start">
                    {/* About Text */}
                    <div className="col-12">
                        <motion.div
                            className="about-wrapper"
                            variants={paragraphVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <motion.img
                                src="/profile.jpg"
                                alt="Divyansh"
                                className="circle-img float-left"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.2 }}
                            />

                            <motion.h2 className="mb-4 fw-bold text-gradient" variants={paragraphVariants}>
                                About Me
                            </motion.h2>

                            <motion.p className="mb-3 text-white" variants={paragraphVariants}>
                                I’m <strong>Divyansh</strong>, a passionate Full-Stack Developer with a diploma in Computer Programming from{" "}
                                <strong>Niagara College</strong>.
                            </motion.p>

                            <motion.p className="mb-3 text-white" variants={paragraphVariants}>
                                I build responsive, scalable applications using <strong>React</strong>, <strong>ASP.NET Core</strong>, and{" "}
                                <strong>SQL Server</strong> — focused on clean code, performance, and real-world impact.
                            </motion.p>

                            <motion.p className="mb-3 text-white" variants={paragraphVariants}>
                                I enjoy solving complex problems, collaborating with teams, and constantly learning new technologies to create cutting-edge apps.
                            </motion.p>

                            <motion.p className="mb-0 text-white" variants={paragraphVariants}>
                                Outside coding, I explore tech trends, design, and digital art. I also love creating interactive, user-friendly interfaces.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="cta">
                {/* 🌟 Call-to-Action Section */}
                <motion.div
                    className="container py-5 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <h2 className="fw-bold text-gradient mb-3">
                        Have something in your mind? Let's connect!
                    </h2>
                    <p className="text-light mb-4">
                        I’d love to bring your ideas to life. Whether it’s a web app, API,
                        or full-stack project — I’m here to help.
                    </p>
                    <a href="#contact" className="btn btn-primary btn-lg">
                        Contact Me
                    </a>
                </motion.div>
            </section>

        </main>
    );
}

export default Homepage;
