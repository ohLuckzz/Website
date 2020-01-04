import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ header, body, icon }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex items-end -mx-2 mb-2">
        <div className="px-2 text-2xl leading-none">
          <FontAwesomeIcon color={"red"} fixedWidth icon={icon} />
        </div>
        <div className="px-2">
          <h4 className="leading-none alternative-color">{header}</h4>
        </div>
      </div>
      <div style={{ marginLeft: "47px" }}>
        <p className="text-black">{body}</p>
      </div>
    </div>
  )
}
