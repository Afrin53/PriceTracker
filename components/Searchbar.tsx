"use client";
import { scrapeAndStoreProduct } from '@/lib/actions';
import { url } from 'inspector';
import React, { FormEvent } from 'react'

import { useState } from 'react';

const isValidAmazonProductURL = (url: string) => {
  try{
    const parsedURL = new URL (url);
    const hostname = parsedURL.hostname;

    if(
      hostname.includes('amazon.com') ||
      hostname.includes('amazon.in') ||
      hostname.endsWith('amazon')
    ){
      return true;
    }
  } catch (error) {
    return false;
  }
  return false;
}

const Searchbar = () => {
  const [searchPrompt, setsearchPrompt] = useState('');
  const [isLoading, setisLoading] = useState(false);
   
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductURL(searchPrompt);

    if(!isValidLink) return alert("Please provide a valid amazon link")
      
      try{
       setisLoading(true);

       //Scrape the product page
       const product = await scrapeAndStoreProduct(searchPrompt);
    }catch (error){
      console.log(error);
    }finally{
      setisLoading(false);
    }
  }
  
  return (
    <form 
    className='flex flex-wrap gap-4 mt-12' 
    onSubmit={handleSubmit} >
        <input
        type='text'
        value={searchPrompt}
        onChange={(e) => setsearchPrompt(e.target.value)}
        placeholder='Enter product link'
        className='searchbar-input'
         />

         <button 
         type='submit'
         className='searchbar-btn'
         disabled= {searchPrompt ===''}
         >
            {isLoading? 'Searching...' : 'Search'}
         </button>
         </form>
  )
}

export default Searchbar