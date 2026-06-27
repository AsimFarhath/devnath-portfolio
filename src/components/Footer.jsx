import {
FaInstagram,
FaBehance,
FaWhatsapp
} from "react-icons/fa";

export default function Footer(){

return(

<footer className="footer">

<div className="footer-content">

<h2>

DEVNATH

</h2>

<p>

Graphic Designer • Branding • Packaging • Social Media

</p>

<div className="footer-socials">

<a

href="https://instagram.com/devnath.designs"

target="_blank"

>

<FaInstagram/>

</a>

<a

href="https://behance.net/devnath"

target="_blank"

>

<FaBehance/>

</a>

<a

href="https://wa.me/918754969506"

target="_blank"

>

<FaWhatsapp/>

</a>



</div>

</div>


<div className="footer-bottom">

<p>

© 2026 Devnath. All Rights Reserved.

</p>

</div>

</footer>

)

}