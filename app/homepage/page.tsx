
'use-client'
import { Input } from "postcss"
import { useEffect,useState } from "react"

const page = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const Submit=()=>{



  }

  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
  };


  return (
    <>
    <div className="relative bg-gray-200 h-[42rem]"
    >
    <div className="h-80 bg-black">
    <h1 className="text-fuchsia-50 text-center pt-7 font-extralight text-lg">Manage Your Favourite</h1>
    <h1 className="text-fuchsia-50 text-center pt-2 font-bold font-mono text-[25px]">IccyCreams</h1>
    </div>
       <div className="absolute top-[150px] left-1/2 transform -translate-x-1/2 bg-white h-80 w-80 rounded-md">
        <form className="p-10" onSubmit={Submit}>
        <div className="flex-col items-center">
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 mb-3 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required onChange={handleEmailChange}/>
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your password" required onChange={handlePasswordChange}/>
        </div>
        <button className="bg-black hover:bg-gray-900 mt-7 h-10 text-white font-bold rounded-full w-full  mx-auto">Login</button>
        </div>
        </form>
        </div>
    </div>
    </>
  )
}

export default page