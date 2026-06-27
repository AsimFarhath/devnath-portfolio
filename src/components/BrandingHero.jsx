import { motion } from "framer-motion";

export default function BrandingHero(){

return(

<section className="branding-hero">

<motion.h1

initial={{
opacity:0,
scale:.9
}}

whileInView={{
opacity:1,
scale:1
}}

transition={{
duration:.8
}}

viewport={{once:true}}

>

BRANDING

</motion.h1>

<motion.h2

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:.2,
duration:.8
}}

viewport={{once:true}}

>

BRANDING

</motion.h2>

</section>

)

}

