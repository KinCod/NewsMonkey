import React from "react";
import Proptypes from "prop-types";
import { Switch } from "@material-tailwind/react";
import { Link } from "react-router-dom";


//component ko hum directly apni JSX mai use kar skte hai so raita vahan failane se accha hai
// ki har component ko alag alag bnao and phir as a tag udhar use karlo

export default function Navbar(props) {
  //idhar ab props(properties hum apne hisab se rakh skte jaise title marzi ka rkhna ho directly from app.js)
  //niche dekhle main {props k andar title declare kar dia ab iss title word ka use krke mai apne hisab se change kar skta}

  const capital = (word) => {
    let str = word.toLowerCase(); //sabko lowercase kardia
    return str.charAt(0).toUpperCase() + str.slice(1); //pehla letter(0th index)capital and 1st letter k baad ka slice karke likh dega
  };

  const remdigit = (word)=>{
    let str = word.replace(/[0-9]/g,'');  //' / / - ye slashes ka mtlb hai start and end of an expression',g mtlb global flag jitni baari no 0 se 9 tak aaenge humne unko replace krna hai vrna ek baari replace hone k baad phirse same no replace nahi hoga.. ,  ' , - comma k aage jo bhi likha hoga usse replace ho jayga sab jo bhi expression k andar range mai hai', ' [ ] - ye character class hai jismai humne chars ki range de rkhi hai jinko humne replace krna hai' 

    str = str.replace(/[^a-z A-z 0-9]/g,''); // idhar ' ^ - caret ' iska use kra hai which says {jo bhi mere aage hai uske alawa harr cheez pe method ka use karo} mtlb ab jo ranges de rkhi hai unke alawa sab replace honge {so basically ye !(not) operator jaisa kaam kar rha hai}
    return str; 
  }

  return (
    <div>
      <div className="nav ">
        <nav
          className={`bg-${props.mode} border-gray-200 dark:bg-gray-900 transition-all duration-500 `}
        >
          <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <span
                className={`self-center text-2xl font-semibold whitespace-nowrap text-${
                  props.mode === "white" ? props.color : "white"
                } transition-all duration-500`}
              >
                {props.title}
              </span>
            </a>
            <div className="flex md:order-2">
              <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
              >
                <span className="sr-only">Search</span>
              </button>
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-nav"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
              <button
                data-collapse-toggle="navbar-search"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-search"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>
              </button>
              <div className="ml-20 mr-5 mt-2">
                <Switch onClick={props.toggle} />
                <span className={`text-${props.mode === "white" ? props.color : "white"} ml-3`}>{`${capital(remdigit(props.mode))}`}</span> {/*capital template literal k andar isliye because vo bhi java script hai haha*/}
              </div>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-search"
            >
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
              <ul
                className={`flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-${props.mode} md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-${props.mode} dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 transition-all duration-500`}
              >
                <li>
                  <Link
                    to="/"
                    className={`block py-2 pl-3 pr-4 text-${
                      props.mode === "white" ? props.color : "white"
                    } transition-all duration-500 `}
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`block py-2 pl-3 pr-4 text-${
                      props.mode === "white" ? props.color : "white"
                    } transition-all duration-500 `}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className={`block py-2 pl-3 pr-4 text-${
                      props.mode === "white" ? props.color : "white"
                    }  transition-all duration-500`}
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  title: Proptypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title",
};
