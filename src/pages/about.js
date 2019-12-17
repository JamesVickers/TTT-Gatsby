import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollImage from "../components/scrollImage"
import Card from "../components/card"
import Footer from "../components/footer"

/*
if ((SEO.props.title = "about")) {
  let mainTitle = SEO.props.title
}
*/

const About = props => (
  <Layout>
    <SEO title="about" />
    <h1>mainTitle}About!</h1>
    <p>We build and host Websites.</p>
    <p>We build Applications.</p>
    <p>We offer Freelance Development work.</p>
    <ScrollImage />
    <Card />
    <Footer />
  </Layout>
)

export default About
