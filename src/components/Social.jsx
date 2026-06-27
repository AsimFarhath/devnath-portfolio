import { motion } from "framer-motion";

import social1 from "../assets/social/social1.jpg";
import social2 from "../assets/social/social2.jpg";
import social3 from "../assets/social/social3.jpg";
import social4 from "../assets/social/social4.jpg";
import SocialHero from "./SocialHero";

const socials = [

{
title:"Mascaro Construction",
category:"Instagram Campaign",
image:social1
},

{
title:"Winmaxi Holidays",
category:"Travel Promotion",
image:social2
},

{
title:"Lofty Lifts",
category:"Social Media Kit",
image:social3
},

{
title:"Dhampur Bio Organics",
category:"Brand Awareness",
image:social4
}

];

export default function Social(){

return(

<section className="social-page" id="social">
    <SocialHero/>

<div className="social-title">

<p>CREATIVE CAMPAIGNS</p>

<h2>Social Media</h2>

</div>

<div className="social-grid">

{socials.map((item,index)=>(

<motion.div

key={index}

className="social-card"

initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.7,
delay:index*.1
}}

whileHover={{
y:-10
}}

viewport={{
once:true
}}

>

<div className="social-image">

<img
src={item.image}
alt={item.title}
/>

</div>

<div className="social-content">

<h3>

{item.title}

</h3>

<span>

{item.category}

</span>

</div>

</motion.div>

))}

</div>

</section>

)

}