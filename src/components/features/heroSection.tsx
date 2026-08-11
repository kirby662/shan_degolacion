import pf from "@src/components/images/pf.jpeg"
import instagram from "@src/components/images/instagram.svg"
import facebook from "@src/components/images/facebook.webp"
import tiktok from "@src/components/images/tiktok.png"
import { Button } from "@src/assets/button"

export  function HomeSectiom() {
  const imgdesign= `mt-1 text-5xl 
 bg-blue-300 p-1 
 w-17
 rounded-md 
 hover:w-22
 hover:shadow-[0_0_10px] transition-all 
 duration-250 
 hover:bg-blue-500 
 cursor-pointer 
 hover:-translate-y-1`
 
 const buttonAbt =()=>{ 
  window.location.href = "/about"
 }

  return (
    <> 

  

<div className="flex justify-center mt-20 md:ml-3 ">
 <div className="
 appear
  relative
  w-[450px]
  sm:w-[550px]
  md:w-[700px]
  lg:w-[900px]
  h-[630px]
  sm:h-[570px]
  md:h-[500px]
  lg:h-[500px]
  border-2
  border-gray-300
  rounded-xl
  shadow-2xl
  shadow-gray-800
">


  
     <img src={pf}className="picapp
absolute
  -top-16
    left-1/2
    -translate-x-1/2
    w-40
    h-40
    ml-0
    sm:w-40
    sm:h-40
    md:w-50
    md:h-50
    md:left-90
    md:translate-x-0
    md:ml-29
    rounded-full
    object-cover
    shadow-[0_0_50px_rgba(0,0,0)]
  "
/>
   

    
    <div className="pt-28 px-8 ">
      <h1 className="text-3xl font-bold blink text-blue-700 text-shadow-[0_0_10px_rgba(0,0,0,0.5)]">KIRBY TAJANLANGIT</h1>
      <p className="font-bold text-blue-500">BSIT 3-D</p>
      <p className="mt-10 text-lg my-8 ">Hello! I am <b>Kirby Tajanlangit</b>, a <b>BSIT 3-D</b> student from Cordova Public College (CPC). This is my first React portfolio project, created as a requirement for our subject under <b>Mr. Ariel Batoon</b>. I built this portfolio to practice my React skills and to showcase what I am learning in web development. I look forward to improving my knowledge and creating more projects in the future.
</p>
<div className="flex flex-row gap-8 picapp  ">
<div className={imgdesign}>
  <a 
   href="https://www.instagram.com/kulafopula?igsh=MW5pZXRldXk5NnZhdQ==">
  <img src={instagram} className="ml-3 w-8 my-1"/>
  </a>
</div>
 
<div className={imgdesign}>
  <a 
href="https://www.facebook.com/kirby.tajanlangit.2024">
  <img src={facebook} className="ml-2 w-10"/>
  </a>
</div>
 
<div className={imgdesign}>
  <a 
href="https://www.tiktok.com/@kirbytajanlangit">
  <img src={tiktok} className="ml-3 w-8 my-1"/>
  </a>
</div>


</div>
<div className="ml-78 mt-6 sm:mt-0 sm:ml-100 md:-mt-2 md:ml-130 lg:mt-0 lg:ml-170 ">
  <Button onClick={buttonAbt} color="bg-gradient-to-r from-blue-300 to-blue-450 " buttontext="About Me"/>
</div>

    </div>

  </div>
</div>

 
    </>
  );
}