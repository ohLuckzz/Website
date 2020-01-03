import React from "react"

export default ({ src, height, text }) => {

  const heightMap = {
    'hr': '100px',
    'triple': '85px',
    'double': '75px'
  }

  const _height = heightMap[height]
  const img = height === "hr" ? 'xl-img' : 'lg-img'

  return (
    <div
      className={`bg-white rounded ${img} px-2 py-3 flex m-3`}
      style={{ height: _height }}
    >
      {src && <img className="object-contain" src={src} />}
      {text && <p className="text-center font-bold">{text}</p>}
    </div>
  )
}
