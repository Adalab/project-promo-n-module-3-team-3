import "../styles/components/preview.scss";
import Icons from "./Icons";
import ResetButton from "./ResetButton";

function Preview(props) {
  return (
    <section className="main__cards">
      <ResetButton />

      <section className={`main__cards--section ${props.data.palette}`}>
        <div className="grid-sidebar">
          <div className="main__cards--section__sidebar"></div>
          <h1 className="main__cards--section__title1">
            {props.data.name === "" ? "Nombre Apellido" : props.data.name}
          </h1>
          <h2 className="main__cards--section__title2">
            {props.data.job === "" ? "Front-end developer" : props.data.job}
          </h2>
        </div>
        <div
          className="main__cards--section__img profile__image"
          style={
            props.data.photo === ""
              ? {
                  backgroundImage: `url('https://i1.wp.com/www.puntogeek.com/wp-content/uploads/2011/01/jabbascript.jpg?resize=527%2C348')`,
                }
              : { backgroundImage: `url(${props.data.photo})` }
          }
        ></div>
        <nav>
          <ul className="main__cards--section__links">
            <Icons
              id="mobile_link"
              title="Llamar"
              text={props.data.phone}
              placeHolder="555-555-555"
              goTo="tel:"
              iconClass="fas fa-mobile-alt"
            />
            <Icons
              id="mail_link"
              title="Escribir email"
              text={props.data.email}
              placeHolder="sally-hill@gmail.com"
              goTo="mailto:"
              iconClass="far fa-envelope"
            />
            <Icons
              id="linkedin_link"
              title="LinkedIn"
              text={props.data.linkedin}
              placeHolder="sally.hill"
              goTo="https://www.linkedin.com/in/"
              iconClass="fab fa-linkedin-in"
            />
            <Icons
              id="github_link"
              title="GitHub"
              text={props.data.github}
              placeHolder="sally.hill"
              goTo="https://github.com/"
              iconClass="fab fa-github-alt"
            />
          </ul>
        </nav>
      </section>
    </section>
  );
}

export default Preview;
