import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "@/components/pages/home";
import About from "@/components/pages/about";
import Contact from "@/components/pages/contact"

export default function App(){ 
  const routes = [ 
    {path:"/", element:<Home />}, 
    {path:"/about", element:<About />},
    {path:"/contact", element:<Contact />}
  ]
  return( 
    <BrowserRouter> 
    <Routes> 
      {routes.map((r)=>( 
<Route key={r.path} path={r.path}
 element={r.element}/>
      ))}
      
      
    </Routes>
    </BrowserRouter>
  )
}