import './App.css';
import { useState } from "react"

function App() {
  
let fullInfo = {}

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState(""); 

const [email, setEmail] = useState("");
const [error, setError] = useState("");

function isValidEmail(email){
  return  /\S+@\S+\.\S+/.test(email);
}

const hendleSubmit = (event) => {
  event.preventDefault();
  fullInfo.firstName = firstName;
  fullInfo.lastName = lastName;
  fullInfo.email = email;
  console.log(fullInfo);
}

  return (
    <div className="App">
      <h1>Submit Your <br/> personal information</h1>
      <form onSubmit={hendleSubmit}>
        <input type="text" placeholder="First name" onChange={(e) => setFirstName(e.target.value)}/>
        <input type="text" placeholder="Last name" onChange={(e) => setLastName(e.target.value)}/>
        <p>
        <input 
          type="text" 
          placeholder="E-mail" 
          onChange={(e) =>{
            if (!isValidEmail(e.target.value)) {
              setError('Email is invalid');
            } else {
              setError(null);
            }
            setEmail(e.target.value);
          }}
        />
        <br/>
        <span className='errorMessege'>{error}</span>
        </p>
        <input className="blueButton" type="submit" value="Next >"/>
      </form>
    </div>
  );
}

export default App;
