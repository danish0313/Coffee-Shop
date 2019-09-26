import React from 'react' ;
import classes from './footer.module.css';

const Footer = (props) => {

return (
<>
<div className="container-fluid">

<div className="row">

<div className="col-sm-12 col-xs-12 col-md-6 col-xl-6 text-center"  id={classes.footer}>

<h4>  All Right Reserved &copy; </h4>
<h5>2019 </h5>

</div>


<div className="col-sm-12 col-xs-12 col-md-6 col-xl-6 text-center"  id={classes.footer}>
<h4>Site By  : Danish Khan &#128522; </h4>

</div>

</div>


</div>

</>

)


}

export default Footer;
