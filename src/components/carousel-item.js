import React from "react"

export default ({ top, bottom, image }) => {
  return (
    <div className="w-full relative">
      {top && <div className="absolute z-40 text-white home-text-container">
        <h5>
          <i>{top}</i>
        </h5>
        <h1 className="antialiased shadow home-bottom-text">{bottom}</h1>
      </div>}
      <div className="home-img-overlay home-img-height" />
      <div className={`w-full home-img-height ${image}`} />
    </div>
  )
}
