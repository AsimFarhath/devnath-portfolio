import { motion } from "framer-motion";
import {
FaPhoneAlt,
FaEnvelope,
FaInstagram,
FaBehance,
FaWhatsapp
} from "react-icons/fa";

export default function Contact(){

return(

<section className="contact-page" id="contact">

<div className="contact-title">

<p>GET IN TOUCH</p>

<h2>CONTACT</h2>

</div>

<motion.div

className="contact-content"

initial={{opacity:0,y:60}}

whileInView={{opacity:1,y:0}}

transition={{duration:.8}}

viewport={{once:true}}

>

<h3>Let's Create Something Amazing.</h3>

<p>

Need a logo, branding, posters, packaging
or social media designs?

Let's discuss your next project.

</p>

<div className="contact-list">

<a
href="tel:+918754969506"
className="contact-item"
>

<FaPhoneAlt/>
<span>+91 8754969506</span>

</a>


<a
href="mailto:dev353657@gmail.com"
className="contact-item"
>

<FaEnvelope/>
<span>dev353657@gmail.com</span>

</a>


<a
href="https://wa.me/918754969506"
target="_blank"
rel="noopener noreferrer"
className="contact-item"
>

<FaWhatsapp/>
<span>+91 8754969506</span>

</a>


<a
href="https://instagram.com/devnath.designs"
target="_blank"
rel="noopener noreferrer"
className="contact-item"
>

<FaInstagram/>
<span>@devnath.designs</span>

</a>


<a
href="https://behance.net/devnath"
target="_blank"
rel="noopener noreferrer"
className="contact-item"
>

<FaBehance/>
<span>behance.net/devnath</span>

</a>

</div>

</motion.div>

</section>

)

}