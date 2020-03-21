import React from 'react' 

export const Destination = ({destination, setDestination}) => {
    return (
        <label className = "destination-label">
          <h2>Where would you like to go? </h2>
          <select
            onChange= {event => setDestination(event.target.value)}
            value={destination} 
            required
          >
              <option value= "">Select Destination</option>
              <option value= "borabora">Bora-bora</option>
              <option value= "maldives">Maldives</option>
              <option value= "caribbean">Caribbean</option>
              <option value= "india">India</option>
          </select>
        </label>
    )
}