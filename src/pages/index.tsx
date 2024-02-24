import { useState } from 'react'

export default function Home() {
  const [borderRadius, setBorderRadius] = useState('0')

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
            borderRadius: `${borderRadius}%`,
            marginBottom: 50,
          }}
        ></div>
        <input
          type="range"
          value={borderRadius}
          onChange={(event) => {
            setBorderRadius(event.target.value)
          }}
          min="0"
          max="50"
        />
        <div>{borderRadius}</div>
      </div>
    </>
  )
}
