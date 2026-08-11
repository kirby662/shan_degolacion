interface Props { 
    color:string 
    buttontext:string
    onClick?: ()=> void
}

export function Button({color,buttontext,onClick}:Props){ 
return( 
    <button className={`sm:w-20 w-30 h-10 rounded-md 
        hover:shadow-[2px_7px_20px] 
        hover:bg-blue-500
        transition 
        duration-200 
        cursor-pointer 
        hover:-translate-y-2 
        shadow-[0_4px_15px] ${color}`}
        onClick={onClick}>{buttontext}</button>

)
}
