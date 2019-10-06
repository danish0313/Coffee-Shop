import React  from 'react'
import classes from './product.module.css'
const  Product = (props) => {


return(
  <div className="col-xm-12 col-sm-6 col-md-4 col-lg-4" id={classes.box} key={props.node.id}>
    <div className="card text-center" id={classes.box} style={{border:'1px solid #ccc', marginTop:'100px' }} >

      <img className="card-img-top" id={classes.size} src={props.node.image.fluid.src} alt={props.node.title}/>
      <span className="card-top"  id= {classes.title}> {props.node.title}</span>

      <div className="card-body" style={{color:'black'}}>
        <h3 className="card-title">{props.node.title}</h3>
        <button className="btn btn snipcart-add-item"
     data-item-id={props.node.id}
     data-item-name={props.node.title}
     data-item-price={props.node.price}
     data-item-image={props.node.image.fluid.src}
      data-item-url= "https://danish0313.github.io/Coffee-Shops/"
     id = {classes.btn}> Add to Cart! </button>
      </div>
    </div>

    </div>

)
};
export default Product
