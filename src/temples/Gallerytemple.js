import React, { useState,useEffect } from 'react';
import Templesitems from './templesitem';
import Tab from './tabtemples';
import '../App.css';
import { Link } from "react-router-dom";
import temples from './temples';
import axios from "axios";
// import { animateScroll as scroll } from "react-scroll";
import ReviewPage from "../Review";
const Gallerytemple = () => {
  const [items, setItems] = useState(temples);
  const [name, setname] = useState([...new Set(temples.map((item) => item.name)), 'All']);
  const [selectedItemName, setSelectedItemName] = useState();
  const filterItems = (selectedname, selectedPrice) => {
    if (selectedname === 'All' ) {
      setItems(temples);
    } else {
      const updatedItems = temples.filter((curElem) => {
        return (
          (selectedname === 'All' || curElem.name === selectedname)
        );
      });

      setItems(updatedItems);
    }
  };
 const handleItemClick = async (itemName) => {
   const name = itemName;

   const result = await axios.post("http://localhost:3001/Places", { name });
   const selectedItemName = name;

   // Log the entire result.data object
   // console.log("Result:", result.data);
   console.log("Selected item name:", selectedItemName);

   // Update the state with the selected item name
   setSelectedItemName(selectedItemName);
  };
  useEffect(() => {
    // Log inside the useEffect to capture changes to selectedItemName
    console.log("Selected item name:", selectedItemName);
  }, [selectedItemName]);

  return (
    <>
      <nav class="bg-red-300 py-2 text-red-600 flex ">
        <ul class="flex" id="top">
          <Link
            to="/Home"
            className="mx-2 cursor-pointer hover:text-green-700 font-serif"
          >
            <button className="bg-[#D63484] w-[75px] rounded mt-2 text-white hover:bg-[#402B3A] cursor-pointer">
              Home
            </button>
          </Link>
          <Link
            to="/About"
            className="mx-2 cursor-pointer hover:text-green-700 font-serif"
          >
            <button className="bg-[#D63484] w-[75px] rounded mt-2 text-white hover:bg-[#402B3A] cursor-pointer">
              About
            </button>
          </Link>
          <Link
            to="/Login"
            className="mx-2 cursor-pointer  hover:text-green-700 font-serif"
          >
            <button className="bg-[#D63484] w-[75px] rounded mt-2 text-white hover:bg-[#402B3A] cursor-pointer">
              Login
            </button>
          </Link>
          <span className="mx-[400px] text-3xl font-serif font-bold">
            Explore Ease
          </span>
        </ul>
      </nav>
      <h1 className="mt-5 text-center text-3xl font-serif font-bold main-heading">
        Select your favorite place
      </h1>
      <hr />
      <div className="ml-4 text-1xl font-serif font-bold">
        <h2>Filter by name:</h2>
        <Tab
          category={name}
          filterItem={(selectedname) => filterItems(selectedname, "All")}
        />
      </div>
      <hr />
      {/* Main items section */}
      <Templesitems items={items} handleItemClick={handleItemClick} />
      {selectedItemName && <ReviewPage placeId={selectedItemName} />}
    </>
  );
};

export default Gallerytemple;