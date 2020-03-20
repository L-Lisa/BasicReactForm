import React from "react"


export const Name = ({name, setName,}) => {
    return (
        <label className="name-label">
        <h2>Name:</h2>
          <input
            type="text"
            value={name}
            onChange={event => setName (event.target.value)}
            required
          />
        </label> 
    ) 
}
