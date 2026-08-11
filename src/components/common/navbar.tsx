import {Link} from "react-router-dom";

export function Navbar(){ 
    const linkStyle = " w-18 hover:bg-blue-500 hover:rounded hover:w-20 shadow-lg shadow-gray-500/50 hover:shadow-lg hover:shadow-[0_0_20px] hover:text-gray-200 transition-all duration-300" 
  
    const links = [
        {name: "home", path:"/"},
        {name:"about", path:"/about"},
        {name:"contact", path:"/contact"}
    ];
    return( 
        <> 
       
        <div className=" w-90% sm:w-full shadow-[0_0_20px] h-16 bg-[linear-gradient(-20deg,#274DF5,#27EEF5,#076969)] bg-[length:200%_200%] animate-[gradient_2s_ease_infinite"> 
     <div className="mr-20 flex gap-8 justify-end  "> 
        {links.map((l)=>( 
            <Link 
            key={l.path}
            to={l.path} className={`
             mt-3  text-gray text-xl p-1 rounded 
             ${linkStyle}`}>
                
                {l.name} </Link>

        ))}
        </div>
     
     
     
        </div>
         </>
    )
}