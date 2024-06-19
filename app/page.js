"use client"
import React, { useEffect } from 'react';
import Header from '@/Components/Header';
import { useState } from 'react';
import axios from 'axios';

const page = () => {

 

  const [name, setname] = useState('RAJ');

  const [Images, setImages] = useState([]);



  const getImage = async function(){
    try{
    const response = await axios.get('https://picsum.photos/v2/list');
    const data = response.data;
    setImages(data);
    console.log(Images);
    }
    catch(err){
      console.error("ERROR fetching images");
    }
  };

  useEffect(() => {
    getImage()
    }, []);
  

  return (
    <>

       <Header user={name}/>
      <h1 className='text-blue-500 font-bold text-5xl'>HELLO {name}</h1>
      <button onClick={function(){
        if(name === 'RAJ'){
          setname('RAJ DEV')
        }
        else{
          setname('RAJ')
        }
      }} className='text-white px-12 py-1 rounded-lg border-black border-2 uppercase bg-zinc-400'> Change </button>

      <button onClick={getImage}> get images </button>
      <div className='p-10'>
        {Images.map(function(elem,i){
        return <img key={i} src={elem.download_url} className='m-10 rounded-lg inline-block'  height={300} width={300}/> 
        })}
      </div>

    </>
  )
}

export default page