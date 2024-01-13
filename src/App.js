import React from 'react'
import Home from '../src/components/Homesection/home'
import Sharing from './components/Sharingsection/sharing';
import Trendingrecipe from './components/Trendingrecipe/Trendingrecipe';
import '../src/components/Assets/trendingrecipe.css'

function App() {
  return (
    <div >
    
 <Home/>
 <Sharing/>
 <Trendingrecipe/>
    </div>
  );
}

export default App;
