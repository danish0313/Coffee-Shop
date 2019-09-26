import React from 'react'
import Header from '../components/header'
import Story from '../components/sections/story/story.js'
import Footer from '../components/sections/footer/footer.js'
import classes from './about.module.css'
const About = (props) => {
  return (
<>
    <Header/>
<div className= 'container-fluid'>
<div className= 'row'>

<div className= 'col-sm-12 col-xs-12 col-md-12 col-xl-12 text-center'  id={classes.back}>

<h2 className={classes.heading}>  About Us!</h2>

</div>
</div>


</div>
<Story name='Go to Home' link="/" />

<Footer/>
    </>
  )
}

export default About;
