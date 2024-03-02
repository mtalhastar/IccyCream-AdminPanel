'use client'
import React, { useEffect, useState } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import Card from './component/ordercard';
import { db } from '../../services/firebase';
import { useRouter } from 'next/navigation';
import OrderCard from './component/ordercard';

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "orders"));
  const data = [];

  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

const Page = () => {
  const [icecreams, setIcecreams] = useState();
  const [filteredIcecreams, setFilteredIcecreams] = useState(); // State to hold filtered ice creams
  const router = useRouter();
  const [change, setChange] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setIcecreams(data);
      setFilteredIcecreams(data); // Initialize filtered ice creams with all ice creams
    }
    fetchData();
  }, [change]);

  const deleteDataFromFirestore = async (docid) => {
    try {
      await deleteDoc(doc(db, "orders", docid));
      setChange(!change); // Toggle change to trigger re-fetch of data
      console.log('Document successfully deleted');
      return { success: true, message: "Document successfully deleted" };
    } catch (error) {
      console.error("Error deleting document: ", error);
      return { success: false, message: "Error deleting document" };
    }
  }

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredData = icecreams.filter((icecream) =>
      icecream.name.toLowerCase().includes(searchTerm)
    );
    setFilteredIcecreams(filteredData);
  };

  return (
    <>
      <div className="flex justify-center mt-8">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-full px-10 py-2 w-72 focus:outline-none focus:border-gray-600"
          onChange={handleSearch}
        />
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          {filteredIcecreams && filteredIcecreams.map((icecream) =>
            <OrderCard key={icecream.id} props={icecream} deletefunction={deleteDataFromFirestore} />
          )}
        </div>
      </div>
    </>
  );
}

export default Page;
