import React from "react";

export const Progress =({ percentage }) => {
  return (
   <div className="progress-bar">
      <Filler percentage={percentage} />
  </div>
  );
 }
    
  function Filler({ percentage }) {
  return <div className="filler" style={{ width: `${percentage}%` }} />;
}