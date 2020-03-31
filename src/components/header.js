import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import Logo from "../images/Logo.jpg"

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [fixed, setFixed] = useState(false)

  const scrollFn = () => {
    const headerPosition = document.querySelector("header").offsetHeight
    const shouldBeFixed = window.pageYOffset > headerPosition
    setFixed(shouldBeFixed)
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollFn)

    return () => {
      window.removeEventListener("scroll", scrollFn)
    }
  }, [])

  const getLinks = () => {
    return (
      <>
        <Link className="my-4 text-green-700 mx-4 no-underline" to="/home/">
          home
        </Link>
        <Link className="my-4 text-green-700 mx-4 no-underline" to="/about/">
          about
        </Link>
        <Link className="my-4 text-green-700 mx-4 no-underline" to="/contact/">
          say hello
        </Link>
        <Link className="my-4 text-green-700 mx-4 no-underline" to="/work/">
          work
        </Link>
        <Link className="my-4 text-green-700 mx-4 no-underline" to="/coaches/">
          Coaches
        </Link>
      </>
    )
  }

  const renderDesktop = links => {
    return <div className="text-green-700 -mx-4 hidden sm:block">{links}</div>
  }

  const renderMobile = links => {
    return (
      <>
        <div
          className="block sm:hidden -mx-4 cursor-pointer"
        >
          <FontAwesomeIcon
            color={"white"}
            size={"2x"}
            className="mx-4"
            icon={"bars"}
            onClick={() => setMenuOpen(!menuOpen)}
            onKeyDown={() => setMenuOpen(!menuOpen)}
          />
        </div>
        <div
          className={`${!menuOpen &&
            `hidden`} flex shadow absolute header-nav w-full primary-bg z-20`}
        >
          {links}
        </div>
      </>
    )
  }

  return (
    <header
      className={`${
        fixed ? `fixed` : `absolute`
        }  z-20 w-full`}
    >
      <div className="relative items-center flex flex-col justify-between container py-4 px-10 m-center sm:px-0">
        <Link to="/" >
          <img alt={"High Country Havoc Logo"} className="md-img object-cover" src={Logo} />
        </Link>
        {renderDesktop(getLinks())}
        {renderMobile(getLinks())}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
