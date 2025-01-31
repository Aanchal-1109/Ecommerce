import React, {useState ,useEffect } from 'react'
import '../App.css'
const Navbar =()=> {
    const [navbar, setNavbar] = useState(false)
    const Sticknavbar = () => {
        if (window.scrollY >= 50) {
            setNavbar(true)
            console.log(window.scrollY)
    } else {
      setNavbar(false)
    }
  }
    useEffect(()=>{
        Sticknavbar()
        window.addEventListener('scroll', Sticknavbar)
    },[])
    return (
        <nav className= {navbar? "nav-container sticky": "nav-container"}  id='nav'>
            <div className="left-nav">
                <img src="" alt="" />
            </div>
            <div className="right-nav">
                <ul className='nav-pages'>
                    <li><a href=""> Home </a></li>
                    <li><a href=""> Categories </a></li>
                    <li><a href=""> Orders </a></li>
                    <li><a href=""> Checkout </a></li>
                    <li><a href=""><i className="fal fa-shopping-cart"><span className='cart-count'>0</span></i></a></li>
                    <li><a href=""><i className="far fa-heart wishlist"></i></a></li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar