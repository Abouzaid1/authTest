import React from 'react'
import image from "../assets/1.png"
// var Rating = require('react-rating');
import Rating from 'react-rating';
export default function Product() {
    const handleChangeRating = (e)=>{
        console.log(e);
    }
  return (
    <div>
      <p className='text-[20px] text-center'>Product Page</p>
      <div className='w-full'>
        <img className='w-full' src={image} alt="" />
      </div>
      <div>
        <p>Product Name: </p>
        <p>Product Description: </p>
        <p>Product Rate: </p>

      </div>
      <Rating onChange={(e)=>handleChangeRating(e)}/>
    </div>
  )
}
