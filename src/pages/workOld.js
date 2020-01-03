import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerStyles from "../components/styles/banner"
import CardStyles from "../components/styles/card"
import Footer from "../components/footer"
import BannerImageGrass from "../images/banner-img-grass.png"
import BrewcesHexImage from "../images/brewces-button.svg"
import BochiBochiHexImage from "../images/bochi-bochi-button.svg"
import ApplicationsHexImage from "../images/applications-button.svg"
import FreelanceHexImage from "../images/freelance-button.svg"

const WorkTilesDiv = styled.div`
  max-width: 95%;
  font-family: "Overpass", sans-serif;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  div {
    max-width: 200px;
    margin: 20px;
    &:hover {
      cursor: pointer;
      color: ${props => props.theme.colorSecondary};
      transform: scale(1.05);
    }
    img {
      margin: 20px;
    }
  }
`

const WorkOld = props => (
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
    <FontAwesomeIcon
      icon={faAngleDoubleDown}
      style={{ height: "50px", width: "50px", color: "#FFE000" }}
    />
    <p class="work-intro-text blur-focus" tabindex="0">
      Click the links below to explore what we offer
    </p>
    <WorkTilesDiv>
      <CardStyles>
        <img
          src={BrewcesHexImage}
          alt="link to page contanining information about Business websites by Treetops Tech"
        />
        <h3>Business websites</h3>
      </CardStyles>
      <CardStyles>
        <img
          src={BochiBochiHexImage}
          alt="link to page contanining information about Charity websites by Treetops Tech"
        />
        <h3>Charity websites</h3>
      </CardStyles>
      <CardStyles>
        <img
          src={ApplicationsHexImage}
          alt="link to page contanining information about Applications built by Treetops Tech"
        />
        <h3>Applications</h3>
      </CardStyles>
      <CardStyles>
        <img
          src={FreelanceHexImage}
          alt="link to page contanining information about Freelance web development offered by Treetops Tech"
        />
        <h3>Freelance web development</h3>
      </CardStyles>
    </WorkTilesDiv>
    <Footer />
  </Layout>
)

export default WorkOld
