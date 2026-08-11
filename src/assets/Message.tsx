import { ButtonText } from "./button";

interface Props { 
    card:string 
    description:string 
    text:string 
    color:string 
}
export function Message({card, description, text, color}:Props){ 
    return( 
        <> 
        <h1>{card}</h1>
        <p>{description}</p>
        <ButtonText text={text} color={color} />
        </>
    )
}