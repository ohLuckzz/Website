import React from "react"

export default ({ src }) => {
  return (
    <div
      className="bg-white rounded xl-img px-2 py-3 flex m-3"
      style={{ height: "100px" }}
    >
      <img className="object-contain" src={src} />
    </div>
  )
}
