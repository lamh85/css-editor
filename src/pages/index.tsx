import { useState, useEffect } from 'react'
import { RadiusFormFieldGroup } from './RadiusFormFieldGroup'

type StyleStateT = { [key: string]: string }

export default function Home() {
  const [rectangleStyle, setRectangleStyle] = useState<StyleStateT>({})

  const handleRadiusFormChange = (styleProperty: string, value: string) => {
    const newStyle = { ...rectangleStyle }
    newStyle[styleProperty] = `${value}%`
    setRectangleStyle(newStyle)
  }

  const rectangleStyleInitializer = () => {
    const dummyDiv = document.createElement('div')
    const radiusProperties = Object.keys(dummyDiv.style).filter((key) => {
      const keyNormalized = key.toLowerCase()
      return (
        keyNormalized.includes('radius') &&
        !keyNormalized.includes('webkit') &&
        keyNormalized !== 'borderradius'
      )
    })

    const initialState = radiusProperties.reduce(
      (accum: { [key: string]: string }, current: string) => {
        accum[current] = '0%'
        return accum
      },
      {}
    )

    setRectangleStyle(initialState)
  }

  // Cannot initialize in useState because document is undefined.
  useEffect(rectangleStyleInitializer, [])

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
          className="rectangle"
          style={{
            height: 100,
            width: 100,
            background: 'white',
            marginBottom: 50,
            ...rectangleStyle,
          }}
        ></div>
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
      </div>
    </>
  )
}
