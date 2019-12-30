import React, {
  useMemo,
  useState,
  useLayoutEffect,
  useRef,
  useEffect,
} from "react"

export default ({ title, body, id, img }) => {
  const [containerHeight, setContainerHeight] = useState(0)
  const [cardHeight, setCardHeight] = useState(false)
  const [fullHeight, setFullHeight] = useState(0)

  useLayoutEffect(() => {
    const ourPurposeCard = 60 - document.querySelector(`#${id}`).clientHeight
    setFullHeight(ourPurposeCard)
    setCardHeight(ourPurposeCard)

    const _containerHeight =
      window.innerWidth < 500 ? window.innerWidth / 1.5 : window.innerWidth / 2
    setContainerHeight(_containerHeight)
  }, [])

  const ok = () => {
    setCardHeight(0)
  }
  const b = () => {
    setCardHeight(fullHeight)
  }

  return useMemo(() => {
    return (
      <div
        onMouseOver={ok}
        onMouseOut={b}
        className="w-full md:w-1/3 relative"
        style={{ height: containerHeight, maxHeight: "650px" }}
      >
        <div className="home-indv-card-container overflow-hidden">
          <div
            id={id}
            className="bg-white home-indv-card"
            style={{
              bottom: `${cardHeight}px`,
              zIndex: cardHeight === 0 ? 1 : 0,
            }}
          >
            <div className="text-center text-white primary-bg py-3">
              <h3>
                <i>{title}</i>
              </h3>
            </div>
            <p className="p-4">{body}</p>
          </div>
        </div>
        <div
          className="home-indv-pic-overlay"
          style={{
            opacity: cardHeight === 0 ? 0.4 : 0,
          }}
        />
        <div className={img} style={{ height: "100%" }} />
      </div>
    )
  }, [{ ...cardHeight }])
}
