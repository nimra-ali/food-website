import React from 'react'
import '../Assets/sharing.css'
import shareimg from '../Assets/images/shareimg.svg'
import { Button } from 'antd'; // Import Button from Ant Design


const sharing = () => {
  return (
    <div className='sharing-main'>
        <div className='sharing-main-content'>
        <div className='sharing-picture'>
<img src={shareimg} alt='shareimg'/>
</div>
<div className='sharing-content'>
<h2 className='share-para'>Share Your <span className='RECIPESPAN'>Recipe</span></h2>
<p className='share-lorem-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit </p>
<div><Button className='create-btn'>Create New Recipe</Button></div>

</div>

</div>
        </div>
    
  )
}

export default sharing