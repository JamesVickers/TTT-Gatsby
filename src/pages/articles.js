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
import BannerImageBook from "../images/banner-img-book.png"

const Articles = props => (
  <Layout location={props.location}>
    <SEO title="about" />
    <BannerStyles>
      <img
        src={BannerImageBook}
        alt="an open book on in a grassy field"
        aria-hidden="true"
      />
      <h2 tabindex="0">Articles</h2>
    </BannerStyles>

    <FontAwesomeIcon
      icon={faAngleDoubleDown}
      style={{ height: "50px", width: "50px", color: "#FFE000" }}
    />

    <p id="articlesListStart">
      Click on one of the titles below to read the full post. New articles added
      regularly for you to enjoy.
    </p>

    <CardStyles>
      <Link to="/articles/article_1">
        <span>Article &#35;1</span>&nbsp;There are not enough Tech blogs in the
        world
      </Link>
    </CardStyles>
    <CardStyles>
      <Link to="/articles/article_2">
        <span>Article &#35;2</span>&nbsp;How to improve your programming skils
      </Link>
    </CardStyles>
    <CardStyles>
      <Link to="/articles/article_3">
        <span>Article &#35;3</span>&nbsp;Reasons to start a Tech blog
      </Link>
    </CardStyles>
    <HexFallingLeft />

    <Footer path={props.location.pathname} />
  </Layout>
)

export default Articles
