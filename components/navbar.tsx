'use client'
import Link from "next/link"
import {auth} from "../services/firebase"
import {useEffect,useState } from 'react'
import { Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
const Navbar = () => {

  const [currentUser, setCurrentUser] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 
  const router = useRouter();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user){
        setCurrentUser(true);
      }else{
        setCurrentUser(false);
        router.push('/');
      }
     
    });
    return () => unsubscribe();
  }, []); 
  
  return (
    <>
    {/* Menu button for mobile */}
    <button
      className="block p-3 md:hidden"
      onClick={toggleMenu}
    >
     <Menu />
    </button>

    {/* Menu */}
    <div className={`flex p-5 justify-between ${menuOpen ? 'block' : 'hidden'} md:flex`}>
      <div>
        <h1 className="font-bold text-xl">IccyCream</h1>
      </div>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10">
        <Link href='/homepage'><h1 className="hover:text-red-500 cursor-pointer">Home</h1></Link>
        {currentUser &&
           <Link href='/admin'><h1 className="hover:text-red-500 cursor-pointer">Products</h1></Link>
        }
        <Link href='/orders'><h1 className="hover:text-red-500 cursor-pointer">Orders</h1></Link>
        {currentUser &&
        <Link href='/about'><h1 className="hover:text-red-500 cursor-pointer">Add Product</h1></Link>
         }
        {currentUser &&
          <Link href='/signup'><h1 className="hover:text-red-500 cursor-pointer">Manage Users</h1></Link>
        }
        {currentUser &&
          <h1 className="hover:text-red-500 cursor-pointer" onClick={() => auth.signOut()}>SignOut</h1>
        }
      </div>
    </div>
  </>
  )
}

export default Navbar