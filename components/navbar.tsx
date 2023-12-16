const Navbar = () => {
  return (
    <>
   <div className="flex p-5 justify-between">
     <div>
      <h1 className="font-bold text-xl" >IccyCream</h1>
      </div>
      <div className="flex space-x-10">
      <h1  className="hover:text-red-500 cursor-pointer">Home</h1>
      <h1 className="hover:text-red-500 cursor-pointer">Admin</h1>
      <h1 className="hover:text-red-500 cursor-pointer">Orders</h1>
      <h1 className="hover:text-red-500 cursor-pointer">About</h1>
      </div>
   </div>
  </>
  )
}

export default Navbar