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

const handleSubmit = event => {
  event.preventDefault();
  setShowSummary(true);
  };

  return (
    <div className="form-div">

  {!showSummary ? (
  
   <form onSubmit={handleSubmit}>
     <section>
      <h1>TRAVEL MADE EASY</h1>
       <p className="intro-txt">Tell us where you would like to go and we will take care of the rest.</p>
    </section>

       <Name name={name} setName={setName}/>

      <Destination destination={destination}setDestination={setDestination}/>
 
      <Stay stay={stay} setStay={setStay} stayLength={stayLength}/>

      <button type="submit" className="submit-button"disabled={name === "" || destination=== "" || stay === ""}>Submit</button>
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

