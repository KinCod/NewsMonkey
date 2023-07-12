import React from 'react';
import { useState, Fragment } from "react";
import { Alert} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline"

function Alrt(props) {
  

  const capital = (word)=>{
    let str = word.toLowerCase();        //sabko lowercase kardia
    return str.charAt(0).toUpperCase() + str.slice(1);     //pehla letter(0th index)capital and 1st letter k baad ka slice karke likh dega
  }
  
  return (
    props.alert && <div className="flex w-full flex-col gap-2">  {/* AGar props.alert mai kuch value aa rhi hai tab hi aage ka kariay*/}
      
      <Alert
        open= {props.open}
        color={props.alert.success=== "success"? "green" : "red"}
        icon={
          <InformationCircleIcon
            strokeWidth={2}
            className="h-6 w-6"
          />
        }
      >
        {capital(props.alert.success)} : {capital(props.alert.message)}
      </Alert>
    </div>
    
  );
}

export default Alrt
