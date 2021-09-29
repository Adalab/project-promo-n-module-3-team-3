const Collapsable =(props)=>{
    
    const handleCollapsable =()=>{
        if(props.text === 'Comparte'){
            props.handlerCollapsableShare();

        }else if (props.text === 'Rellena'){
            props.handlerCollapsableFill();
        }else if (props.text === 'Diseña'){
            props.handlerCollapsableDesign();
        }


    }


    return (
        <div
                className="section__title js_headerCollapsable"
                onClick={handleCollapsable}
              >
                <i className={props.className}></i>
                <h2 className="title">{props.text}</h2>
                <i className={`fas ${props.arrow} arrow js_arrow`}></i>
              </div>

    );

}

export default Collapsable;