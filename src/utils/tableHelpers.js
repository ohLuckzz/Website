import React from "react"

export const createHeaders = headers => {
  return headers.map(header => {
    return (
      <div key={header} className="cell">
        {header !== "_" ? header : ""}
      </div>
    )
  })
}

const createCells = (hash, index, paddedCell) => {
  const cells = []
  for (let key in hash) {
    const val = hash[key]
    const style = {}
    if (paddedCell) {
      style.paddingLeft = "10px"
      style.paddingRight = "10px"
    }
    const cell = (
      <div
        key={`${key}-${index}`}
        style={style}
        className="cell"
        data-title={key}
      >
        {val}
      </div>
    )

    cells.push(cell)
  }

  return cells
}

export const createRows = (array, title, paddedCell) => {
  return array.map((hash, i) => {
    const cells = createCells(hash, i, paddedCell)
    return (
      <div className="row" key={`${title}-${i}`}>
        {cells}
      </div>
    )
  })
}
