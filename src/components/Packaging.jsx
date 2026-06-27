import PackagingHero from "./PackagingHero";

import dhampurPackaging from "../assets/packaging/dhampur-packaging.png";

const packages = [
{
title:"DHAMPUR",
subtitle:"Product Packaging",
year:"2026",
image:dhampurPackaging,

description:
"A modern packaging collection designed for Dhampur Bio Organics featuring multiple sugar variants including Jaggery Powder, Bura Sugar, Breakfast Sugar, Golden Brown Sugar and Icing Sugar."
}
];

export default function Packaging(){

return(

<section id="packaging">

<PackagingHero/>    

<div className="packaging-projects">

{packages.map((item,index)=>(

<div className="packaging-card" key={index}>

<div className="packaging-content">

<h2>{item.title}</h2>

<h4>{item.subtitle}</h4>

<p>{item.description}</p>

<h5>Year : {item.year}</h5>

</div>

<div className="packaging-image">

<img
src={item.image}
alt={item.title}
/>

</div>

</div>

))}

</div>

</section>

)

}