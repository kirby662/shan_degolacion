import { AboutSection } from "@/components/features/aboutSection";
import { Navbar } from "@/components/common/navbar";
import {Footer} from "@/components/common/footer"

export default function Home(){ 
  return( 
    <> 
    <Navbar />
    <AboutSection /> 
    <Footer />
    </>
  )
}