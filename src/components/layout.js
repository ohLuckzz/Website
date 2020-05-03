/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Header from "./header"
import "../utils/fontawesome"
import "./table.css"
import "./index.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        className="min-h-screen flex flex-col justify-between"
        style={{ paddingTop: "142px" }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
