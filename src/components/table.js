import React from "react"
export default ({ headers, body }) => {
  return (
    <div className="mx-4 md:mx-0 my-4 table-container">
      <div className="table">
        <div className="row header">{headers}</div>
        {body}
      </div>
    </div>
  )
}
