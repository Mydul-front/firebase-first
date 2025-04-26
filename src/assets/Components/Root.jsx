import React from 'react';
import Home from './Home';
import Footer from './Footer';
import { Outlet } from 'react-router';

const Root = () => {
     return (
       <div>
         <Home></Home>
         <Outlet></Outlet>
         <Footer></Footer>
       </div>
     );
};

export default Root;