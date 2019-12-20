import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Teams = () => (
  <Layout>
    <SEO title="Teams" />
    <table>
      <thead>
        <tr>
          <th>Player Name</th>
          <th>Number</th>
          <th>Picture</th>
          <th>Favorite Players</th>
          <th>Favorite Quote</th>
          <th>Favorite Books</th>
          <th>Baseball Goals for 2020</th>
          <th>Life Goals for 2020</th>
        </tr>
      </thead>
    </table>

  </Layout>
)

export default Teams
