type PropsT = {
  styleProperty: string
  inputValue: string
  changeHandler: (styleProperty: string, inputValue: string) => void
}

export function RadiusFormFieldGroup(props: PropsT) {
  return (
    <>
      <input
        type="range"
        value={props.inputValue}
        onChange={(event) =>
          props.changeHandler(props.styleProperty, event.target.value)
        }
        min="0"
        max="50"
      />
      <div>{props.styleProperty}</div>
    </>
  )
}
