import React from 'react'
import '../styles/Home.css'
import {Link} from 'react-router-dom'
import BannerImage from "../assets/pizza.jpeg"
function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}}> 
    <div className='headerContainer' >
    <h1>AL's pizza</h1>  
   <p>Finger lickin good</p>
   <Link to="/menu">
   <button>Order</button>
   </Link>
    </div>
    </div>
   
  )
}

export default Home