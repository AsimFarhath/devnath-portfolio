import { motion } from "framer-motion";

import poster1 from "../assets/posters/poster1.jpg";
import poster2 from "../assets/posters/poster2.jpg";
import poster3 from "../assets/posters/poster3.jpg";
import poster4 from "../assets/posters/poster4.jpg";
import PostersHero from "./PostersHero";

const posters=[

{
title:"Dhampur Campaign",
category:"Organic Product Posters",
image:poster1
},

{
title:"Lofty Campaign",
category:"Lift Advertisement Posters",
image:poster2
},

{
title:"Winmaxi Campaign",
category:"Travel Posters",
image:poster3
},

{
title:"Mascaro Campaign",
category:"Construction Posters",
image:poster4
}

]

export default function Posters(){

return(

<section
className="poster-page"
id="posters"
>
    <PostersHero/>

<div className="poster-title">

<p>CREATIVE ADVERTISING</p>

<h2>Poster Designs</h2>

</div>

<div className="poster-grid">

{posters.map((poster,index)=>(

<motion.div

key={index}

className="poster-card"

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
y:-8
}}

viewport={{
once:true
}}

>

<img

src={poster.image}

alt={poster.title}

/>

<div className="poster-content">

<h3>

{poster.title}

</h3>

<p>

{poster.category}

</p>

</div>

</motion.div>

))}

</div>

</section>

)

}