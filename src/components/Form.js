import FormDesign from './FormDesign';
import FormShare from '.FromShare';

const Form = (props) => {
  //pendiente coger los props de App.js
  return (
    <section className="section_form">
      <form onSubmit={props.handleSubmit} action="#" className="form js_form">
        <FormDesign
          handlerCollapsableDesign={props.handlerCollapsableDesign}
          arrow={props.arrow}
          collapsableDesign={props.collapsableDesign}
          handleInput={props.handleInput}
        />
        <FormShare
          handlerCollapsableShare={props.handlerCollapsableShare}
          arrow3={props.arrow3}
          collapsableShare={props.collapsableShare}
        />
      </form>
    </section>
  );
};

export default Form;
