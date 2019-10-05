import React from 'react'
import classes from './ourMenu.module.css'
import Items from '../items/items'
const Ourmenu = (props) => {



  return (

<>
<div className="container">
  <div className="row">

<div className="col-xm-12 col-sm-12 col-md-12 col-lg-12 ">

<center>
    <section  className={classes.menu}>
<h2 className={classes.heading}>  Our Menu ! </h2>
<hr className={classes.hr}/>

</section>
</center>
</div>
</div>


</div>

<Items datas={props.items}/>


</>
  )
}

export default Ourmenu;
