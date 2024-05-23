import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Component() {
  // State to store the selected activity
  const [selectedActivity, setSelectedActivity] = useState('');

  // Function to handle the click on an activity
  const handleActivityClick = async(activity) => {
    setSelectedActivity(activity);
    const name = activity;
    // const result = await axios.post('http://localhost:3001/Option', { name });
    // console.log(result);
  
    console.log('Selected activity:', activity);
  };

  return (
    <>
      <nav className="bg-red-300 py-2 text-red-600 flex">
        <ul className="flex" id="top">
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
            className="mx-2 cursor-pointer hover:text-green-700 font-serif"
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
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 md:p-6">
        {/* Food Section */}
        <div
          className="relative group overflow-hidden rounded-lg"
          onClick={() => handleActivityClick("Food")}
        >
          <Link className="absolute inset-0 z-10" to="/Optionsfood">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Food"
            className="object-cover w-full h-60"
            height={300}
            src="https://t4.ftcdn.net/jpg/02/84/46/89/360_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.jpg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">Food</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Savor an exquisite symphony of flavors at our gastronomic haven,
              where culinary artistry meets unparalleled taste sensations.
              <br />
              <br />
            </p>
          </div>
        </div>
        <div
          className="relative group overflow-hidden rounded-lg"
          onClick={() => handleActivityClick("Trek")}
        >
          <Link className="absolute inset-0 z-10" to="/Optionstrek">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Trek"
            className="object-cover w-full h-60"
            height={300}
            src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/Treks-In-The-World-cover_18th-Nov.jpg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">Trek</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Embark on an exhilarating journey into the heart of nature, where
              every step unveils breathtaking landscapes, rugged terrains, and
              the pure essence of adventure.
            </p>
          </div>
        </div>
        <div
          className="relative group overflow-hidden rounded-lg"
          onClick={() => handleActivityClick("Malls")}
        >
          <Link className="absolute inset-0 z-10" to="/Optionmalls">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Malls"
            className="object-cover w-full h-60"
            height={300}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1c0Kr8QazFFfKKFWhIG6LNqBqfZcF1tl7T2gMLeo0BtqYwiT8Xy7ERc0xNe4nIOYdZdM&usqp=CAU"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">Malls</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              indulge in a sophisticated shopping experience within the chic
              confines of our avant-garde malls, where luxury and lifestyle
              seamlessly converge.
            </p>
          </div>
        </div>
        <div
          className="relative group overflow-hidden rounded-lg"
          onClick={() => handleActivityClick("Funparks")}
        >
          <Link className="absolute inset-0 z-10" to="/Optionfunparks">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="fun-parks"
            className="object-cover w-full h-60"
            height={300}
            src="https://images.unsplash.com/photo-1505731110654-99d7f7f8e39c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtdXNlbWVudCUyMHBhcmt8ZW58MHx8MHx8fDA%3D"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">Fun-parks</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Unleash your inner thrill-seeker in our adrenaline-fueled fun
              parks, where excitement and laughter create lasting memories for
              the young and young at heart.
            </p>
          </div>
        </div>
        <div
          className="relative group overflow-hidden rounded-lg"
          onClick={() => handleActivityClick("Temples")}
        >
          <Link className="absolute inset-0 z-10" to="/Optiontemples">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Temples"
            className="object-cover w-full h-60"
            height={300}
            src="https://www.tripsavvy.com/thmb/NvU9PJnnZUdgXSwKnDXADEIosFk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-148507705-5bbdb47346e0fb00268ac950.jpg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">Temples</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Immerse yourself in the pulsating beats and electric atmosphere of
              our trendsetting clubs, where the night comes alive with rhythm
              and revelry
            </p>
          </div>
        </div>
        <div
          className="relative group overflow-hidden rounded-lg"
          onClick={() => handleActivityClick("Shopping")}
        >
          <Link className="absolute inset-0 z-10" to="/Optionshop">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Shopping"
            className="object-cover w-full h-60"
            height={300}
            src="https://superrlife.com/wp-content/uploads/2022/10/street-shoping.png"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">
              Shopping steets
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Embark on a retail journey , blending style and substance in a
              curated haven for discerning shoppers seeking the perfect blend of
              fashion, luxury, and unique finds."
            </p>
          </div>
        </div>
        {/* </select>  */}
      </section>
    </>
  );
}
