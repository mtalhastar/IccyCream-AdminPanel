'use client'
import React,{useState} from 'react';
import { db, storage} from '../../services/firebase';
import {ref,getDownloadURL, uploadBytes} from 'firebase/storage';
import {setDoc, getDocs,collection,doc} from 'firebase/firestore';
import {v4} from 'uuid';
import { set } from 'firebase/database';

const Page = () => {
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef =  ref(storage,`images/${file.name+v4()}`);
    await uploadBytes(storageRef,file)
    getDownloadURL(storageRef).then((url)=>{setImageUrl(url)})
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    try {
      // Access form field values using e.target
      const name = e.target.title.value;
      const longDescription = e.target.description.value;
      const category = e.target.category.value;
      const description = e.target.shortDescription.value;
      const price = e.target.price.value;
      console.log(name)
      console.log(longDescription)
      console.log(category)
      const icecream={
        name,
        description,
        category,
        longDescription,
        price,
        imageUrl
      }
     const reference= doc(collection(db, "icecreams"))
     await setDoc(reference,icecream)
 
      e.target.reset();
      
      alert('Data submitted successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };


  return (
    <form className="max-w-lg mx-auto mt-10" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
        <input type="text" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Chocolato" required />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
        <input type="text" id="description" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Explain it" required />
      </div>
      <div className="mb-5"> 
        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
        <input type="text" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Chocolate" required />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Description</label>
        <input type="text" id="shortDescription" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Feeling good chocolate" required />
      </div>
      <div>
        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
        <input type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$9.99" required />
      </div>
      
      <label className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">
        Upload file
      </label>
      <div className="relative">
        <input
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
          required
          onChange={handleFileChange}
        />
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 px-4 py-2"
          type="text"
          placeholder="Choose file"
          value={imageUrl || ''}
          readOnly
        />
      </div>
      <div className="text-center"> 
        <button  type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-10 py-2.5 me-2 mb-2 mt-8 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Page;
