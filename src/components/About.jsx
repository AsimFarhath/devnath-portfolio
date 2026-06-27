import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import photoshop from "../assets/tools/photoshop.jpg";
import illustrator from "../assets/tools/illustrator.jpg";
import lightroom from "../assets/tools/lightroom.jpg";
import coreldraw from "../assets/tools/coreldraw.png";
import { FiPhone, FiMail } from "react-icons/fi";
export default function About() {
  return (
    <section className="about" id="about">

      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={profile} alt="Devnath" />
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h4 className="section-tag">ABOUT ME</h4>
        <h2>Hi, I'm Devnath</h2>

        <h3>Graphic Designer</h3>

        <p>
          A passionate Graphic Designer who transforms
          ideas into impactful visual experiences.
          I specialize in creating clean, creative,
          and meaningful designs that communicate
          effectively.
        </p>
        <h4 className="tools-title">DESIGNING TOOLS</h4>
        <div className="tools">

  <div className="tool-item">
    <img src={photoshop} alt="Photoshop" />
    <div className="tooltip">Adobe Photoshop</div>
  </div>

  <div className="tool-item">
    <img src={illustrator} alt="Illustrator" />
    <div className="tooltip">Adobe Illustrator</div>
  </div>

  <div className="tool-item">
    <img src={lightroom} alt="Lightroom" />
    <div className="tooltip">Adobe Lightroom</div>
  </div>
  

  <div className="tool-item">
    <img
  src={coreldraw}
  alt="CorelDRAW"
  className="corel-logo"
/>
    <div className="tooltip">CorelDRAW</div>
  </div>

</div>
<div className="contact-info">

  <a
    href="tel:+918754969506"
    className="contact-item"
  >
    <FiPhone />
    <span>+91 8754969506</span>
  </a>

  <a
    href="mailto:dev353657@email.com"
    className="contact-item"
  >
    <FiMail />
    <span>dev353657@gmail.com</span>
  </a>

</div>
      </motion.div>

    </section>
  );
}