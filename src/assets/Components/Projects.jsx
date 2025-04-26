import React, { useState } from 'react';
import { GithubAuthProvider } from "firebase/auth";
import {signInWithPopup} from "firebase/auth";
import { auth } from './firebase';

const provider2 = new GithubAuthProvider();

const Projects = () => {
     const [user, setUser]=useState(null);

     const hendleOnClick=()=>{
          // console.log('git hub clicked')
          signInWithPopup(auth, provider2)
          .then(result=>{
               console.log(result.user);
               setUser(result.user);
          }).catch(error=>console.log(error))
     }
     return (
       <div>
         {/* github add to the options */}
         <button onClick={hendleOnClick} className="btn btn-primary">
           Sign In GitHub
         </button>

         
         <div>
          <h1> User name:{user.displayName} </h1>
         </div>
       </div>
     );
};

export default Projects;