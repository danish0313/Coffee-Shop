import React from 'react'
import classes from './ourproducts.module.css'
import Product  from  './Product'
import { StaticQuery , graphql } from "gatsby"

const products = graphql`
{
  pro: allContentfulProducts {
    edges {
      node {
        id
        title
        price
        image {
          fluid(maxWidth: 425) {
            src
          }
        }
      }
    }
  }
}


`;









const Ourproducts = (props) => {


  return (

<>
<div className="container-fluid" style={{backgroundColor:'#ccc'}}>
  <div className="row">

<div className="col-xm-12 col-sm-12 col-md-12 col-lg-12 ">

<center>
    <section  className={classes.Products}>
<h2 className={classes.heading}>  Our Products ! </h2>
<hr className={classes.hr}/>
</section>
</center>
</div>
</div>

<StaticQuery  query={products} render = {data => {
return (
  <div className="row">
{data.pro.edges.map( ({node}) => {

return (
   <Product node={node} key={node.id}/>
)

}

)}

     </div>
)}}/>
</div>

</>
  )
}

export default Ourproducts;
