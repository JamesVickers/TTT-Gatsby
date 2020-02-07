import React from "react"
import { Link } from "gatsby"
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
  <Layout location={props.location}>
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

    <p>
      We offer a wide range of products and services, which we price according
      to your specific requirements.
    </p>
    <p>
      For tailor-made solutions, including custom built sites, applications and
      freelance work rates, it's best to contact us for a free quote:
    </p>

    <CardStyles>
      <ul>
        <li>
          Email or call us using the contact details in the footer of our
          website<a href="#footer">here</a>
        </li>
        <li>
          Contact us using the contact form on our website
          <Link to="/contact">here</Link>
        </li>
        <li>
          Drop us a private message on our Treetops Tech Facebook page
          <a
            href="https://www.facebook.com/treetopstech"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </li>
      </ul>
    </CardStyles>

    <p>Thank you.</p>

    <HexFallingLeft />

    <Footer path={props.location.pathname} />
  </Layout>
)

export default Pricing
