import React from 'react'
import '../Assets/homestyle.css'
import Navbar from '../Homesection/navbar'
import heroimg from '../Assets/images/Heroimage.svg'
import { Button } from 'antd'; // Import Button from Ant Design


const home = () => {
  return (
    <div className='homesectionmain'>
<Navbar/>
<div className='mainsection-home'>
  <div className='content-div'>
   <p className='content-heading'>Your Daily Dish
A <span  className='RECIPESPAN'>Food</span> Journey</p>
  
  <p className='lorem-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim pharetra, venenatis 
    nunc eget, finibus est. Proin velit </p>
    <div> <Button className='signup-large'>Sign up</Button></div>
<p className='have-account'>Do you have account? <span className='RECIPESPAN'>Log in</span></p>
    </div>
  <div className='image-div'>
<img src={heroimg} alt='heroimg'/>
  </div>
</div>
    </div>
  )
}

export default home