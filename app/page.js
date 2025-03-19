'use client'
import Image from "next/image";
import { useState } from "react";


export default function Home() {

  const name = "Ayman"
 

  const [isVisible, setIsVisible] = useState(true)

  const handleClick = (e) => {
    
    setIsVisible(!isVisible)
  }

  const cards =  isVisible && (
    <>
      <Card>
        This is being passed from the parent
      </Card>

      <Card>
        <Card>
          A card inside another card component G
        </Card>
      </Card>
    </>
)
    

  return (
   <>
   <ul className="p-20 space-y-4">
 
   <li>{name}</li>
      
  
   </ul>
    {cards}

    {/* Button */}
    <button  onClick={handleClick}>
      {isVisible ? "Hide" : "Show"}
    </button>

   </>
  );
}

function Card ({children}) {
  return (
    <div className="border rounded-md border-gray-600 p-4">
      {children}
    </div>
  )
}