'use client'

import { useEffect,useState } from "react"
import {auth} from "../../../services/firebase"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const Form = () => {
    
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  

  const Submit=(e:any)=>{

    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((response) => {
     toast.success('User Created Successfully')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage)
    });
  }

  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
  };


  return (
    <form className="p-10" >
        <div className="flex-col items-center">
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 mb-3 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required onChange={handleEmailChange}/>
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your password" required onChange={handlePasswordChange}/>
        </div>
        <button className="bg-black hover:bg-gray-900 mt-7 h-10 text-white font-bold rounded-full w-full  mx-auto" onClick={Submit}>Create</button>
        </div>
        </form>
  )
}

export default Form