import '../styles/layout/FormFillInput.scss';

const FormFillInput =(props)=>{

    const handleChange = (ev) => {
       return props.handleInput(ev.currentTarget.name, ev.currentTarget.value);
    
    }

    return (
       <> <label htmlFor={props.htmlFor} className="label">
                 {props.text}
                  <span className="span">*</span></label>
                <input
                  type={props.type}
                  placeholder={props.placeholder}
                  name={props.name}
                  id={props.id}
                  className={props.className}
                  value={props.value}
                  required
                  onChange={handleChange}
                />
                
        </>
    )
}

export default FormFillInput;