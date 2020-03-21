import React from "react"

export const Summary = ({name, destination,stay}) => {
   return ( 
      <div>
       <h2>{name} you are heading to {destination} for {stay}. Your driver will take you to the airport at 1PM tomorrow. Bring sunscreen!</h2>
      </div>
   )
}

