import React, { useEffect } from 'react'
import Image from 'next/image'
const OrderCard = (props) => {
  console.log(props)
  const handleDelete = () => {
    // Call the delete function passed through props
    console.log(props.props.id)
    props.deletefunction(props.props.id);
  };
  return (
  <>
   <div className="w-64 rounded overflow-hidden shadow-lg">
  <div className="px-6 py-4">
  <div className="font-bold text-xl mb-2">OrderId</div>
  <div className="font-light text-sm mb-2"> {props.props.id}</div>
    <div className="font-bold text-xl mb-2">{props.props.city}</div>
    <p className="text-gray-700 text-base">
     {props.props.phone}
    </p>
    <p className="text-gray-700 text-base">
     {props.props.items}
    </p>
    <div className="font-bold text-xl  mt-2">  {props.props.homeaddress}</div>
    <div className="font-bold text-xl  mt-2">  {props.props.status}</div>
  </div>
  <div className="px-6  pb-2">
    <span onClick={handleDelete} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 hover:text-gray-800 cursor-pointer">Delivered</span>
  </div>
</div>
  </>
  )
}

export default OrderCard