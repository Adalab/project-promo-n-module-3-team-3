//imports
import '../styles/components/formDesign.scss';
import Collapsable from './Collapsable';
import Palettes from './Palettes';

//function
const FormDesign = (props) => {
  return (
    <fieldset>
      <Collapsable
        className="far fa-object-ungroup"
        text="Diseña"
        handlerCollapsableDesign={props.handlerCollapsableDesign}
        arrow={props.arrow}
        collapsableDesign={props.collapsableDesign}
      />

      <div className={`js_content div_content ${props.collapsableDesign}`}>
        <label htmlFor="color_palette"> Colores </label>
        <ul>
          <Palettes
            handleInput={props.handleInput}
            classNamePalette="first_palette"
            valuePalette="palette1"
            defaultCheckedInfo={true}
          />
          <Palettes
            handleInput={props.handleInput}
            classNamePalette="second_palette"
            valuePalette="palette2"
            defaultCheckedInfo={false}
          />
          <Palettes
            handleInput={props.handleInput}
            classNamePalette="third_palette"
            valuePalette="palette3"
            defaultCheckedInfo={false}
          />
          <Palettes
            handleInput={props.handleInput}
            classNamePalette="fourth_palette"
            valuePalette="palette4"
            defaultCheckedInfo={false}
          />
          <Palettes
            handleInput={props.handleInput}
            classNamePalette="fifth_palette"
            valuePalette="palette5"
            defaultCheckedInfo={false}
          />
        </ul>
      </div>
    </fieldset>
  );
};

export default FormDesign;
