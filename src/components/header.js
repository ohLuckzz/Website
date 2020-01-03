import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import Logo from "../images/logo.png"

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
        <Link className="my-4 text-white mx-4" to="/schedule/">
          Schedule
        </Link>
        <Link className="my-4 text-white mx-4" to="/approach/">
          Approach
        </Link>
        <Link className="my-4 text-white mx-4" to="/team/">
          Team
        </Link>
        <Link className="my-4 text-white mx-4" to="/coaches/">
          Coaches
        </Link>
        <Link className="my-4 text-white mx-4" to="/volunteers/">
          Volunteers
        </Link>
      </>
    )
  }

  const renderDesktop = links => {
    return <div className="text-white -mx-4 hidden sm:block">{links}</div>
  }

  const renderMobile = links => {
    return (
      <>
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="block sm:hidden -mx-4 cursor-pointer"
        >
          <FontAwesomeIcon
            color={"white"}
            size={"2x"}
            className="mx-4"
            icon={"bars"}
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
      } primary-bg shadow-md z-20 w-full`}
    >
      <div className="relative items-center flex justify-between container py-4 px-10 m-center sm:px-0">
        <Link to="/" className="md-img">
          <img src={Logo} />
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
