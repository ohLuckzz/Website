import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from "../components/table"

import { createHeaders, createRows } from "../utils/tableHelpers"

const Teams = () => {
  const headers = [
    "Player Name & Number",
    "Picture",
    "Favorite Players",
    "Baseball Goals",
  ]

  return (
    <Layout>
      <SEO title="Teams" />
      <div className="container mx-auto overflow-hidden">
        <Table headers={createHeaders(headers)} body={[]} />
      </div>
    </Layout>
  )
}

export default Teams
