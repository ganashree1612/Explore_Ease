import React, { useState} from 'react';
import './App.css';
import { Link ,useNavigate} from "react-router-dom";
function Resets() {
  const Navigate = useNavigate(); // Use the useHistory hook to get the history object
  // const [password, SetPassword] = useState('');
    const handleSubmit = (event) => {
      event.preventDefault();
      
      if (validatePassword() && confirmPassword()) {
           console.log('Validating password');
            // Password validation is successful, navigate to the login page
            Navigate('/Login');
        }
    };
  const validatePassword = () => {
  const passwordInput = document.getElementById('password');
  const passwordMessage = document.getElementById('password-message');
  const password = passwordInput.value;
  const letterRegex = /[a-zA-Z]/;
  const numberRegex = /\d/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  const isLengthValid = password.length >= 6;
  const containsLetter = letterRegex.test(password);
  const containsNumber = numberRegex.test(password);
  const containsSpecialChar = specialCharRegex.test(password);

  console.log('Validating password');

  if (isLengthValid && containsLetter && containsNumber && containsSpecialChar) {
    console.log('Password is valid');
    passwordMessage.innerText = ''; // Clear the message if the password is valid
    return true;
  } else {
    console.log('Password is invalid');
    passwordMessage.innerText = "Password must be at least 6 characters long and include at least one letter, one number, and one special character.";
    return false;
  }
};



  const confirmPassword = () => {
    const confirmPasswordInput = document.getElementById("confirmpass");
    const passwordInput = document.getElementById('password');
    const passwordMessage = document.getElementById('confirm-password-message');

    if (confirmPasswordInput.value === passwordInput.value) {
      passwordMessage.innerText = '';
      return true;
    } else {
      passwordMessage.innerText="Password does not match";
      return false;
    }
  };

    return (<>
    <div style={{ minHeight: '100vh'  }}>
      <form action="##" method="post" onSubmit={handleSubmit}>
      <nav class="bg-red-300 py-2 text-red-600 flex ">
            <ul class="flex" id="top">
                <Link to='/Home' className="mx-2 cursor-pointer hover:text-green-700 font-serif"><button className="bg-[#D63484] w-[75px] rounded mt-2 text-white hover:bg-[#402B3A] cursor-pointer" >Home</button></Link>
          <Link to='/About' className="mx-2 cursor-pointer hover:text-green-700 font-serif"><button className="bg-[#D63484] w-[75px] rounded mt-2 text-white hover:bg-[#402B3A] cursor-pointer" >About</button></Link>
          <Link to='/Login' className="mx-2 cursor-pointer  hover:text-green-700 font-serif">
          
                    <button className="bg-[#D63484] w-[75px] rounded mt-2 text-white hover:bg-[#402B3A] cursor-pointer" >Login</button>
          </Link>
          <span className="mx-[400px] text-3xl font-serif font-bold">Explore Ease</span>
            </ul>
        </nav>
      
        <div className="About reset">
          <div className="About-header ">
            <div className="show-reset "><span className="text-center">Reset Password</span></div>
          </div>
          <div className="About-elements">
            <div className="About-element">
              <input type="password" className="text-black" id="password" name="password" placeholder="enter new password"  minLength="6" onSubmit={validatePassword} required />

              </div>
              <div id="password-message" className='text-red-500'></div>
            <div className="About-element">
              <input type="password" className="text-black" id="confirmpass" onSubmit={confirmPassword} name="confirmpass" placeholder="Confirm Password" required />
              </div>
              <div id="confirm-password-message" className='text-red-500'></div>
            <div className="About-element">
              <button type="submit" id="submit-btn" style={{ border: '1px solid red' }}>Submit</button>
            </div>
          </div>
        </div>
      </form>
      </div>
      </>
  );
}

export default Resets;
