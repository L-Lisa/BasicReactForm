import React from 'react'

export const Stay = ({stay, setStay, stayLength})=> {
    return (
        <div className="radio-section">
        <h2>How long will you stay?</h2>
        
        {stayLength.map(length => (
           <label key={length} className="radio-label">
           <input className="radio-input"
            required
             type="radio"
             value={length}
             onChange={event => setStay(event.target.value)}
             checked = {stay === length}
           />
           {length}
        </label>  
        ))}
        </div>
    )
}