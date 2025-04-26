import React from 'react';
import { NavLink } from 'react-router';


const Home = () => {
     return (
          <div>
               <NavLink to='/'>Home</NavLink>
               <NavLink to='/hero'>Hero</NavLink>
               <NavLink to='/projects'>Projects</NavLink>
               <NavLink to='/people'>People</NavLink>
          </div>
     );
};

export default Home;