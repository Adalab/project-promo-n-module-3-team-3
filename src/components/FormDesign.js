//imports
import '../styles/components/formDesign.scss';
import Collapsable from './Collapsable';

//function
const FormDesign = (prop) => {
  
  const handleInput = () => {
    prop.handleInput();
  };

  

  //pending revisar todo OK --------------------
  return (
    <fieldset>
      <Collapsable className="far fa-object-ungroup" text="Diseña" handlerCollapsableDesign={prop.handlerCollapsableDesign}
          arrow={prop.arrow}
          collapsableDesign={prop.collapsableDesign}/>
      

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
              value="palette1"
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
              value="palette2"
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
              value="palette3"
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
              value="palette4"
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
              value="palette5"
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
