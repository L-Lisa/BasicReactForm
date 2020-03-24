import React from "react"


export const Name = ({name, setName,}) => {
    return (
        <label className="name-label">
        <h2>Name as written in the passport:</h2>
          <input
            type="text"
            value={name}
            onChange={event => setName (event.target.value)}
            required
          />
        </label> 
    ) 
}
