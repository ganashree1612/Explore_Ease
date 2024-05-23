import React  from "react";
import './App.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from 'react';
function validatePassword() {
  var passwordInput = document.getElementById('password');
        var passwordMessage = document.getElementById('password-message');
        var password = passwordInput.value;
        var letterRegex = /[a-zA-Z]/;
        var numberRegex = /\d/;
        var specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
        var isLengthValid = password.length >= 6;
        var containsLetter = letterRegex.test(password);
        var containsNumber = numberRegex.test(password);
        var containsSpecialChar = specialCharRegex.test(password);

        if (isLengthValid && containsLetter && containsNumber && containsSpecialChar) {
            passwordMessage.innerText = '';
            return true;
        } else {
          passwordMessage.innerText = "Password must be at least 6 characters long and include at least one letter, one number, and one special character.";
            return false;
        }

}

function confirmPassword() {
  var confirmpass = document.getElementById("confirmpass");
  var passwordInput = document.getElementById('password');
  var passwordMessage = document.getElementById('confirm-password-message');

  if (confirmpass.value === passwordInput.value) {
    passwordMessage.innerText = '';
    return true;
  } else {
    passwordMessage.innerText="Password does not match";
    return false;
  }
}

function App() {
  const [name, SetName] = useState('');
const [email, SetEmail] = useState('');
const [password, SetPassword] = useState('');
const [error, setError] = useState(null);
const Navigate = useNavigate();



  const handleSubmit = async (event) => {
  event.preventDefault();

  if (confirmPassword() && validatePassword()) {
    try {
      
      const checkEmailResponse = await axios.get(`http://localhost:3001/User?email=${email}`);
      const existingEmail = checkEmailResponse.data.email;

      if (existingEmail === email) {
        alert("Email is already registered. Please use a different email address.");
      } else {
        
        const result = await axios.post('http://localhost:3001/User', { name, email, password });
        console.log(result);
        Navigate('/Login');
      }
    } catch (err) {
      console.log(err);
      setError("An error occurred. Please try again later.");
    }
  }
};

// Function to clear error when the input changes
const handleInputChange = () => {
  setError(null);
};

  return (
    <div className="App overflow-hidden">
      <div
        id="content-container"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/circles-background-dark-tones_60389-166.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais")`,
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      >
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
            <span className="mx-[500px] text-4xl font-serif font-bold text-[#3C0753]">
              Explore Ease
            </span>
          </ul>
        </nav>
        <div className="division">
          <div id="right">
            <span className="line" id="line1">
              Bored In Home?
            </span>
            <br />
            <br />
            <span className="line" id="line2">
              Trying to figure out where to go?
            </span>
            <br />
            <span className="line" id="line3">
              Dont Worry&#128516;
            </span>
            <br />
            <span className="line" id="line4">
              We have got u covered
            </span>
            <br />
            <span className="line" id="line5">
              <button className="signup-btn">signup</button> to get started
            </span>
          </div>
          <form action="/User" method="post" onSubmit={handleSubmit}>
            <div className="form signup">
              <div className="form-header">
                <div className="show-signup">Sign Up</div>
              </div>
              <div className="form-elements">
                <div className="form-element">
                  <input
                    type="text"
                    className="text-black"
                    placeholder="enter  username"
                    name="name"
                    onChange={(e) => {
                      SetName(e.target.value);
                      handleInputChange();
                    }}
                    required
                  />
                </div>
                <div className="form-element">
                  <input
                    type="email"
                    className="text-black"
                    placeholder="enter your email"
                    name="email"
                    onChange={(e) => {
                      SetEmail(e.target.value);
                      handleInputChange();
                    }}
                    required
                  />
                </div>
                <div className="form-element">
                  <input
                    type="password"
                    className="text-black"
                    id="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => {
                      SetPassword(e.target.value);
                      handleInputChange();
                    }}
                    minLength="6"
                  />
                </div>
                <div
                  id="password-message"
                  className="text-red-500 text-sm"
                ></div>
                <div className="form-element">
                  <input
                    type="password"
                    className="text-black"
                    id="confirmpass"
                    name="confirmpass"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                <div
                  id="confirm-password-message"
                  className="text-red-500 text-sm"
                ></div>
                <div className="form-element">
                  <button type="submit" id="submit-btn">
                    Sign Up
                  </button>
                </div>
                <div>
                  <span className="text-black">
                    Already have an account <Link to="/Login">Sign In</Link>
                  </span>
                  <br />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
