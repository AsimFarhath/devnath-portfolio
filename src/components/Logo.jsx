import { motion } from "framer-motion";

import logo1 from "../assets/logos/logo1.png";
import logo2 from "../assets/logos/logo2.png";
import logo3 from "../assets/logos/logo3.png";
import logo4 from "../assets/logos/logo4.png";
import logo5 from "../assets/logos/logo5.png";
import logo6 from "../assets/logos/logo6.png";

const logos = [
{
img: logo1,
name:"MASCARO",
type:"Construction"
},

{
img: logo2,
name:"LOFTY",
type:"Lifts"
},

{
img: logo3,
name:"Al Bustan",
type:"Restaurant"
},

{
img: logo4,
name:"Winmaxi",
type:"Fashion"
},

{
img: logo5,
name:"Dhampur",
type:"Organic"
},

{
img: logo6,
name:"Dripzo",
type:"Clothing"
}
];


const container = {

hidden:{},

show:{

transition:{

staggerChildren:0.12

}

}

};

const item = {

hidden:{

opacity:0,

y:40

},

show:{

opacity:1,

y:0,

transition:{

duration:0.6

}

}

};


export default function Logo(){

return(

<section className="logo-page" id="logo">

<motion.div

className="logo-title"

initial={{

opacity:0,

y:30

}}

whileInView={{

opacity:1,

y:0

}}

transition={{

duration:0.8

}}

viewport={{once:true}}

>

<p>SELECTED WORKS</p>

<h2>Logo Designs</h2>

</motion.div>


<motion.div

className="logo-grid"

variants={container}

initial="hidden"

whileInView="show"

viewport={{once:true}}

>

{logos.map((logo,index)=>(

<motion.div

key={index}

variants={item}

className="logo-card"

animate={{

y:[0,-5,0]

}}

transition={{

duration:4,

repeat:Infinity,

ease:"easeInOut",

delay:index*0.3

}}

whileHover={{

y:-10,

scale:1.03

}}

>

<motion.img

src={logo.img}

alt={logo.name}

whileHover={{

rotate:[0,-2,2,0],

scale:1.08

}}

transition={{

duration:0.5

}}

/>

<h4>{logo.name}</h4>

<p>{logo.type}</p>

</motion.div>

))}

</motion.div>

</section>

)

}