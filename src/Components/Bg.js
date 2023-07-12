import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Bg(props) {

    const [myStyle,newStyle] = useState({
      color: 'white',
      backgroundColor: 'black'
    })

    

    const [open, setOpen] = useState(1);
 
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };

  return (
    <>
    <div className='container w-1/2 mx-auto mt-10'>
      <Fragment>
      <Accordion open={open === 1} style = {myStyle } className="rounded-md border-blue-500 border-4" >
        <AccordionHeader onClick={() => handleOpen(1)} style = {myStyle} className="p-5 rounded-md">
          What is Material Tailwind?
        </AccordionHeader>
        <AccordionBody style = {myStyle} className="rounded-md">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} style = {myStyle} className="rounded-md border-blue-500 border-l-4 border-r-4">
        <AccordionHeader onClick={() => handleOpen(2)} style = {myStyle} className="p-5 rounded-md">
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody style = {myStyle} className="rounded-md">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion >
      <Accordion open={open === 3} style = {myStyle} className="rounded-md border-blue-500 border-4">
        <AccordionHeader onClick={() => handleOpen(3)} style = {myStyle} className="p-5 rounded-md">
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody style = {myStyle} className="rounded-md">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </Fragment>
    </div>

    </> 
  )
}
