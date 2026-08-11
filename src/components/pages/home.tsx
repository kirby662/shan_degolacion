import { Navbar } from "@src/components/common/navbar"
import {HomeSectiom} from "@src/components/features/heroSection"
import { Footer } from "@src/components/common/footer"

export default function Home(){ 
  return(
    <> 
    <Navbar /> 
    <HomeSectiom />
    <Footer />
    </>
  )
}