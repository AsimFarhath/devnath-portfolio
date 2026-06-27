
import { motion } from "framer-motion";
import { useState } from "react";

import BrandingHero from "./BrandingHero";

import mascaro from "../assets/branding/mascaro.png";
import winmaxi from "../assets/branding/winmaxi.png";
import lofty from "../assets/branding/lofty.png";
import dhampur from "../assets/branding/dhampur.png";
import dripzo from "../assets/branding/dripzo.png";

const brands = [

{
title:"MASCARO",
subtitle:"Construction",
year:"2025",
image:mascaro,

description:
"This logo combines a building structure with the letter 'M' to create a strong and meaningful brand identity. The building element represents strength, stability, growth, and the company’s connection to construction and development. The 'M' reflects the company’s name, making the logo unique and easy to recognize. Its clean and modern design conveys professionalism, reliability, and a forward-thinking approach. Overall, the logo symbolizes a commitment to quality, trust, and continuous growth in the industry."
},

{
title:"WINMAXI",
subtitle:"Holidays & Travels",
year:"2025",
image:winmaxi,

description:
"The rounded and smooth lettering reflects a friendly, comfortable, and stress-free travel experience. Its clean and modern appearance makes the brand feel approachable, reliable, and easy to trust. The arrow integrated within the letterform symbolizes movement, direction, and continuous travel. It represents exploration, new destinations, and the excitement of moving forward."
},

{
title:"LOFTY",
subtitle:"Lifts",
year:"2026",
image:lofty,

description:
"Logo represents a lift’s up and down movement, combining simplicity with smart vertical transport. Lofty Lifts offers a wide range of products including automatic passenger lifts, stainless steel hospital elevators, stretcher lifts, and capsule lifts."
},

{
title:"DHAMPUR",
subtitle:"Bio Organics",
year:"2026",
image:dhampur,

description:
"Dhampur Bio Organics Limited is an integrated agri-based company with decades of experience in sugarcane processing. The company has expanded into value-added food products, ethanol, biofuels, and renewable energy."
},

{
title:"DRIPZO",
subtitle:"Outfits",
year:"2026",
image:dripzo,

description:
"Dripzo is a modern clothing brand that creates stylish, comfortable, and high-quality outfits. Its comic-inspired identity reflects creativity, confidence, and youthful energy."
}

];

export default function Branding(){

const [expanded,setExpanded]=useState({});

return(

<section id="branding">

<BrandingHero/>

<div className="branding-projects">

{brands.map((brand,index)=>(

<motion.div

key={index}

className={`branding-card ${
index % 2 === 1 ? "reverse" : ""
}`}

initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.7
}}

viewport={{
once:true
}}

>

<div className="branding-content">

<h2>

{brand.title}

</h2>

<h4>

{brand.subtitle}

</h4>

<p className="brand-description">

{

expanded[index]

?

brand.description

:

`${brand.description.slice(0,180)}...`

}

</p>

<button

className="read-more"

onClick={()=>

setExpanded(prev=>({

...prev,

[index]:!prev[index]

}))

}

>

{

expanded[index]

?

"Show Less"

:

"Read More"

}

</button>

<h5>

Year : {brand.year}

</h5>

</div>


<div className="branding-image">

<img

src={brand.image}

alt={brand.title}

/>

</div>

</motion.div>

))}

</div>

</section>

)

}