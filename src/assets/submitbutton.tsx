interface Props { 
    buttontext:string
}

export function SubmitButton({buttontext}:Props){ 
    return( 
        <button type="submit" className=" w-40 sm:w-20 h-10 rounded-md 
        hover:shadow-[2px_7px_20px] 
        hover:bg-blue-500
        transition 
        duration-200 
        cursor-pointer 
        hover:-translate-y-2 
        shadow-[0_4px_15px] 
        bg-gradient-to-r from-blue-300 to-blue-450 sm:ml-45 -ml-3"> {buttontext}</button>
    )
}