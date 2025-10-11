import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { sendContactEmail } from "../../services/emailService";
import "./contact.css";

export default function ContactForm() {
  const controls = useAnimation();
  const form = useRef();

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);

  // Form validation errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    controls.start("visible"); // Trigger animation immediately on mount
  }, [controls]);

  const validate = ({ user_name, user_email, message }) => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    // Name validation
    if (!user_name || user_name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user_email || !emailRegex.test(user_email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Message validation
    if (!message || message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
    };

    // Validate form before sending
    if (!validate(formData)) return;

    setIsSending(true);
    const response = await sendContactEmail(form);
    setIsSending(false);

    if (response.success) {
      setIsSent(true);
      setError(false);
      setErrors({ name: "", email: "", message: "" });
      form.current.reset();
    } else {
      setIsSent(false);
      setError(true);
    }
  };

  return (
    <main
      className="contact-main"
      id="contact"
      style={{ backgroundImage: `url('/contactformbg.webp')` }}
    >
      <motion.section
        className="contact-section container py-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Glass Header + Tagline */}
        <div className="d-flex align-items-center justify-content-center flex-wrap gap-4 mb-2">
          <motion.div
            className="p-4 rounded-4 glass-form shadow-lg text-center mb-4 col-md-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="fw-bold text-gradient mb-3">Contact Me</h2>
            <p className="text-dark mb-0">
              Have a question, project idea, or just want to say hi? I’d love to hear from you!
            </p>
          </motion.div>
        </div>

        <div className="d-flex align-items-center justify-content-center flex-wrap gap-4">
          {/* RIGHT COLUMN - Glass Contact Form */}
          <motion.div
            className="col-md-7"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="p-4 rounded-4 glass-form shadow-lg text-start"
            >
              <div className="mb-3">
                <input
                  type="text"
                  name="user_name"
                  className={`form-control form-control-lg ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  placeholder="Your Name"
                  required
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  name="user_email"
                  className={`form-control form-control-lg ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  placeholder="Your Email"
                  required
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="mb-3">
                <textarea
                  name="message"
                  className={`form-control form-control-lg ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
                {errors.message && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary px-5 py-2 rounded-pill fw-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </motion.button>

              {isSent && <p className="text-success mt-3">✅ Message sent successfully!</p>}
              {error && <p className="text-danger mt-3">❌ Failed to send message.</p>}
            </form>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
