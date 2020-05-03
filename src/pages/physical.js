import React, { useMemo } from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import front from "../images/puzzle front.jpg"
import half from "../images/puzzle half.jpg"
import side from "../images/puzzle side.jpg"
import bw from "../images/blue world.jpg"
import fh from "../images/football helm.jpg"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1></h1>
      <div className="flex my-24 flex-wrap">
        <div className=" w-1/3 items-center p-16 flex">
          <img src={front} className="object-cover w-full h-full" />
        </div>
        <div className=" w-1/3 items-center p-16 flex">
          <img src={half} className="object-cover w-full h-full" />
        </div>
        <div className=" w-1/3 items-center p-16 flex">
          <img src={side} className="object-cover w-full h-full" />
        </div>
        <div className=" w-1/3 items-center p-16 flex">
          <img src={bw} className="object-cover w-full h-full" />
        </div>
        <div className=" w-1/3 items-center p-16 flex">
          <img src={fh} className="object-cover w-full h-full" />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
