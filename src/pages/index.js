import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slideshow from "../components/sections/slideshow/slideshow"
import Story from "../components/sections/story/story"
import Ourmenus from "../components/sections/ourmenu/Ourmenu"
import   Ourproductss from "../components/sections/ourproducts/Ourproduct"
import { graphql } from "gatsby"
import Contact from '../components/sections/contact/contact'
import Footer from '../components/sections/footer/footer.js'
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
<Slideshow/>
<Story name='About Us' link="/about"/>
<Ourmenus items={data.menu}/>
<Ourproductss />
<Contact/>
<Footer/>
  </Layout>
)



export const data = graphql`
{
  menu: allContentfulItems {
    edges {
      node {
        id
        des {
          des
        }
        price
        title
        category
        image {
          fixed(width: 50, height: 50) {
            src
          }
        }
      }
    }
  }
}
`













export default IndexPage
