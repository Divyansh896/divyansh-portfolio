import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-white pt-5 pb-3">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* About / Tagline */}
          <div className="col-md-4 mb-4">
            <h5 className="text-gradient fw-bold">Divyansh</h5>
            <p>
              Passionate Full-Stack Developer crafting modern web apps, REST APIs, and dynamic user experiences. <br />
              Made with ❤️, ☕, and lots of React ⚛️
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-gradient fw-bold">Contact Me</h5>
            <p>
              Email: <a href="mailto:Divyansh9030@gmail.com" className="text-white">Divyansh9030@gmail.com</a><br />
              Phone: +1 (905) 325-5148<br />
              Location: Vancouver, Canada
            </p>
          </div>

          {/* Social / Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-gradient fw-bold">Connect With Me</h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-2">
              <a href="https://github.com/divyansh896" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", fontSize: "1.5rem" }}>
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/divyansh-divyansh-318a2a33a/" target="_blank" rel="noopener noreferrer" style={{ color: "#0077b5", fontSize: "1.5rem" }}>
                <FaLinkedin />
              </a>
              <a href="mailto:Divyansh9030@gmail.com" style={{ color: "#ffb400", fontSize: "1.5rem" }}>
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="bg-secondary" />

        {/* Copyright */}
        <div className="row">
          <div className="col text-center text-secondary small">
            &copy; {new Date().getFullYear()} Divyansh. All rights reserved. | Designed & Developed with ❤️ and ☕
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
