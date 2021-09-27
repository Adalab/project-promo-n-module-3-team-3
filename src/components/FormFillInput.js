

const FormFillInput =()=>{

    return (
        <label htmlFor="name" className="label">
                  Nombre completo
                  <span className="span">*</span>
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
                
        </label>
                

    )
}

export default FormFillInput;