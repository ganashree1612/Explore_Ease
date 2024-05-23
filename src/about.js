import React from 'react';
import meimg from './me.jpg';
import dineshimg from './dinesh.jpg';
import harshimg from './harsh.jpg';
import hiteshimg from './hitesh.jpg'
import {Link} from "react-router-dom";
const TeamMember = ({ name, role, email, imageSrc }) => (
  <div className="w-1/4 mx-2">
    <div className="bg-white rounded-lg shadow-md p-4 h-80">
      <img src={imageSrc} alt={name} className="w-40 h-40 rounded-full mb-4 mx-auto" />
      <div className="text-center">
        <h2 className="text-l font-semibold">{name}</h2>
        <p className="text-gray-500">{role}</p>
        <p className="text-blue-500 text-xs">{email}</p>
      </div>
    </div>
  </div>
);

function About() {
    return (
      <div className="" style={{ overflow: "auto" }}>
        <nav
          className="px-2 py-2"
          style={{ background: "rgba(255, 155, 210, 0.1)", color: "#D63484" }}
        >
          <ul className="flex" id="top">
            <Link
              to="/Home"
              className="mx-2 cursor-pointer text-white hover:text-green-700 font-serif"
            >
              <button className="bg-[#D63484] w-[75px] rounded mt-2 text-white hover:bg-[#402B3A] cursor-pointer">
                Home
              </button>
            </Link>
            <Link
              to="/About"
              className="mx-2 cursor-pointer text-white hover:text-green-700 font-serif"
            >
              <button className="bg-[#D63484] w-[75px] rounded mt-2 text-white hover:bg-[#402B3A]  cursor-pointer">
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
            <span className="mx-[400px] text-4xl font-serif font-bold text-[#3C0753]">
              Explore Ease
            </span>
          </ul>
        </nav>
        {/* <div className="about-section bg-red-300 mx-0 mb-9 px-10 py-5">
            <h1 className="text-6xl text-black font-mono font-bold text-center">About Us </h1><br/>
            <h2 className="text-4xl text-black font-semibold font-serif text-center">
                ExploreEase - Your Ultimate Day Out Companion
            </h2><br/>
            <p className="text-2xl text-center text-white">
                Welcome to ExploreEase, the go-to website for individuals seeking the perfect day out experience. Whether you're a
                food enthusiast, a nature lover, a shopping fanatic, or a spiritual seeker, ExploreEase has you covered with
                personalized suggestions for an unforgettable day of exploration.
            </p>
        </div> */}
        <div
          className="about-section bg-cover bg-center mx-0 mb-9 px-10 py-5"
          style={{
            backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_LLTmUyOJj0qGKcARkAGQVoFD-YxW-Ym_xUz3DnVeg&s")`,
          }}
        >
          <h1 className="text-6xl text-black font-mono font-bold text-center">
            About Us{" "}
          </h1>
          <br />
          <h2 className="text-4xl text-black font-semibold font-serif text-center">
            ExploreEase - Your Ultimate Day Out Companion
          </h2>
          <br />
          <p className="text-2xl text-center text-white">
            Welcome to ExploreEase, the go-to website for individuals seeking
            the perfect day out experience. Whether you're a food enthusiast, a
            nature lover, a shopping fanatic, or a spiritual seeker, ExploreEase
            has you covered with personalized suggestions for an unforgettable
            day of exploration.
          </p>
        </div>
        <div className="container mx-auto px-10 mb-10 text-center items-center">
          <div
            className="mb-8 w-full md:w-1/2 lg:w-1/3 xl:w-1/2 mx-auto bg-slate-600 p-5 rounded-lg"
            id="about"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url("https://ugc.futurelearn.com/uploads/images/bc/57/bc5723a6-8bd1-4968-86ab-642d94615799.png")`,
            }}
          >
            <h2 className="text-4xl font-semibold mb-4 font-serif">
              Smart Recommendations
            </h2>
            <p
              className="text-lg text-white
            "
            >
              Our intelligent recommendation system takes into account your
              preferences, location, and interests to suggest a curated list of
              places you can visit in a day. <br />
              Discover trendy cafes, hidden gems for foodies, serene trekking
              spots, vibrant shopping malls, and culturally rich temples
              tailored just for you.
            </p>
          </div>

          <div
            className="mb-8 w-full md:w-1/2 lg:w-1/3 xl:w-1/2 mx-auto bg-slate-600 p-5 rounded-lg"
            id="about"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url("https://png.pngtree.com/thumb_back/fh260/background/20201026/pngtree-futuristic-shape-abstract-background-chemistry-technology-concept-for-website-image_438818.jpg")`,
            }}
          >
            <h2 className="text-4xl font-semibold mb-4 font-serif">
              Dynamic Itinerary Builder
            </h2>
            <p className="text-lg text-white">
              Build your custom itinerary effortlessly with our user-friendly
              interface. Select from a variety of categories such as Food,
              Adventure, Shopping, Culture, and more.
              <br /> Drag and drop activities to create the perfect schedule for
              your day, ensuring a seamless and enjoyable experience.
            </p>
          </div>
          <div
            id="about"
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/2 mx-auto bg-slate-600 p-5 rounded-lg"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6V6g2gGorjhTVXtN6iCNzqbAp55impdJOFqYkSIxPg&s")`,
            }}
          >
            <h2 className="text-4xl font-semibold mb-4 font-serif">
              Local Insights and Reviews
            </h2>
            <p className="text-lg text-white">
              Benefit from genuine reviews and insights from the local
              community. Know what's trending, what dishes to try, or which
              trekking trail offers the best views. <br />
              Make informed decisions with user-generated content, ensuring
              every moment of your day is well spent.
            </p>
          </div>

          <div
            id="about"
            className="container mx-auto px-10 mt-10 bg-slate-600 p-5 rounded-lg"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url("https://blog.hubspot.com/hs-fs/hubfs/company-mission-statements_9.webp?width=595&height=400&name=company-mission-statements_9.webp")`,
            }}
          >
            <h2 className="text-4xl font-semibold mb-4 font-serif">
              Our Mission and Vision
            </h2>
            <p className="text-lg text-white">
              At ExploreEase, our mission is to empower individuals to create
              meaningful and memorable experiences through seamless exploration.
              We strive to be the ultimate companion for every adventurer, food
              enthusiast, and culture seeker, providing smart recommendations
              and dynamic itinerary building tools tailored to personal
              preferences.
              <br />
              Our vision is to inspire a world where people effortlessly
              discover the beauty of diverse destinations, connect with local
              communities, and make informed decisions about their explorations.
              We envision ExploreEase as the go-to platform for anyone seeking
              adventure, culinary delights, and cultural enrichment in every
              corner of the globe.
            </p>
          </div>
        </div>

        <h2 className="text-4xl text-center my-8 font-serif font-semibold">
          Our Team
        </h2>
        <div className="flex">
          <TeamMember
            name="Ganashree C M"
            role="Founder"
            email="ganashree.cs22@bmsce.ac.in"
            imageSrc={meimg}
          />
          <TeamMember
            name="Dinesh K G"
            role="Founder"
            email="dineshkg.cs22@bmsce.ac.in"
            imageSrc={dineshimg}
          />
          <TeamMember
            name="Hrash Ticku"
            role="Founder"
            email="harsh.cs22@bmsce.ac.in"
            imageSrc={harshimg}
          />
          <TeamMember
            name="Hitesh P"
            role="Founder"
            email="hiteshr.cs22@bmsce.ac.in"
            imageSrc={hiteshimg}
          />
        </div>
      </div>
    );
}

export default About;
