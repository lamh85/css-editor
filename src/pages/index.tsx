import { useState, useRef } from 'react'
import { RadiusFormFieldGroup } from './RadiusFormFieldGroup'

type StyleStateT = { [key: string]: string }

export default function Home() {
  // const rectangleRef = useRef(null)
  const [rectangleStyle, setRectangleStyle] = useState<StyleStateT>({})
  const [didInitializeRadius, setDidInitializeRadius] = useState(false)

  const handleRectangleLoad = (element: HTMLDivElement) => {
    if (!element || didInitializeRadius) {
      return
    }

    const radiusProperties = Object.keys(element.style).filter((key) => {
      const keyNormalized = key.toLowerCase()
      return (
        keyNormalized.includes('radius') && !keyNormalized.includes('webkit')
      )
    })

    const newStyle: { [key: string]: string } = {}
    radiusProperties.forEach((property) => (newStyle[property] = ''))
    setRectangleStyle(newStyle)
    setDidInitializeRadius(true)
  }

  // TODO: append "%" to css property value
  const handleRadiusFormChange = (styleProperty: string, value: string) => {
    const newStyle = { ...rectangleStyle }
    newStyle[styleProperty] = value
    setRectangleStyle(newStyle)
  }

  return (
    <>
      <div
        className="canvas"
        style={{
          height: 500,
          width: 1000,
          background: 'lightgrey',
          padding: 50,
        }}
      >
        <div
          ref={(element) => element && handleRectangleLoad(element)}
          className="rectangle"
          style={{
            height: 100,
            width: 100,
            background: 'white',
            marginBottom: 50,
            ...rectangleStyle,
          }}
        ></div>
        <>
          {Object.keys(rectangleStyle).map((styleProperty) => {
            return (
              <RadiusFormFieldGroup
                key={styleProperty}
                styleProperty={styleProperty}
                inputValue={rectangleStyle[styleProperty]}
                changeHandler={handleRadiusFormChange}
              />
            )
          })}
        </>
      </div>
    </>
  )
}
