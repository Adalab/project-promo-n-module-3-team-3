//imports
import '../styles/components/tyles/core/_variables.scss';
import '../styles/components/FormDesign.scss.scss';

//function
const FormDesign = (prop) => {
  const handlerCollapsableDesign = () => {
    prop.handlerCollapsableDesign();
  };

  const handleInput = () => {
    prop.handleInput();
  };
  //pending revisar todo OK --------------------
  return (
    <fieldset>
      <div
        className="section__title js_headerCollapsable"
        onClick={handlerCollapsableDesign}
        id="1"
      >
        <i className="far fa-object-ungroup"></i>
        <h2 className="title">Diseña</h2>
        <i className={`fas ${prop.arrow} arrow js_arrow`}></i>
      </div>

      <div className={`js_content div_content ${prop.collapsableDesign}`}>
        <label htmlFor="color_palette"> Colores </label>
        <ul>
          <li className="first_palette">
            <input
              defaultChecked
              id="palette"
              type="radio"
              name="color_palette"
              className="input_palette"
              value="1"
              onChange={handleInput}
            />
            <div className="colorOne palette"></div>
            <div className="colorTwo palette"></div>
            <div className="colorThree palette"></div>
          </li>

          <li className="second_palette">
            <input
              id="palette"
              type="radio"
              name="color_palette"
              className="input_palette"
              value="2"
              onChange={handleInput}
            />
            <div className="colorOne palette"></div>
            <div className="colorTwo palette"></div>
            <div className="colorThree palette"></div>
          </li>

          <li className="third_palette">
            <input
              id="palette"
              type="radio"
              name="color_palette"
              className="input_palette"
              value="3"
              onChange={handleInput}
            />
            <div className="colorOne palette"></div>
            <div className="colorTwo palette"></div>
            <div className="colorThree palette"></div>
          </li>

          <li className="fourth_palette">
            <input
              id="palette"
              type="radio"
              name="color_palette"
              className="input_palette"
              value="4"
              onChange={handleInput}
            />
            <div className="colorOne palette"></div>
            <div className="colorTwo palette"></div>
            <div className="colorThree palette"></div>
          </li>

          <li className="fifth_palette">
            <input
              id="palette"
              type="radio"
              name="color_palette"
              className="input_palette"
              value="5"
              onChange={handleInput}
            />
            <div className="colorOne palette"></div>
            <div className="colorTwo palette"></div>
            <div className="colorThree palette"></div>
          </li>
        </ul>
      </div>
    </fieldset>
  );
};

//export
export default FormDesign;
