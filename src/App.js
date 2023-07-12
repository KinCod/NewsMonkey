import "./App.css";
import Navbar from "./Components/Navbar"; //idhar navbar khud import ho gya jaise hi maine component ka tag bnaya
import Form from "./Components/Form";
import { useState } from "react";
import Alrt from "./Components/Alrt";
import Bg from "./Components/Bg";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

//component -  basically html code hi hai jo mai main page pe import kra rha hu so that main code mai hoch poch na ho jaaye
//props - ye vo apni marzi se modification hai jo mai main html k through apne components mai kar skta hu!!

function App() {
  //pehle objects use hote the ab function use hote hai so easily return kardo JSX

  const [mode, newmode] = useState("white");
  const [open, setOpen] = useState(false); //for opening the alert
  const [alertt,setAlertt] = useState(null);

    let dark = "brown-500";

  const change = () => {
    if (mode === "white") {
      newmode(dark);
      document.body.style.backgroundColor = "#1E1C1C";
      document.body.style.transitionDuration = "600ms";
      funcall( dark + " bg","success");
      
    } else {
      newmode("white");
      document.body.style.backgroundColor = "#FFFAF0";
      funcall("white bg","success");
      
    }
  };

  const funcall = (msg,suc)=>{
      setOpen(true);
      setAlertt({
        message:msg,
        success:suc
      })
      setTimeout(() => {
          setOpen(false);
          
    }, 1000);
  }

  return (
    //niche likha saara hi JSX hai jo HTML hi hai basically jisne JS ka mukut pehen rkha hai
    <>
    <Router>
      <div className="w-full">
      
        <Navbar title="My Web" mode={mode} toggle={change} color={dark}/>
        <Alrt alert={alertt} open={open}/>
        {/* <div className="m-auto w-1/4 mt-10" ><Form heading="Convert to UPPERCASE" call={funcall} color={mode} now={dark}/></div> */}

        <Routes>
          {/* <Route path="/about">
              <Bg/>
          </Route> */}

          <Route exact path="/about" element={<Bg/>}/>

          <Route exact path="/" element={<div className="m-auto w-1/4 mt-10" ><Form heading="Convert to UPPERCASE" call={funcall} color={mode} now={dark}/></div>} />
        
          <Route exact path="/services" element={<div className="m-auto w-1/4 mt-10" ><Form heading="Convert to UPPERCASE" call={funcall} color={mode} now={dark}/></div>}/>
        </Routes>
        

        
    </div>
    </Router>
    </>
  );
}

export default App; //toh by default app ko jaana hi hoga

//agar kuch by default export nahi ho rha hai tab curly braces ka use krna
// for eg export {a}; export {b};
// ab import App,{a,b} from "./App.js";  //isse apna import ho jayega for stuff jo by default export nahi ho rha hai
