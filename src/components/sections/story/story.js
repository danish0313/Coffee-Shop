import React from 'react'
import {Link } from "gatsby"
import classes from './story.module.css'
const Story = (props) => {
  return (
    <section  className={classes.story}>
<h2 className={classes.heading}>  Our Story ! </h2>
<hr className={classes.hr}/>

<div className="row" style={{texAlign: 'center'}}>

  <center>
  <div className="col-xm-10 col-sm-10 col-md-10 col-lg-10 ">

<p className={classes.p}>  is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book. It has
survived not only five centuries, but also the leap into electronic typesetting,
 remaining essentially unchanged.

 is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type
   specimen book. It has
 survived not only five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged.

  </p>

<Link to={props.link}><button type="button" className="btn btn-outline"  id={classes.btn}>{props.name}</button> </Link>


</div>
</center>
</div>
     </section>

  )
}

export default Story;
