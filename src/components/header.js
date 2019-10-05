
import PropTypes from "prop-types"
import React , {useState , useEffect} from "react"
import Logo from "../images/coffee.svg"
import {Link } from "gatsby"
import { FaShoppingCart ,FaHome ,FaUserAlt , FaMobileAlt } from 'react-icons/fa';
import classes from "./header.module.css";

const Header = ({ siteTitle }) =>  {

const [Show, setShow] = useState(false);

useEffect( () => {

  // for log to shrink
  window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        document.getElementById("logo").style.width = '40px';
            document.querySelector('.navbar-custom').style.background = 'rgba(0,0,0,0.5)';
      }else{
          document.getElementById("logo").style.width = '70px';
            document.querySelector('.navbar-custom').style.background = 'rgb(84, 48,0, 0.7)';
      }
    }




},[])



  return(

<div className="container-fluid">

<nav className="navbar navbar-expand-sm navbar-custom fixed-top">
    <a className="navbar-brand" href="/">
<img src={Logo} id="logo" alt="coffee" width="70px"/> <span style={{color:'white', padding:'5px'}}>

   Dream Bean Coffee Shop
</span>



    </a>

    <button id={classes.menu}  onClick={() => setShow(!Show)} className="navbar-toggler"  type="button"
      data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"><FaMobileAlt  style={{fontSize:'35px' , color:'white'}}/></span>

    </button>


<div className={Show === false  ? 'collapse navbar-collapse' : 'collapse navbar-collapse show'} id="navbarNavAltMarkup">
      <div className="navbar-nav ml-auto mr-5 ">
        <Link to="/" className="nav-item nav-link active" ><FaHome  style={{fontSize:'25px'}}/> </Link>
        <Link to ="/about" className="nav-item nav-link" ><FaUserAlt  style={{fontSize:'25px'}}/></Link>
      <Link to ="/cart" className="nav-item nav-link snipcart-checkout" >
      <FaShoppingCart style={{fontSize:'25px'}}/> </Link>


      </div>
    </div>
  </nav>

  </div>

)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
