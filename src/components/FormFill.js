import '../styles/layout/FormFill.scss';
import FormFillInput from './FormFillInput';


const FormFill =(props)=>{

    /*const handleInput = (targetName, targetValue) => {
      
    
        if (targetName === 'name') {
          setData({
            ...data,
            name: targetValue,
          });
        } else if (targetName === 'job') {
          setData({
            ...data,
            job: targetValue,
          });
        } else if (targetName === 'phone') {
          setData({
            ...data,
            phone: targetValue,
          });
        } else if (targetName === 'email') {
          setData({
            ...data,
            email: targetValue,
          });
        } else if (targetName === 'linkedin') {
          setData({
            ...data,
            linkedin: targetValue,
          });
        } else if (targetName === 'github') {
          setData({
            ...data,
            github: targetValue,
          });
        }
      }; */

    return (
        <fieldset>

              <div
                className="section__title js_headerCollapsable"
                onClick={handlerCollapsableFill}
              >
                <i className="far fa-keyboard"></i>
                <h2 className="title">Rellena</h2>
                <i className={`fas ${arrow2} arrow js_arrow`}></i>
              </div>

              <div className={`js_content div_content ${collapsableFill}`}>

               <FormFillInput  htmlFor="name" text="Nombre completo" type="text" placeholder="Ej. sally jill" name="name" id="name" className="input js_inputtext" value={data.name} handleInput={props.handleInput}/>

                <FormFillInput  htmlFor="job" text="Puesto" type="text" placeholder="Ej. Front-end unicorn" name="job" id="job" className="input js_inputtext" value={data.job} handleInput={props.handleInput}/>

                <label htmlFor="image" className="label">
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
                </div>

                <FormFillInput  htmlFor="email" text="Email" type="email" placeholder="Ej. sally-hill@gmail.com" name="email" id="email" className="input js_input_link" value={data.email} handleInput={props.handleInput}/>
                
                <FormFillInput  htmlFor="phone" text="Teléfono" type="tel" placeholder="Ej: 555-55-55-55" name="phone" id="phone" className="input js_input_link" value={data.phone} handleInput={props.handleInput}/>

                <FormFillInput  htmlFor="linkedin" text="Linkedin" type="text" placeholder="Ej. linkedin.com/in/sally.hill" name="linkedin" id="linkedin" className="input js_input_link" value={data.linkedin} handleInput={props.handleInput}/>
               
                <FormFillInput  htmlFor="github" text="Github" type="text" placeholder="Ej: sally-hill" name="github" id="github" className="input js_input_link" value={data.github} handleInput={props.handleInput}/>
                
                
              </div>
            </fieldset>
    )
            
        
}

export default FormFill;