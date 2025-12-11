import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-text">
          <h2>About Our Mission</h2>
          <p>
            We are dedicated to promoting responsible e-waste recycling and
            encouraging a cleaner, greener environment through awareness and
            accessibility.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/recycling-earth-3d-icon-download-in-png-blend-fbx-gltf-file-formats--save-the-planet-ecology-environmental-conservation-pack-icons-10255086.png"
            alt="Eco Illustration"
          />
        </div>
      </motion.div>
    </section>
  );
}
