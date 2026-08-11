import { Navbar } from "@/components/common/navbar"
import {HomeSectiom} from "@/components/features/heroSection"
import { Footer } from "@/components/common/footer"

export default function Home(){ 
  return(
    <> 
    <Navbar /> 
    <HomeSectiom />
    <Footer />
    </>
  )
}