import React, { useState } from "react";
import { GoogleAuthProvider, signOut } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

const provider = new GoogleAuthProvider();

const Hero = () => {

     const [user, setUser]=useState(null)

     const handleSignOut=()=>{
          // console.log('signOut');
          signOut(auth).then(()=>{
               console.log('sign Out completed')
               setUser(null)
          }).catch(error=>console.log(error))
     }
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {" "}
      {user ? (
        <button onClick={handleSignOut} className="text-3xl btn btn-error ">
          Sing Out to Google
        </button>
      ) : (
        <button onClick={handleSignIn} className="btn btn-active">
          SingIn to Google
        </button>
      )}
      {user && (
        <div>
          <h3>User name: {user.displayName} </h3>
          <div>
            <img src={user.photoURL} alt="" />
            <h2>{user.uid}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
