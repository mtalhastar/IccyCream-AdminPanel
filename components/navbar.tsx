'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"

const Navbar = () => {
   const Router=useRouter()
  return (
    <>
   <div className="flex p-5 justify-between sticky">
     <div>
      <h1 className="font-bold text-xl" >IccyCream</h1>
      </div>
      <div className="flex space-x-10">
      <h1  className="hover:text-red-500 cursor-pointer">Home</h1>
      <h1 className="hover:text-red-500 cursor-pointer">Admin</h1>
      <h1 className="hover:text-red-500 cursor-pointer" onClick={() => Router.push('/about')}>Orders</h1>
      <Link href={'/about'}>  <h1 className="hover:text-red-500 cursor-pointer" >About</h1></Link>
      </div>
   </div>
  </>
  )
}

export default Navbar