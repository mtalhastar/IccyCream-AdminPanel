'use client'
import Link from "next/link"
import {auth} from "../services/firebase"
import {useEffect,useState } from 'react'

const Navbar = () => {

  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // This function will be called whenever the authentication state changes
      if (user){
        setCurrentUser(true);
      }else{
        setCurrentUser(false);
      }
     
    });

    // Cleanup the observer when the component unmounts
    return () => unsubscribe();
  }, []); 
  
  return (
    <>
   <div className="flex p-5 justify-between sticky">
     <div>
      <h1 className="font-bold text-xl" >IccyCream</h1>
      </div>
      <div className="flex space-x-10">
      <Link href='/homepage'><h1  className="hover:text-red-500 cursor-pointer">Home</h1></Link> 
      <Link href='/admin'> <h1 className="hover:text-red-500 cursor-pointer">Admin</h1></Link>
      <Link href='/orders'> <h1 className="hover:text-red-500 cursor-pointer">Orders</h1></Link>
      <Link href='/about'>  <h1 className="hover:text-red-500 cursor-pointer" >About</h1></Link>
      {currentUser &&
        <Link href='/signup'>  <h1 className="hover:text-red-500 cursor-pointer">Manage Users</h1></Link>
      }
      {currentUser &&
         <h1 className="hover:text-red-500 cursor-pointer" onClick={()=>auth.signOut()}>SignOut</h1>
      }
      </div>
   </div>
  </>
  )
}

export default Navbar