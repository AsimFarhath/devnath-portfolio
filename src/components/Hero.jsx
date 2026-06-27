import { motion } from "framer-motion";

export default function Hero() {

return (

<section className="hero">

<div className="hero-glow1"></div>
<div className="hero-glow2"></div>

<motion.div

className="hero-content"

initial={{ opacity: 0, y: 80 }}

animate={{ opacity: 1, y: 0 }}

transition={{
duration: 1.2,
ease: "easeOut"
}}

>

<span className="hero-outline">
DEVNATH
</span>

<h1>

TRANSFORMING IDEAS

<br />

INTO EYE CATCHING

</h1>

<p>

DESIGNS

</p>

<div className="hero-buttons">

<button>LOGO</button>

<button>BRANDING</button>

<button>POSTER</button>

<button>PACKAGE</button>

</div>

</motion.div>

</section>

);

}