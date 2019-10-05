import React from 'react'
import classes from './contact.module.css';

/* eslint-disable */
const Contact = (props) => {
  return (
    <div className="container" className={classes.contact}>

      <center>
          <section  className={classes.menu}>
          <h2 className={classes.heading}>   Contact Us!</h2>
      <hr className={classes.hr}/>

      </section>
      </center>

      <div className="row" >

    <div className="col-xm-12 col-sm-12 col-md-12 col-lg-12 mx-auto">

      <form  action="https://formspree.io/salman030151@gmail.com" method="POST" className={classes.contactform}>

        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" required="required" placeholder="Your name.."/> <br/>

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" required="required" placeholder="Your last name.."/> <br/>
        <label id={classes.text} for="subject">Subject</label>
        <textarea  name="subject" cols='50' required="required" rows = '4' placeholder="Write something.."/> <br/>
        <button type="submit" className={classes.btn}>Submit</button>

      </form>

    </div>
    </div>

  </div>

  )
}

export default Contact
