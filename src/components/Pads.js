import React from "react";
import Pad from "./Pad";
import {bank1} from "./App"


function Pads({power}) {
    const keypadCode = Object.keys(bank1);
    const[audioName,setAudioName]=useState(null);


    const playSound = e => {
        setAudioNAme(e.Name);
    }


    return (
      <div id='div-pads'>
        {keypadCode.map((pad, idx) => {
          //console.log(pad + idx)
          return (
            <Pad
              id={pad+idx}
              key={pad+idx}
              handleClick={playSound}
              element={pad} />
                  power={power}
          );
        })}
        <div id='display'> Show the name of current audio here </div>  
      </div>
    )
  }

  export default Pads ; 
