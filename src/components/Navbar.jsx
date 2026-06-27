import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

const [open,setOpen]=useState(false);

return(

<nav className="navbar">

<h2 className="brand">Devnath</h2>

<div
className="menu-btn"
onClick={()=>setOpen(!open)}
>
{open ? <FaTimes/> : <FaBars/>}
</div>

<ul className={open ? "nav-links active" : "nav-links"}>

<li>
<a href="#about" onClick={() => setOpen(false)}>
About
</a>
</li>

<li>
<a href="#logo" onClick={() => setOpen(false)}>
Logo
</a>
</li>

<li>
<a href="#branding" onClick={() => setOpen(false)}>
Branding
</a>
</li>

<li>
<a href="#social" onClick={() => setOpen(false)}>
Social
</a>
</li>

<li>
<a href="#posters" onClick={() => setOpen(false)}>
Posters
</a>
</li>

<li>
<a href="#packaging" onClick={() => setOpen(false)}>
Packaging
</a>
</li>

<li>
<a href="#contact" onClick={() => setOpen(false)}>
Contact
</a>
</li>

</ul>

</nav>

)

}