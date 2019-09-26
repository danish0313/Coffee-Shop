import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slideshow from "../components/sections/slideshow/slideshow"
import Story from "../components/sections/story/story"
import OurMenu from "../components/sections/ourMenu/ourmenu"
import   OurProducts from "../components/sections/ourproducts/ourproduct"
import { graphql } from "gatsby"
import Contact from '../components/sections/contact/contact'
import Footer from '../components/sections/footer/footer.js'
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
<Slideshow/>
<Story name='About Us' link="/about"/>
<OurMenu items={data.menu}/>
<OurProducts />
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
