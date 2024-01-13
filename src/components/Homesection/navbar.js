import React from 'react';
import logo from '../Assets/images/logoone.svg';
import '../Assets/homestyle.css';
import { Button } from 'antd'; // Import Button from Ant Design


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='homelogoone'>
        <div>
          <img src={logo} alt='logohome' />
        </div>
        <div className='perfectrecipe'>
          <p className='perfect-p'>
            Perfect<span className='RECIPESPAN'>Recipe</span>
          </p>
        </div>
      </div>
      <div className='homelogotwo'>
    <ul style={{display:'flex', listStyle:'none' , gap:'20px'}}>

        <li className='home-li'>Home</li>
        <li className='home-li' >Recipe</li>
        <li className='home-li'>Add Recipe</li>
        <li className='home-li'>Blog</li>
        <li className='home-li'>About Us</li>
    </ul>
      </div>
      <div className='homelogthree'>
        <div>
        <Button className='login'> Log in</Button>
        </div>
      
       <div> <Button className='signup'>Sign up</Button></div>
      </div>
    </div>
  );
};

export default Navbar;
