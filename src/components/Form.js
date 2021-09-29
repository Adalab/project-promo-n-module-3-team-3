import FormDesign from './FormDesign';

const Form = (props) => {
  //pendiente coger los props de App.js
  return (
    <form>
      <FormDesign
        handlerCollapsableDesign={props.handlerCollapsableDesign}
        arrow={props.arrow}
        collapsableDesign={props.collapsableDesign}
        handleInput={props.handleInput}
      />
    </form>
  );
};

export default Form;
