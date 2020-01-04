import React from "react"
import IconBlock from "./icon-block"

export default ({ values, image }) => {
  return (
    <div className="p-10 sm:p-6">
      <IconBlock header={values.header} icon={values.icon} body={values.body} />
    </div>
  )
}
