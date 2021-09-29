import "../styles/Variables.scss";
import "../styles/Preview.scss";

//import Icons from "./Icons";

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
                {/* <Icons /> */}
                <li>
                  <Icons className="main__cards--section__links--item" />
                  <a
                    className="main__cards--section__links--item"
                    id="mobile_link"
                    title="Llamar"
                    href={
                      data.phone === "" ? "555-555-555" : `tel: ${data.phone}`
                    }
                  >
                    <i className="fas fa-mobile-alt"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="main__cards--section__links--item"
                    target="_blank"
                    id="mail_link"
                    title="Escribir email"
                    href={
                      data.email === ""
                        ? "sally-hill@gmail.com"
                        : `mailto: ${data.email}`
                    }
                  >
                    <i className="far fa-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="main__cards--section__links--item"
                    id="linkedin_link"
                    target="_blank"
                    title="LinkedIn"
                    href={
                      data.linkedin === ""
                        ? "linkedin.com/in/sally.hill"
                        : data.linkedin
                    }
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="main__cards--section__links--item"
                    id="github_link"
                    title="GitHub"
                    target="_blank"
                    href={
                      data.github === ""
                        ? "sally-hill"
                        : `https://github.com/ ${data.github}`
                    }
                  >
                    <i className="fab fa-github-alt"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Preview;
