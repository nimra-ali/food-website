import React, { useState } from 'react';
import user from '../Assets/images/Usericon.svg'
import { Button } from 'antd'; // Import Button from Ant Design
import recipeone from '../Assets/images/recipeone.svg'
import { Rate } from 'antd';
import fire from '../Assets/images/fire.svg'

const Trendingrecipe = () => {
    const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
    // You can perform additional actions when the rating changes
  };
  return (
    <div className='main-trending'>
<p className='trending-heading'> Trending Recipe</p>
<div className='viewmorediv'>
    <Button className='viewmorebtn'>View more</Button>
</div>
<div className='trending-main-section'>
<div className='trendingcard-one'>
    <div className='trendingcard-main1'>
        <div className='trendingcard-img'>
            <img className='imgsize' src={recipeone} alt='recipe1'/>
            <Rate style={{color:'#B55D51' , paddingTop:'4px' , paddingLeft:'10px'}} onChange={handleRatingChange} value={rating} />
        </div>
        <p className='onionring'>onion rings</p>
        <div className='usersmain'>
            <div style={{display:'flex'}}>
                <img src={user} alt='user'/>
                <p className='alexmartin'>Alex Martin</p>
            </div>
            <div>
                <Button className='firebtn'>
                    <img src={fire} alt='fire'/>
                    322 calls
                </Button>
            </div>
        </div>
    </div>
    <div className='trendingcard-main1'>
        <div className='trendingcard-img'>
            <img className='imgsize' src={recipeone} alt='recipe1'/>
            <Rate style={{color:'#B55D51' , paddingTop:'4px' , paddingLeft:'10px'}} onChange={handleRatingChange} value={rating} />
        </div>
        <p className='onionring'>onion rings</p>
        <div className='usersmain'>
            <div style={{display:'flex'}}>
                <img src={user} alt='user'/>
                <p className='alexmartin'>Alex Martin</p>
            </div>
            <div>
                <Button className='firebtn'>
                    <img src={fire} alt='fire'/>
                    322 calls
                </Button>
            </div>
        </div>
    </div>
    <div className='trendingcard-main1'>
        <div className='trendingcard-img'>
            <img className='imgsize' src={recipeone} alt='recipe1'/>
            <Rate style={{color:'#B55D51' , paddingTop:'4px' , paddingLeft:'10px'}} onChange={handleRatingChange} value={rating} />
        </div>
        <p className='onionring'>onion rings</p>
        <div className='usersmain'>
            <div style={{display:'flex'}}>
                <img src={user} alt='user'/>
                <p className='alexmartin'>Alex Martin</p>
            </div>
            <div>
                <Button className='firebtn'>
                    <img src={fire} alt='fire'/>
                    322 calls
                </Button>
            </div>
        </div>
    </div>

</div>
<div className='trendingcard-one'>
<div className='trendingcard-one'>
    <div className='trendingcard-main1'>
        <div className='trendingcard-img'>
            <img className='imgsize' src={recipeone} alt='recipe1'/>
            <Rate style={{color:'#B55D51' , paddingTop:'4px' , paddingLeft:'10px'}} onChange={handleRatingChange} value={rating} />
        </div>
        <p className='onionring'>onion rings</p>
        <div className='usersmain'>
            <div style={{display:'flex'}}>
                <img src={user} alt='user'/>
                <p className='alexmartin'>Alex Martin</p>
            </div>
            <div>
                <Button className='firebtn'>
                    <img src={fire} alt='fire'/>
                    322 calls
                </Button>
            </div>
        </div>
    </div>
    <div className='trendingcard-main1'>
        <div className='trendingcard-img'>
            <img className='imgsize' src={recipeone} alt='recipe1'/>
            <Rate style={{color:'#B55D51' , paddingTop:'4px' , paddingLeft:'10px'}} onChange={handleRatingChange} value={rating} />
        </div>
        <p className='onionring'>onion rings</p>
        <div className='usersmain'>
            <div style={{display:'flex'}}>
                <img src={user} alt='user'/>
                <p className='alexmartin'>Alex Martin</p>
            </div>
            <div>
                <Button className='firebtn'>
                    <img src={fire} alt='fire'/>
                    322 calls
                </Button>
            </div>
        </div>
    </div>
    <div className='trendingcard-main1'>
        <div className='trendingcard-img'>
            <img className='imgsize' src={recipeone} alt='recipe1'/>
            <Rate style={{color:'#B55D51' , paddingTop:'4px' , paddingLeft:'10px'}} onChange={handleRatingChange} value={rating} />
        </div>
        <p className='onionring'>onion rings</p>
        <div className='usersmain'>
            <div style={{display:'flex'}}>
                <img src={user} alt='user'/>
                <p className='alexmartin'>Alex Martin</p>
            </div>
            <div>
                <Button className='firebtn'>
                    <img src={fire} alt='fire'/>
                    322 calls
                </Button>
            </div>
        </div>
    </div>

</div>
</div>
</div>
    </div>
  )
}

export default Trendingrecipe