import React, { useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
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
            passwordMessage.innerText="Password must be at least 6 characters long and include at least one letter, one number, and one special character.";
            return false;
        }

    }
function Login() { 
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [error, setError] = useState(null);
    const Navigate = useNavigate(); 

    
    const handleSubmit = async (event) => {
        event.preventDefault();

if (validatePassword()) {
    try {
        const checkUserResponse = await axios.post('http://localhost:3001/User/check', { email, password });
        const { exists, email: existingEmail, password: existingPassword } = checkUserResponse.data;

        if (exists) {
            // User with the specified email and password exists
            console.log(`User found with email: ${existingEmail}, password: ${existingPassword}`);
            Navigate('/Select');
        } else {
            alert('Invalid email or password. Please try again.');
        }
    } catch (err) {
        console.log(err);
        setError('An error occurred. Please try again later.');
    }
}

    };




    return (
      <div>
        <div
          id="content-container"
          style={{
            backgroundImage: `url("https://img.freepik.com/free-vector/circles-background-dark-tones_60389-166.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais")`,
            backgroundSize: "cover",
            backgroundPosition: "right",
          }}
        >
          <form action="##" method="post" onSubmit={handleSubmit}>
            <nav
              className="px-2 py-2"
              style={{
                background: "rgba(255, 155, 210, 0.1)",
                color: "#D63484",
              }}
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
              <div id="right" className="mt-14">
                <span className="line text-6xl mt-14">Already Signed UP?</span>
                <br />
                <br />
                <span className="line text-4xl">What are you waiting for?</span>
                <br />
                <span className="line">Sign in</span>
                <br />
                <span className="line">
                  Get ready to explore new places&#128525;
                </span>
                <br />
              </div>
              <div className="form signup">
                <div className="form-header">
                  <div className="show-signup">Sign In</div>
                </div>
                <div className="form-elements">
                  <div className="form-element">
                    <input
                      type="email"
                      name="email"
                      className="text-black"
                      placeholder="enter your email"
                      onChange={(e) => {
                        SetEmail(e.target.value);
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
                      placeholder="Password"
                      minLength="6"
                      onChange={(e) => {
                        SetPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div
                    id="password-message"
                    className="text-red-500 text-sm"
                  ></div>
                  <div className="form-element">
                    <button type="submit" id="submit-btn">
                      Sign In
                    </button>
                  </div>
                  {/* <div>forgot password<Link to='/Resets'> reset</Link></div> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}
export default Login;