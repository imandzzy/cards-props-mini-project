import React from "react"
import Contact from "./Contact"

export default function App() {
    return (
        <div className="contacts">
           <Contact
               img = "./images/cat1.png"
               name = "Mr. Whiskerson"
               phone = "(212) 555-1234"
               email = "mr.whiskaz@catnap.com"
           />
           
           <Contact 
               img = "./images/cat2.png"
               name = "Flullykins"
               phone = "(212) 555-2234"
               email = "fluffy@catnap.com"
           /> 
           
           <Contact 
               img = "./images/cat3.png"
               name = "Felix"
               phone = "(212) 555-5513"
               email = "felix@catnap.com"
           />
           
           <Contact 
               img = "./images/cat4.png"
               name = "Pumpkin"
               phone = "(212) 555-3315"
               email = "pumpkinzz@catnap.com"
           />
           
           <Contact 
               img = "./images/cat5.png"
               name = "Bread"
               phone = "(212) 555-6124"
               email = "bread@catnap.com"
           />
        </div>  
    )
}