import React from "react"

export default ({ title }) => {
  return (
    <div className="flex flex-wrap -mx-4 items-center justify-center">
      {/* <div className="px-4 py-2">
        <img className="md-img" src={Logo} />
      </div> */}
      <div className="px-4 py-2">
        <h2 className="text-center">{title}</h2>
      </div>
    </div>
  )
}
