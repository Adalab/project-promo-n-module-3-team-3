import "../styles/Variables.scss";
import "../styles/Preview.scss";

import Icons from "./Icons";

function Preview() {
  const handleReset = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="page">
      <main className="main_grid">
        <section className="main__cards">
          <button className="main__cards--button" onClick={handleReset}>
            <i className="far fa-trash-alt"></i> Reset
          </button>
          <section className="main__cards--section palette1">
            <div className="grid-sidebar">
              <div className="main__cards--section__sidebar"></div>
              <h1 className="main__cards--section__title1">
                {data.name === "" ? "Nombre Apellido" : data.name}
              </h1>
              <h2 className="main__cards--section__title2">
                {data.job === "" ? "Front-end developer" : data.job}
              </h2>
            </div>
            <div className="main__cards--section__img profile__image"></div>
            <nav>
              <ul className="main__cards--section__links">
                <Icons
                  id="mobile_link"
                  title="Llamar"
                  text={props.phone}
                  placeHolder="555-555-555"
                  goTo="tel:"
                  iconClass="fas fa-mobile-alt"
                />
                <Icons
                  id="mail_link"
                  title="Escribir email"
                  text={props.email}
                  placeHolder="sally-hill@gmail.com"
                  goTo="mailto:"
                  iconClass="far fa-envelope"
                />
                <Icons
                  id="linkedin_link"
                  title="LinkedIn"
                  text={props.linkedin}
                  placeHolder="sally.hill"
                  goTo={`https://www.linkedin.com/in/${props.linkedin}`}
                  iconClass="fab fa-linkedin-in"
                />
                <Icons
                  id="github_link"
                  title="GitHub"
                  text={props.github}
                  placeHolder="sally.hill"
                  goTo={`https://github.com/${props.github}`}
                  iconClass="fab fa-github-alt"
                />
              </ul>
            </nav>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Preview;
