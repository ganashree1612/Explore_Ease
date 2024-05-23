import React, { useState,useEffect } from "react";
import Funparksitems from "./funparksitems";
import Funparks from "./funparks";
import Tabfun from "./tabfun";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
// import { animateScroll as scroll } from "react-scroll";
import ReviewPage from "../Review";
const Galleryfunparks = () => {
  const [items, setItems] = useState(Funparks);
  const [locations, setLocations] = useState([
    ...new Set(Funparks.map((item) => item.location)),
    "All",
  ]);
  const [prices, setPrices] = useState([
    ...new Set(Funparks.map((item) => item.price)),
    "All",
  ]);
  const [selectedItemName, setSelectedItemName] = useState();
  const filterItems = (selectedLocation, selectedPrice) => {
    if (selectedLocation === "All" && selectedPrice === "All") {
      setItems(Funparks);
    } else {
      const updatedItems = Funparks.filter((curElem) => {
        return (
          (selectedLocation === "All" ||
            curElem.location === selectedLocation) &&
          (selectedPrice === "All" || curElem.price === selectedPrice)
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
        <h2>Filter by Location:</h2>
        <Tabfun
          category={locations}
          filterItem={(selectedLocation) =>
            filterItems(selectedLocation, "All")
          }
        />
        <h2>Filter by Price:</h2>
        <Tabfun
          category={prices}
          filterItem={(selectedPrice) => filterItems("All", selectedPrice)}
        />
      </div>
      <hr />
      {/* Main items section */}
      <Funparksitems items={items} handleItemClick={handleItemClick} />
      {selectedItemName && <ReviewPage placeId={selectedItemName} />}
    </>
  );
};

export default Galleryfunparks;
