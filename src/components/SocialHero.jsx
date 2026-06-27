import { motion } from "framer-motion";

export default function SocialHero() {

return (

<section className="social-hero">

<motion.h1

initial={{opacity:0,scale:.9}}

whileInView={{opacity:1,scale:1}}

transition={{duration:.8}}

viewport={{once:true}}

>

SOCIAL MEDIA

</motion.h1>

<motion.h2

initial={{opacity:0,y:30}}

whileInView={{opacity:1,y:0}}

transition={{
delay:.2,
duration:.8
}}

viewport={{once:true}}

>

SOCIAL MEDIA

</motion.h2>

<motion.span

initial={{opacity:0}}

whileInView={{opacity:1}}

transition={{
delay:.5
}}

viewport={{once:true}}

>

Posters

</motion.span>

</section>

)

}