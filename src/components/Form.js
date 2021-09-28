import FormDesign from './formDesig';

const Form = (prop) => {
  //pendiente coger los props de App.js
  return;
  <form>
    <FormDesign
      handlerCollapsableDesign={prop.handlerCollapsableDesign}
      arrow={prop.arrow}
      collapsableDesign={prop.collapsableDesign}
      handleInput={handleInput}
    />
  </form>;
};

export default Form;
