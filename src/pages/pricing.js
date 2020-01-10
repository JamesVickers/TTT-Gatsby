import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerStyles from "../components/styles/banner"
import CardStyles from "../components/styles/card"
import HexFallingLeft from "../components/hexFallingLeft"
import Footer from "../components/footer"
import BannerImageTreeAbove from "../images/banner-img-tree-above.png"

const Pricing = props => (
  <Layout>
    <SEO title="about" />
    <BannerStyles>
      <img
        src={BannerImageTreeAbove}
        alt="close up of a fir tree viewed from above"
        aria-hidden="true"
      />
      <h2 tabindex="0">Pricing</h2>
    </BannerStyles>

    <FontAwesomeIcon
      icon={faAngleDoubleDown}
      style={{ height: "50px", width: "50px", color: "#FFE000" }}
    />

    <CardStyles>
      <h2>Our pricing</h2>
      <p>
        We offer a wide range of products and services, which we price according
        to your specific requirements.
      </p>
      <p>
        For tailor-made solutions, including custom built sites, applications
        and freelance work rates, it's best to contact us for a free quote:
      </p>
      <ul>
        <li>
          Email or call us using the contact details in the footer of our
          website<a href="#footer">here</a>
        </li>
        <li>
          Contact us using the contact form on our website
          <a href="/" target="_blank">
            here
          </a>
        </li>
        <li>
          Drop us a private message on our Treetops Tech Facebook page
          <a href="https://www.facebook.com/treetopstech" target="_blank">
            here
          </a>
        </li>
      </ul>
      <p>Thank you.</p>
    </CardStyles>

    <HexFallingLeft />

    <Footer />
  </Layout>
)

export default Pricing
