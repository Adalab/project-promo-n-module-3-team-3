import '../styles/layout/FormFillInput.scss';

const FormFillInput =(props)=>{

    const handleInput = (ev) => {
        const currentInput = ev.currentTarget.name;
    
        if (currentInput === props.name) {
          setData({
            ...data,
            name: ev.currentTarget.value,
          });
        } ;

    return (
        <label htmlFor={props.htmlFor} className="label">
                 {props.text}
                  <span className="span">*</span>
                <input
                  type={props.type}
                  placeholder={props.placeholder}
                  name={props.name}
                  id={props.id}
                  className={props.className}
                  value={props.value}
                  required
                  onChange={handleInput}
                />
                
        </label>
                

    )
}

export default FormFillInput;