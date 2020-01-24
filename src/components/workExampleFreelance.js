import React from "react"
import styled from "styled-components"
import CardStyles from "./styles/card"

const ulStyles = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const WorkExampleFreelance = () => (
  <div>
    <p>Our team has capacity to collaborate on your existing projects.</p>
    <p>We have expertise in the following areas:</p>

    <CardStyles>
      <ulStyles>
        <li>HTML, CSS and JavaScript</li>
        <li>React, Angular and Node.js</li>
        <li>Wordpress, Analytics and Confirmit</li>
      </ulStyles>
    </CardStyles>

    <p>Get in touch for more information about what we have to offer.</p>
  </div>
)

export default WorkExampleFreelance
