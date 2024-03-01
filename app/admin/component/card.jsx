import React, { useEffect } from 'react'
import Image from 'next/image'
const Card = (props) => {
  console.log(props)
  const handleDelete = () => {
    // Call the delete function passed through props
    console.log(props.props.id)
    props.deletefunction(props.props.id);
  };
  return (
  <>
   <div className="w-64 rounded overflow-hidden shadow-lg">
   <img src={props.props.imageUrl} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{props.props.name}</div>
    <p className="text-gray-700 text-base">
     {props.props.longDescription}
    </p>
    <div className="font-bold text-xl  mt-2">  {props.props.price}$</div>
  </div>
  <div className="px-6  pb-2">
    <span onClick={handleDelete} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 hover:text-gray-800 cursor-pointer">Delete</span>
  </div>
</div>
  </>
  )
}

export default Card