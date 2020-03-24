import React, {useState} from 'react';
import {FooterImage} from "./FooterImage.js";
import beachfooter from "./beachfooter.jpg";
import { Summary } from 'Summary.js';
import { Name} from 'Name';
import { Destination } from 'Destination.js';
import {Stay} from 'Stay';


export const App = () => {
const [name, setName] = useState("");
const [destination, setDestination] = useState(" ");
const [stay, setStay] = useState(" ");
const stayLength =["   1 week", "   3 weeks", "   12 weeks"];
const [showSummary, setShowSummary] = useState(false);
const [section, setSection] = useState ("firstQuestion");


const handleSubmit = event => {
  event.preventDefault();
  setShowSummary(true);
  };

  return (
    <div className="form-div">

  {!showSummary ? (
  
   <form onSubmit={handleSubmit}>
     {section === "firstQuestion" && (
      <div className="section">
       
        <h1>TRAVEL MADE EASY</h1>
        <p className="intro-txt">Tell us where you would like to go, answer 3 questions and let us take care of the rest.</p>
        <Name name={name} setName={setName} section={section} setSection={setSection} />

        <button className="submit-button" type="submit"  disabled={name === ""}  
          onClick={event => setSection ("destination")}
        >Submit</button>
       
      </div>
       )}

    {section === "destination" && (
      <div className="section">
        <Destination destination={destination}setDestination={setDestination}/>
        <button type="submit"  disabled= {destination === " "}  
        onClick={event => setSection ("stay")} className="submit-button"
        >Submit</button>
      </div>
    )}
    {section === "stay" && (
      <div className="section">
        <Stay stay={stay} setStay={setStay} stayLength={stayLength}/>
        <button type="submit" className="submit-button" disabled={stay === " "}  
        onClick={event => setSection ("submit")}
        >Submit</button>
      </div>
      )}
    {section === "submit" && (
      <div className="section">
        <button type="submit" className="submit-button" disabled={name === "" || destination=== "" || stay === ""}>Get travel plan!</button>
      </div>
      )}
      </form>

         ) : (

      <>
         <Summary name= {name} destination={destination}stay={stay}/>
         <footer>
           <FooterImage yourimage={beachfooter}/>
         </footer>
      </>
      )}
  </div> 
  )
}

