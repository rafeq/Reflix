import { useState } from 'react';
import '../style/landing-style.css'

let userArray = [
  {
    name: "Mona",
    color: "blue"
  },
  {
    name: "Jasmyne",
    color: "red"
  },
  {
    name: "Aura",
    color: "green"
  },
  {
    name: "Tina",
    color: "yellow"
  },
]


function Landing() {
  let user=useState(userArray)
  return (
  <div >
    
    <h1>HOW'S WATCHING?</h1>
   
    <div className='container' >
      {user[0].map((user)=><div key={user.name} className='square'  style={{background:user.color}}>{user.name}</div>)}
    </div>
  </div>
  );
}

export default Landing;
