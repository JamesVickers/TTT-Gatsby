import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerStyles from "../components/styles/banner"
import Footer from "../components/footer"
import BannerImageGrass from "../images/banner-img-grass.png"

const Work = props => (
  <Layout>
    <SEO title="work" />
    <BannerStyles>
      <img
        src={BannerImageGrass}
        alt="close up of fern leaves"
        aria-hidden="true"
      />
      <h2 tabindex="0">Work</h2>
    </BannerStyles>
    <Footer />
  </Layout>
)

export default Work
