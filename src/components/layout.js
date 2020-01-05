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
        <footer className="alternative-bg py-8">
          <div className="container mx-auto text-white flex flex-col sm:flex-row items-center justify-between">
            <h2>Contact Us</h2>
            <div>
              <div className="flex -mx-2">
                <div className="p-2">
                  <FontAwesomeIcon color={"white"} icon={"envelope"} />
                </div>
                <a
                  className="p-2 text-white no-underline font-normal"
                  href="mailto:markolewis@gmail.com"
                >
                  markolewis@gmail.com
                </a>
              </div>
              <div className="flex -mx-2">
                <div className="p-2">
                  <FontAwesomeIcon color={"white"} icon={"phone"} />
                </div>
                <a
                  className="p-2 text-white no-underline font-normal"
                  href="tel:857-231-2756"
                >
                  857-231-2756
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
