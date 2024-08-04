"use client";
import React, { useState } from 'react';
import { categories } from '../_constants/constants';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useMyContext } from '../_components/Context';
import { db,storage } from '@/firebase';
const Page = () => {

  const { userEmail,setUserEmail } = useMyContext();
  const [loading, setLoading] = useState(false);
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [itemMeasure, setItemMeasure] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemExpires, setItemExpires] = useState('');
  const [itemImage, setItemImage] = useState();
  const [itemImageURL, setItemImageURL] = useState('');

  const handleAddItem = async () => {
    console.log('Function called');
    console.log('Item Name:', itemName);
    console.log('Item Category:', itemCategory);
    console.log('Item Measure:', itemMeasure);
    console.log('Item Quantity:', itemQuantity);
    console.log('Item Expires:', itemExpires);
    console.log('Item Image:', itemImage);

    try {
      setLoading(true);
      alert(userEmail)
      let imageURL = '';
      if (itemImage) {
        const imageRef = ref(storage, `images/${userEmail}/${itemImage.name}`);
        await uploadBytes(imageRef, itemImage);
        imageURL = await getDownloadURL(imageRef);
      }

      const userPantryRef = collection(db, userEmail);
      await addDoc(userPantryRef, {
        name: itemName,
        category: itemCategory,
        measure: itemMeasure,
        quantity: itemQuantity,
        expires: itemExpires,
        imageURL: imageURL // Store the image URL
      });
      setLoading(false);
      alert('Item added successfully!');
    } catch (error) {
      setLoading(false);
      console.error('Error adding document: ', error);
    }
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setItemImage(file);
    setItemImageURL(URL.createObjectURL(file));
  };

  return (
    <section className="w-80 my-10 lg:my-0 space-y-5 p-3 text-center rounded-lg bg-blue-950 text-white select-none">
      <h1 className="text-2xl font-bold">Add Item</h1>
      <input
        onChange={(e) => setItemName(e.target.value)}
        value={itemName}
        className="text-2xl font-bold text-blue-950 py-2 rounded-lg px-3 w-full"
        placeholder="Name"
      />
      <select
        onChange={(e) => setItemCategory(e.target.value)}
        className="text-2xl py-1 rounded-lg px-3 w-full ring-2 ring-inset ring-slate-600 focus:inset-5 text-blue-950 focus:ring-slate-600 border-white"
      >
        <option value="" className="">Select a category</option>
        {categories.map((category) => (
          <option key={category.name} className="border border-none" value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <div className="text-lg font-medium space-x-3 flex items-center">
        <h1
          onClick={() => setItemMeasure('KG')}
          className={`${
            itemMeasure === 'KG'
              ? 'px-3 py-3 cursor-pointer bg-green-400 text-blue-950 rounded-lg'
              : 'px-3 py-3 cursor-pointer hover:bg-green-400 hover:text-blue-950 rounded-lg'
          }`}
        >
          KG
        </h1>
        <h1
          onClick={() => setItemMeasure('Litre')}
          className={`${
            itemMeasure === 'Litre'
              ? 'px-3 py-3 cursor-pointer bg-green-400 text-blue-950 rounded-lg'
              : 'px-3 py-3 cursor-pointer hover:bg-green-400 hover:text-blue-950 rounded-lg'
          }`}
        >
          Litre
        </h1>
        <h1
          onClick={() => setItemMeasure('Unit')}
          className={`${
            itemMeasure === 'Unit'
              ? 'px-3 py-3 cursor-pointer bg-green-400 text-blue-950 rounded-lg'
              : 'px-3 py-3 cursor-pointer hover:bg-green-400 hover:text-blue-950 rounded-lg'
          }`}
        >
          Unit
        </h1>
      </div>
      <div className="text-lg font-medium flex items-center text-center">
        <h1>Quantity :</h1>
        <button
          onClick={() => setItemQuantity((prev) => prev - 1)}
          className="ms-5 px-3 text-3xl font-black py-1 hover:bg-green-400 hover:text-blue-950 rounded-lg"
        >
          -
        </button>
        <h1 className="px-2">{itemQuantity}</h1>
        <button
          onClick={() => setItemQuantity((prev) => prev + 1)}
          className="px-3 py-1 text-3xl font-black hover:bg-green-400 hover:text-blue-950 rounded-lg"
        >
          +
        </button>
      </div>
      <div className="text-lg font-bold px-3 text-left">
        Expire:
        <input
          type="date"
          onChange={(e) => setItemExpires(e.target.value)}
          value={itemExpires}
          className="w-full mt-2 px-3 py-2 rounded-lg text-blue-950"
        />
      </div>
      {!itemImage && (
        <div className="flex items-center text-lg font-bold px-3 text-left">
          Image:
          <input
            type="file"
            onChange={(e) => handleImage(e)}
            placeholder="Upload Image"
            className="w-full mt-2 px-3 rounded-lg text-blue-950"
          />
        </div>
      )}
      {itemImage && <img src={itemImageURL} className="w-20 h-20 object-cover" />}
      {loading==true ? (
        <button disabled={true} className="py-3 px-5 rounded-md bg-green-700">
          Uploading...
        </button>
      ) : (
        <button onClick={handleAddItem} className="py-3 px-5 rounded-md bg-green-700">
          Add
        </button>
      )}
    </section>
  );
};

export default Page;
