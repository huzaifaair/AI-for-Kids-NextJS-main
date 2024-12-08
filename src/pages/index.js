import Navbar from "../Components/Navbar/Navbar";
import Hero from "@/Components/Hero/Hero";
import Contest from "@/Components/Contest/Contest";
import Signup from "@/Components/Signup/Signup";
import Courses from "@/Components/Courses/Courses";
import Competition from "@/Components/Competition/Competition";
import Partners from "@/Components/Partners/Partners";
import Prize from "@/Components/Prize/Prize";
import Faqs from "@/Components/Faqs/Faqs";
import Imagesection from "@/Components/imagesection/imagesection";



export default function Home() {
  return (
  <div>
    <Navbar/>
    <Hero/>
    <Contest/>
    <Signup/>
    <Courses/>
    <Competition/>
    <Partners/>
    <Prize/>
    <Faqs/>
    <Imagesection/>
  
  </div>
  );
}
