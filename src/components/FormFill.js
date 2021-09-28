import '../styles/layout/FormFill.scss';
import FormFillInput from './FormFillInput';


const FormFill =()=>{

    /*const handleInput = (ev) => {
        const currentInput = ev.currentTarget.name;
    
        if (currentInput === 'name') {
          setData({
            ...data,
            name: ev.currentTarget.value,
          });
        } else if (currentInput === 'job') {
          setData({
            ...data,
            job: ev.currentTarget.value,
          });
        } else if (currentInput === 'phone') {
          setData({
            ...data,
            phone: ev.currentTarget.value,
          });
        } else if (currentInput === 'email') {
          setData({
            ...data,
            email: ev.currentTarget.value,
          });
        } else if (currentInput === 'linkedin') {
          setData({
            ...data,
            linkedin: ev.currentTarget.value,
          });
        } else if (currentInput === 'github') {
          setData({
            ...data,
            github: ev.currentTarget.value,
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

               <FormFillInput  htmlFor="name" text="Nombre completo" type="text" placeholder="Ej. sally jill" name="name" id="name" className="input js_inputtext" value={data.name}/>

                <FormFillInput  htmlFor="job" text="Puesto" type="text" placeholder="Ej. Front-end unicorn" name="job" id="job" className="input js_inputtext" value={data.job}/>

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

                <FormFillInput  htmlFor="email" text="Email" type="email" placeholder="Ej. sally-hill@gmail.com" name="email" id="email" className="input js_input_link" value={data.email} handleInput={handleInput}/>
                
                <FormFillInput  htmlFor="phone" text="Teléfono" type="tel" placeholder="Ej: 555-55-55-55" name="phone" id="phone" className="input js_input_link" value={data.phone} handleInput={handleInput}/>

                <FormFillInput  htmlFor="linkedin" text="Linkedin" type="text" placeholder="Ej. linkedin.com/in/sally.hill" name="linkedin" id="linkedin" className="input js_input_link" value={data.linkedin} handleInput={handleInput}/>
               
                <FormFillInput  htmlFor="github" text="Github" type="text" placeholder="Ej: sally-hill" name="github" id="github" className="input js_input_link" value={data.github} handleInput={handleInput}/>
                
                
              </div>
            </fieldset>
    )
            
        
}

export default FormFill;