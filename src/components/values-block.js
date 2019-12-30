import React from "react"
import IconBlock from "./icon-block"

export default ({ values, image }) => {
  return (
    <div className="px-12 pb-8 sm:px-6">
      <IconBlock header={values.header} icon={values.icon} body={values.body} />
    </div>
  )
}
