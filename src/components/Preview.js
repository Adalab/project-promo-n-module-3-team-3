import "../styles/Variables.scss";
import "../styles/Preview.scss";

function Preview() {
  return (
    <div className="page">
      <main className="main_grid">
        <section className="main__cards">
          <button className="main__cards--button js_resetbutton">
            <i className="far fa-trash-alt"></i> Reset
          </button>
          <section className="main__cards--section js-preview palette5">
            <div className="grid-sidebar">
              <div className="main__cards--section__sidebar"></div>
              <h1 className="main__cards--section__title1 js_previewtext js_title">
                {data.name === "" ? "Nombre Apellido" : data.name}
              </h1>
              <h2 className="main__cards--section__title2 js_previewtext js_job">
                {data.job === "" ? "Front-end developer" : data.job}
              </h2>
            </div>
            <div className="main__cards--section__img profile__image js__profile-image"></div>
            <nav>
              <ul className="main__cards--section__links">
                {/* <Icons /> */}
                <li>
                  <a
                    className="main__cards--section__links--item js-icon-circle"
                    id="mobile_link"
                    href={
                      data.phone === "" ? "555-555-555" : `tel: ${data.phone}`
                    }
                  >
                    <i className="fas fa-mobile-alt js-icon"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="main__cards--section__links--item js-icon-circle"
                    target="blank"
                    id="mail_link"
                    href={
                      data.email === ""
                        ? "sally-hill@gmail.com"
                        : `mailto: ${data.email}`
                    }
                  >
                    <i className="far fa-envelope js-icon"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="main__cards--section__links--item js-icon-circle"
                    id="linkedin_link"
                    target="blank"
                    href={
                      data.linkedin === ""
                        ? "linkedin.com/in/sally.hill"
                        : data.linkedin
                    }
                  >
                    <i className="fab fa-linkedin-in js-icon"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="main__cards--section__links--item js-icon-circle"
                    id="github_link"
                    target="blank"
                    href={
                      data.github === ""
                        ? "sally-hill"
                        : `https://github.com/ ${data.github}`
                    }
                  >
                    <i className="fab fa-github-alt js-icon"></i>
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
