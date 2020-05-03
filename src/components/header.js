import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import Logo from "../images/Logo.jpg"

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [fixed, setFixed] = useState(false)
  const [drawer, setDrawer] = useState("hidden")

  const scrollFn = () => {
    const headerPosition = document.querySelector("header").offsetHeight
    const shouldBeFixed = window.pageYOffset > headerPosition
    setFixed(shouldBeFixed)
  }

  const onHover = () => {
    const drawerStatus = drawer === "hidden" ? "block" : "hidden"
    setDrawer(drawerStatus)
  }

  // useEffect(() => {
  //   window.addEventListener("scroll", scrollFn)

  //   return () => {
  //     window.removeEventListener("scroll", scrollFn)
  //   }
  // }, [])

  const getLinks = () => {
    return (
      <div className="flex">
        <Link className="my-4 text-green-700 mx-4 no-underline" to="/">
          home
        </Link>
        <Link className="my-4 text-green-700 mx-4 no-underline" to="/about/">
          about
        </Link>
        <div
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          className=" relative mx-4"
        >
          <p className="mt-4 text-green-700 no-underline font-bold">work</p>
          <div
            className={`text-green-700 absolute font-bold no-underline ${drawer}`}
          >
            <Link className="no-underline" to="/digital/">
              <p>digital</p>
            </Link>
            <Link className="no-underline" to="/physical/">
              <p>physical</p>
            </Link>
          </div>
        </div>
        <Link className="my-4 text-green-700 mx-4 no-underline" to="/sayhello/">
          say hello
        </Link>
        <Link
          className="my-4 text-green-700 mx-4 no-underline"
          to="/exhibition/"
        >
          exhibition
        </Link>
      </div>
    )
  }

  const renderDesktop = links => {
    return <div className="text-green-700 -mx-4 hidden sm:block">{links}</div>
  }

  const renderMobile = links => {
    return (
      <>
        <div className="block sm:hidden -mx-4 cursor-pointer">
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
    <header className={`${fixed ? `fixed` : `absolute`}  z-20 w-full`}>
      <div className="relative items-center flex flex-col justify-between container py-4 px-10 m-center sm:px-0">
        <Link to="/">
          <img
            alt={"High Country Havoc Logo"}
            className="md-img object-cover"
            src={Logo}
          />
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
