import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/landing-style.css'
import Users from '../userData.json'

let userArray =Users.users


function Landing() {
  let user=useState(userArray)
  return (
  <div >
    <h1>HOW'S WATCHING?</h1>
      <Link to="/Catalog" className='container'>{user[0].map((user)=><div key={user.name} className='square'  style={{background:user.color}}>{user.name}</div>)}</Link>
  </div>
  );
}

export default Landing;
