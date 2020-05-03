import React, { useMemo } from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1></h1>
      <div>
        <div className="text-green-700 text-center my-64">
          <p>Welcome to Luckzz Designs</p>
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
