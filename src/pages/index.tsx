import { useState, useRef } from 'react'
import { RadiusFormFieldGroup } from './RadiusFormFieldGroup'

type StyleStateT = { [key: string]: string }

export default function Home() {
  // const rectangleRef = useRef(null)
  const [rectangleStyle, setRectangleStyle] = useState<StyleStateT>({})

  const handleRectangleLoad = (element: HTMLDivElement) => {
    if (!element) {
      return
    }

    const radiusProperties = Object.keys(element.style).filter((key) =>
      key.toLowerCase().includes('radius')
    )

    const newStyle: { [key: string]: string } = {}
    radiusProperties.forEach((property) => (newStyle[property] = ''))
    console.log('handle load ===')
    setRectangleStyle(newStyle)
  }

  // TODO: append "%" to css property value
  const handleRadiusFormChange = (styleProperty: string, value: string) => {
    const newStyle = { ...rectangleStyle }
    newStyle[styleProperty] = value
    // setRectangleStyle(newStyle)
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
          {Object.keys(rectangleStyle).forEach((styleProperty) => {
            return (
              <RadiusFormFieldGroup
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
