import React,{useState} from "react";

export default function Form(props) {
    const[text,setText] = useState('Write here');   //hmare pass ek text hai jiski value humne de rkhi hai and ye setText ek aisa func hai jo
                                            //hum use krnge to change the value of text
   
    const[count,setCount] = useState('click on the button');

    const func = ()=>{
        let New  = text.toUpperCase();
        setText(New);
    
        setTimeout(() => {
        New = text.toLowerCase();
        setText(New);
        }, 2000);

        props.call("Converted to UPPERCASE","success");
    }

    const vow = ()=>{
        let vowels=0;
        for(let i=0;i<text.length;i++){
            let b= text.charAt(i);
            if(b=='a' || b=='e' || b=='i' || b=='o' || b=='u'){vowels++;setCount(vowels);}
        }
        
        setCount(vowels);
    }

    const change = (event)=>{
        setText(event.target.value);
    }

   
    let charnum = text.length;
    let words = (charnum === 0? 0 :text.split(" ").length);
    let charnum1  = text.length - ((text.split(" ").length)-1);
    
  return (
    <div className='form'>
        <form className="max-w-sm text-center">
            <h1 className={`mx-auto mb-3 font-semibold bg-blue-400 text-lg border-black border-2 w-fit px-2 rounded text-center`}>{props.heading}</h1>
            <textarea name="" className='rounded-md bg-gray-300 border-black border-2 p-4' onChange={change} id="" cols="30" rows="10" value={text}></textarea>
            <div className="text-center"><input type="button" value="CLICK" onClick={func} className="bg-blue-500 py-2 px-3 rounded text-white cursor-pointer hover:bg-blue-600 active:bg-blue-700" /></div>
            </form><br/>
        <div className={`word text-center text-${props.color==='white'?props.now: 'white' }`}>
            <p>Number of words : {words}</p>
            <p>Number of chars : {charnum} (Includes Spaces)</p>
            <p>Number of chars : {charnum1} (Excludes Spaces)</p>
            
            <div>
            <h2>Total Vowels : {count}</h2><br/>
            <input type="button" value="Vowels" onClick={vow} className="bg-blue-500 py-2 px-3 rounded text-white cursor-pointer hover:bg-blue-600 active:bg-blue-700" />
            </div>
        </div>
    </div>
  )
}
