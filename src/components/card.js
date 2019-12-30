import React from "react"

export default ({ header, body }) => {
  return (
    <div className="border rounded shadow">
      <h3 className="border-b p-3 primary-bg text-center rounded-tr rounded-tl">
        <i className="text-white">{header}</i>
      </h3>
      <p className="p-3">{body}</p>
    </div>
  )
}
