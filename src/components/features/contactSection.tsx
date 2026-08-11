import { SubmitButton } from "@/assets/submitbutton"

export function ContactSection(){ 
    const input = "shadow-[0_0_15px] pl-2 border border-gray-300 p-2 rounded-md w-50 sm:w-100 -ml-9 sm:ml-0 outline-none focus:ring-2 focus:ring-blue-400"
    return( 
        <> 
        <div className="flex justify-center mt-4 pb-20 ">
        <div className="contact-an  shadow-[0_0_30px] rounded-lg w-full max-w-[0px] h-[560px] flex justify-center
        sm:max-w-[630px]">
            <div className="flex flex-col gap-10"> 
            <h1 className=" text-3xl
            sm:text-4xl
            font-bold
            text-blue-700
            blink
            text-shadow-[0_0_10px_rgba(0,0,0,0.5)] mt-5 sm:ml-30 ml-0"> CONTACT</h1>
            
           <form className="flex flex-col gap-10"> 
            <input type="text"
            placeholder="First Name" 
            className={input}/>
              
                        <input type="text"
            placeholder="Last Name" 
            className={input}/>

            <input type="text"
            placeholder="Email Address" 
            className={input}/>

               <textarea
            placeholder="Your Message"
            rows={4}
            className={input}
          />
          <SubmitButton buttontext="Submit"/>
          

           </form>
           </div>
        </div>
        </div>
         </>
    )
} 