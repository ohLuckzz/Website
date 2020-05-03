import React, { useMemo } from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1></h1>

      <form>
        <div className="w-1/3 mx-auto mt-32 text-center">
          <label for="name">First Name</label>
          <input
            type="text"
            name="name"
            className="border-solid border-4 border-green-700 w-full"
          />
          <label for="name">Last Name</label>
          <input
            type="text"
            name="name"
            className="border-solid border-4 border-green-700 w-full"
          />
          <label for="name">Email</label>
          <input
            type="text"
            name="name"
            className="border-solid border-4 border-green-700 w-full"
          />
          <label for="name">Subject</label>
          <input
            type="text"
            name="name"
            className="border-solid border-4 border-green-700 w-full"
          />
          <label for="name">Message</label>
          <textarea
            type="text"
            name="name"
            className="border-solid border-4 border-green-700 w-full"
          />
        </div>
      </form>
    </Layout>
  )
}

export default IndexPage
