import FormFillInput from './FormFillInput';

const FormFill =()=>{

    const handleInput = (ev) => {
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
      };

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
                <label htmlFor="name" className="label">
                  Nombre completo
                  <span className="span">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ej. sally jill"
                  name="name"
                  id="name"
                  className="input js_inputtext"
                  value={data.name}
                  required
                  onChange={handleInput}
                />
                <label htmlFor="work" className="label">
                  Puesto<span className="span">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ej. Front-end unicorn"
                  name="work"
                  id="job"
                  className="input js_inputtext"
                  value={data.job}
                  required
                  onChange={handleInput}
                />
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
                <label htmlFor="email" className="label">
                  Email<span className="span">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Ej. sally-hill@gmail.com"
                  name="email"
                  id="email"
                  className="input js_input_link"
                  required
                  value={data.email}
                  onChange={handleInput}
                />
                <label htmlFor="phone" className="label">
                  Teléfono<span className="span">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Ej: 555-55-55-55 "
                  pattern="[6-7]{1}[0-9]{8}"
                  name="phone"
                  id="phone"
                  className="input js_input_link"
                  required
                  value={data.phone}
                  onChange={handleInput}
                />
                <label htmlFor="linkedin" className="label">
                  Linkedin<span className="span">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ej. linkedin.com/in/sally.hill"
                  name="linkedin"
                  id="linkedin"
                  className="input js_input_link"
                  required
                  value={data.linkedin}
                  onChange={handleInput}
                />
                <label htmlFor="github" className="label">
                  Github<span className="span">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ej: sally-hill"
                  name="github"
                  id="github"
                  className="input js_input_link"
                  required
                  value={data.github}
                  onChange={handleInput}
                />
              </div>
            </fieldset>
    )
            
        
}

export default FormFill;