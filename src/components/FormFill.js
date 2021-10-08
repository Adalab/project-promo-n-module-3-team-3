import '../styles/components/formFill.scss';
import FormFillInput from './FormFillInput';
import Collapsable from './Collapsable';
import ImageInput from './ImageInput';

const FormFill = (props) => {
  return (
    <fieldset>
      <Collapsable
        className="far fa-keyboard"
        text="Rellena"
        handlerCollapsableFill={props.handlerCollapsableFill}
        arrow2={props.arrow2}
        collapsableFill={props.collapsableFill}
      />

      <div className={`js_content div_content ${props.collapsableFill}`}>
        <FormFillInput
          htmlFor="name"
          text="Nombre completo"
          type="text"
          placeholder="Ej. sally jill"
          name="name"
          id="name"
          className="input js_inputtext"
          value={props.data.name}
          handleInput={props.handleInput}
        />

        <FormFillInput
          htmlFor="job"
          text="Puesto"
          type="text"
          placeholder="Ej. Front-end unicorn"
          name="job"
          id="job"
          className="input js_inputtext"
          value={props.data.job}
          handleInput={props.handleInput}
        />
        <ImageInput handleImage={props.handleImage} data={props.data} />
        {/* <label htmlFor="image" className="label">
          Imagen de perfil
          <span className="span">*</span>
        </label>
        <div className="action">
          <label className="action__upload-btn" htmlFor="photo">
            Añadir Imagen
          </label>
          <input
            type="file"
            name="photo"
            id="photo"
            className="action__hiddenField js__profile-upload-btn"
            required
          />
        </div>

        <div className="profile">
          <div className="profile__preview js__profile-preview"></div>
        </div> */}

        <FormFillInput
          htmlFor="email"
          text="Email"
          type="email"
          placeholder="Ej. sally-hill@gmail.com"
          name="email"
          id="email"
          className="input js_input_link"
          value={props.data.email}
          handleInput={props.handleInput}
        />

        <FormFillInput
          htmlFor="phone"
          text="Teléfono"
          type="tel"
          placeholder="Ej: 555-55-55-55"
          name="phone"
          id="phone"
          className="input js_input_link"
          value={props.data.phone}
          handleInput={props.handleInput}
          handleImage={props.handleImage}
        />

        <FormFillInput
          htmlFor="linkedin"
          text="Linkedin"
          type="text"
          placeholder="Ej. sally.hill"
          name="linkedin"
          id="linkedin"
          className="input js_input_link"
          value={props.data.linkedin}
          handleInput={props.handleInput}
        />

        <FormFillInput
          htmlFor="github"
          text="Github"
          type="text"
          placeholder="Ej: sally-hill"
          name="github"
          id="github"
          className="input js_input_link"
          value={props.data.github}
          handleInput={props.handleInput}
        />
      </div>
    </fieldset>
  );
};

export default FormFill;
