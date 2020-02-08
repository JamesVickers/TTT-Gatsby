/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"

//export must be ES6 not CommonJS to work
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="cookies"
      type="text/javascript"
      src="https://cc.cdn.civiccomputing.com/8/cookieControl-8.x.min.js"
    />,
    <script key="cookiejs" type="text/javascript" src="/cookie.js"></script>,
  ])
}
