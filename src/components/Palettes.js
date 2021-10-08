const Palettes = (props) => {
  const handleChange = (ev) => {
    return props.handleInput(ev.currentTarget.name, ev.currentTarget.value);
  };

  return (
    <li className={props.classNamePalette}>
      <input
        defaultChecked={props.defaultCheckedInfo}
        id="palette"
        type="radio"
        name="color_palette"
        className="input_palette"
        value={props.valuePalette}
        onChange={handleChange}
      />
      <div className="colorOne palette"></div>
      <div className="colorTwo palette"></div>
      <div className="colorThree palette"></div>
    </li>
  );
};

export default Palettes;
