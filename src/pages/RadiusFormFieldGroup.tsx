type PropsT = {
  styleProperty: string
  inputValue: string
  changeHandler: (styleProperty: string, inputValue: string) => void
}

const MARGIN = 20

export function RadiusFormFieldGroup(props: PropsT) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <input
        style={{ marginRight: MARGIN }}
        type="range"
        value={parseInt(props.inputValue)}
        onChange={(event) =>
          props.changeHandler(props.styleProperty, event.target.value)
        }
        min="0"
        max="50"
      />
      <div style={{ marginRight: MARGIN }}>{props.inputValue}</div>
      <div>{props.styleProperty}</div>
    </div>
  )
}
