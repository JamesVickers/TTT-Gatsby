import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerStyles from "../components/styles/banner"
import HexFallingLeft from "../components/hexFallingLeft"
import Footer from "../components/footer"
import BannerImageBird from "../images/banner-img-bird.png"

const News = (props, { data }) => (
  <Layout>
    <SEO title="about" />
    <BannerStyles>
      <img
        src={BannerImageBird}
        alt="A small songbirn perched on a log"
        aria-hidden="true"
      />
      <h2 tabindex="0">News</h2>
    </BannerStyles>

    <FontAwesomeIcon
      icon={faAngleDoubleDown}
      style={{ height: "50px", width: "50px", color: "#FFE000" }}
    />

    <p>We are constantly updating this page with our latest news and ideas.</p>
    <p>
      Follow the Treetops Tech Facebook page
      <a
        href="https://www.facebook.com/treetopstech"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      to keep up to date with all our latest announcements, or simply scroll
      through the feed below.
    </p>

    <StaticQuery
      query={graphql`
        query CloudinaryImageQuery {
          sitePlugin {
            id
          }
          allCloudinaryMedia {
            nodes {
              secure_url
            }
          }
        }
      `}
      render={data => (
        <header>
          <h2>{data.sitePlugin.id}</h2>
          <h2>{data.allCloudinaryMedia.nodes[0].secure_url}</h2>
        </header>
      )}
    />

    <HexFallingLeft />

    <Footer />
  </Layout>
)

export default News
