import React from 'react'
import { motion } from "framer-motion";
import './Projects.css';

function ProjectCreativeTales() {
  return (
    <>
      <div className="row align-items-center">


        {/* Text Column (Left) */}
        <div className="col-md-6 px-4 py-5">
          <motion.h2
            className="fw-bold mb-3 text-primary"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }} // re-triggers when in view
            viewport={{ once: false, amount: 0.3 }} // 'once: false' = trigger every time it's in view
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            🎨 Creative Tales – Resin Art Portfolio
          </motion.h2>

          <p className="lead">
            A <strong>modern, responsive web application</strong> designed to showcase the
            elegant <strong>resin art creations</strong> of{" "}
            <strong>Ritika Sood</strong>, a passionate artist from India. This project was
            crafted by <strong>Team Stellar</strong> —{" "}
            <em>Divyansh, Elizaveta, and Rohit</em> — to bring her beautiful artwork into a
            digital experience filled with <strong>vibrance, emotion, and creativity</strong>.
          </p>

          <hr className="my-4" />

          <p>
            The platform offers an immersive <strong>gallery showcase</strong> featuring over
            60 handcrafted resin artworks, organized in a responsive masonry layout. It also
            includes an <strong>interactive product catalog</strong> with pricing, categories,
            and a <strong>direct Instagram integration</strong> for purchasing and custom
            orders.
          </p>

          <p>
            Developed with <strong>React</strong>, <strong>Bootstrap</strong>, and{" "}
            <strong>Framer Motion</strong>, Creative Tales emphasizes{" "}
            <em>clean design, smooth animations, and effortless navigation</em>. It captures
            both the artistic and technical essence of a professional modern portfolio site.
          </p>

          <p className="text-success fw-semibold">
            This project reflects our passion for <strong>UI/UX design</strong>,{" "}
            <strong>accessibility</strong>, and <strong>creative storytelling through code</strong>.
            It stands as a proud example of Stellar’s ability to blend{" "}
            <em>artistry with technology</em>.
          </p>

          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#creativeTalesModal"
          >
            View Creative Tales Details
          </button>
          <a
            href="https://github.com/Divyansh896/creative-tales"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary mx-2"
          >
            View Source Code
          </a>
        </div>


        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="poster-wrapper position-relative overflow-hidden rounded-4 shadow-lg"
          >
            <img
              src="/CreativeTales.webp"
              alt="Creative Tales Poster"
              className="img-fluid poster-img"
              style={{
                maxHeight: "480px",
                width: "100%",
                objectFit: "cover",
                border: "3px solid rgba(255,255,255,0.1)",
              }}
            />

            {/* Gradient Overlay */}
            <div className="poster-overlay d-flex justify-content-center align-items-center">
              <a
                href="https://your-demo-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light fw-semibold"
              >
                🔗 Live Demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>


      <div
        className="modal fade"
        id="creativeTalesModal"
        tabIndex="-1"
        aria-labelledby="creativeTalesModalLabel"
        aria-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog modal-xl modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="creativeTalesModalLabel">
                🎨 Creative Tales — Crafting worlds of wonder through art & imagination
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <div className="modal-body">
              {/* Intro */}
              <p>
                <strong>Creative Tales</strong> is a modern, responsive web application
                showcasing the beautiful resin art creations of <strong>Ritika Sood</strong>.
                This elegant portfolio includes an immersive gallery, a product showcase,
                and a smooth UX designed to connect art lovers with unique handcrafted resin artworks.
              </p>

              <hr />

              {/* Collaborators */}
              <h6 className="fw-bold">🤝 Collaborators</h6>
              <ul>
                <li>Divyansh</li>
                <li>Elizaveta Lazareva</li>
                <li>Rohit Thakur</li>
              </ul>

              <hr />

              {/* Features */}
              <h6 className="fw-bold">✨ Features</h6>
              <ul>
                <li>
                  <strong>Gallery & Showcase</strong>
                  <ul>
                    <li>Interactive Gallery — 64+ resin art images in a masonry layout</li>
                    <li>Modal Lightbox — click any image to view full-screen</li>
                    <li>Responsive & adaptive grid for all screen sizes</li>
                    <li>Smooth animations powered by Framer Motion</li>
                  </ul>
                </li>

                <li>
                  <strong>Product Catalog</strong>
                  <ul>
                    <li>14 product categories (see full list below)</li>
                    <li>Clear pricing in Indian Rupees (₹)</li>
                    <li>Instagram DM integration for purchases and inquiries</li>
                  </ul>
                </li>

                <li>
                  <strong>Custom Orders</strong>
                  <ul>
                    <li>3-step commission process: consultation → creation → delivery</li>
                    <li>Visual workflow to guide customers</li>
                    <li>Direct Instagram contact for bespoke orders</li>
                  </ul>
                </li>

                <li>
                  <strong>Customer Reviews</strong>
                  <ul>
                    <li>Testimonial system with star ratings</li>
                    <li>Social proof and trust-building mechanisms</li>
                  </ul>
                </li>

                <li>
                  <strong>User Experience</strong>
                  <ul>
                    <li>Mobile-first responsive navigation (hamburger menu)</li>
                    <li>Dynamic navbar with transparency effects</li>
                    <li>Smooth scrolling and letter-by-letter loading animations</li>
                  </ul>
                </li>
              </ul>

              <hr />

              {/* Product categories */}
              <h6 className="fw-bold">📦 Product Categories (sample)</h6>
              <ul>
                <li>Abstract Resin Paintings</li>
                <li>Geode Resin Art & Clocks</li>
                <li>Handmade Coasters with Pressed Flowers</li>
                <li>Resin Jewelry (Earrings, Rings, Key Rings)</li>
                <li>Custom Phone Covers</li>
                <li>Wedding Photo Coasters</li>
                <li>Pooja Thali & Trays</li>
                <li>…and more (14 categories total)</li>
              </ul>

              <hr />

              {/* Screenshots / Demo */}
              <h6 className="fw-bold">🖥️ Screenshots / Demo</h6>
              <ul>
                <li>Homepage Hero Carousel — dynamic carousel showcasing resin art.</li>
                <li>Product Gallery — interactive product showcase with hover effects & pricing.</li>
                <li>Gallery View — masonry grid with modal lightbox.</li>
                <li>Custom Orders — step-by-step commission workflow visuals.</li>
              </ul>

              <hr />

              {/* Installation */}
              <h6 className="fw-bold text-primary">🚀 Installation / Setup</h6>
              <p><strong>Prerequisites</strong></p>
              <ul>
                <li>Node.js v14+</li>
                <li>npm or yarn</li>
                <li>Git (for cloning)</li>
              </ul>

              <p><strong>Quick start</strong></p>
              <pre className="bg-light p-3 rounded">
                <code>
                  {`git clone https://github.com/your-username/creative-tales.git
cd creative-tales
npm install        # or: yarn install
npm start          # or: yarn start
# open http://localhost:3000 in your browser` }
                </code>
              </pre>

              <p>
                <strong>Build for production:</strong>
              </p>
              <pre className="bg-light p-3 rounded">
                <code>{`npm run build   # or: yarn build`}</code>
              </pre>

              <p className="small text-muted">
                Environment: all images are served from <code>/public/</code>; Instagram
                integration uses direct links (no API keys).
              </p>

              <hr />

              {/* Usage */}
              <h6 className="fw-bold">📖 Usage</h6>

              <p><strong>For visitors</strong></p>
              <ul>
                <li>Browse the Gallery page to view all artwork.</li>
                <li>View products in the Shop section and click "DM to Buy" to contact via Instagram.</li>
                <li>Use the Custom Orders section to request commissions.</li>
                <li>Read Reviews for customer testimonials and social proof.</li>
              </ul>

              <p><strong>For developers</strong></p>
              <ul>
                <li>Components live in <code>/src/Components/</code>; pages in <code>/src/Pages/</code>.</li>
                <li>Global styles in <code>App.css</code>; component styles in their own files.</li>
                <li>Images stored in <code>/public/images/</code> and <code>/public/Product_images/</code>.</li>
              </ul>

              <hr />

              {/* Technologies */}
              <h6 className="fw-bold text-primary">🛠️ Technologies</h6>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Area</th>
                    <th>Technologies / Tools</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Frontend</td>
                    <td>React 19.1.1, React Router DOM 7.9.3</td>
                  </tr>
                  <tr>
                    <td>UI & Styling</td>
                    <td>Bootstrap 5.3.8, Custom CSS, CSS Grid & Flexbox</td>
                  </tr>
                  <tr>
                    <td>Animations</td>
                    <td>Framer Motion, Swiper.js, React Typed</td>
                  </tr>
                  <tr>
                    <td>Dev & Build</td>
                    <td>React Scripts, Web Vitals, PropTypes</td>
                  </tr>
                  <tr>
                    <td>Testing</td>
                    <td>Jest, React Testing Library, @testing-library/user-event</td>
                  </tr>
                </tbody>
              </table>

              <hr />

              {/* Project structure */}
              <h6 className="fw-bold">📁 Project Structure</h6>
              <pre className="bg-light p-3 rounded small">
                <code>{`creative-tales/
├── public/
│   ├── images/                # Gallery images (64+)
│   ├── Product_images/        # Product images (14+)
│   └── index.html
├── src/
│   ├── Components/            # Reusable UI components (NavBar, Footer, Cards, GalleryItem...)
│   ├── Pages/                 # HomePage, GalleryPage, AboutUsPage, ContactPage, ReviewsPage
│   ├── Carousel/              # Hero carousel (Swiper)
│   ├── App.js
│   └── index.js
└── package.json`}</code>
              </pre>

              <hr />

              {/* Contributors / Credits */}
              <h6 className="fw-bold">👥 Contributors & Credits</h6>
              <p>
                Developed by <strong>Stellar</strong> — a freelance team: Divyansh, Elizaveta
                Lazareva, and Rohit Thakur. Artistic work & photos by <strong>Ritika Sood</strong>.
              </p>

              <p>
                Special thanks: Unsplash (backgrounds), Bootstrap community, Framer Motion team,
                Swiper.js contributors.
              </p>

              <hr />

              {/* License / Contact */}
              <h6 className="fw-bold">📄 License & Contact</h6>
              <p>
                This project was developed as freelance work for Creative Tales. All artwork and
                images belong to Ritika Sood. The codebase is intended for educational and portfolio use.
              </p>

              <p>
                Visit the live site or reach out for commissions — Instagram:{" "}
                <a
                  href="https://instagram.com/creative.tales2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @creative.tales2
                </a>
              </p>

              <hr />

              {/* Misc: Hosted link, test users (if needed) */}
              <h6 className="fw-bold">🌐 Hosted / Demo & Test Users</h6>
              <p>URL: Hosted / demo link (replaced with live URL when available).</p>


            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCreativeTales
