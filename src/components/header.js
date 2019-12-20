import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-between`
      }}
    >
      <h4 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h4>
      <div style={{color: 'white', margin: `0 -1rem`}}>
        <Link style={{color: 'white'}} className="mx-1" to="/schedule/">Schedule</Link>
        <Link style={{color: 'white'}} className="mx-1" to="/approach/">Approach</Link>
        <Link style={{color: 'white'}} className="mx-1" to="/teams/">Teams</Link>
        <Link style={{color: 'white'}} className="mx-1" to="/coaches/">Coaches</Link>
        <Link style={{color: 'white'}} className="mx-1" to="/volunteers/">Volunteers</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
