import React from "react"
import IconBlock from "./icon-block"

export default ({ values }) => {
  return (
    <div className="px-10 py-4 sm:p-6">
      <IconBlock header={values.header} icon={values.icon} body={values.body} />
    </div>
  )
}
