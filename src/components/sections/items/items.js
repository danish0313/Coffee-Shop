import React from 'react'

import classes from './items.module.css'


class Items  extends React.Component {


state = {

items : this.props.datas.edges,
filteritems : this.props.datas.edges,
category : []

}


componentDidMount() {
  // getting  categories from items

  let category = this.state.items.map( ({node}) =>  {
        return node.category
  });

let uniquecat = new Set(category);
let categories = Array.from(uniquecat);

let uniqueitems = ['All' , ...categories];

  this.setState({
category : uniqueitems

  })

}



//for filtering of categories
 FilteringCategories = (category) => {
if(category === 'All') {

this.setState({
    items : this.props.datas.edges
    })
}

else if (category === 'tea' || category === 'coffee' || category === "juice") {

  let uniqueCategory = this.state.filteritems.filter( ({node}) => node.category === category)


this.setState({

items: uniqueCategory

})


}

 }



  render () {


// for  categories
let categories = this.state.category.map(category =>  (
<>
  <span key={category} onClick={()=> this.FilteringCategories(category)}>{category} </span>

</>

))


// for items to display
   let items = this.state.items.map( ({node}, index ) =>  (


  <div className="col-xm-12 col-sm-12 col-md-6 col-lg-6" key={node.id}>
    <div className={classes.box}>
    <div className={classes.title}><h6> {node.title}</h6></div>
  <section className= {classes.inner}>

  <div>
      <img src ={node.image.fixed.src} alt ={node.image } className={classes.images} />
    <p style={{color:'#c66c0b'}}>{node.des.des}
          <span className={classes.category}>{node.category}  </span>
    </p>

  </div>

  <div className={classes.price}>
    <p>${node.price}  </p>
  </div>






            </section>
            </div>
    </div>

    ))



  return (
    <>
    <center>
     <div className={classes.filter}>
         {categories }
     </div>
     </center>
 <div className="container text-center">
 <div className="row">

{items}

</div>
</div>
</>
      )


  }
}



export default Items;
