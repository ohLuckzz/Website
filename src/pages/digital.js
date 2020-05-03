import React, { useMemo } from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import jt from "../images/jt.jpg"
import app from "../images/appstate.jpg"
import car from "../images/carolinas.jpg"
import CYP from "../images/Chase Young Pats.jpg"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1></h1>
      <div className="flex my-24 flex-wrap">
        <div className=" w-1/3 items-center p-16">
          <img src={jt} />
        </div>
        <div className=" w-1/3 items-center p-16">
          <img src={app} />
        </div>
        <div className=" w-1/3 items-center p-16">
          <img src={car} />
        </div>
        <div className=" w-1/3 items-center p-16">
          <img src={CYP} />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
