// Fichero src/components/App.js
import { useState } from 'react';
import '../styles/app.scss';
import adalab from '../images/logo-adalab.png';
import logo from '../images/logo-awesome-profile-cards.svg';

function App() {
  const [collapsableDesign, setCollapsableDesign] = useState('hidden');
  const [collapsableFill, setCollapsableFill] = useState('hidden');
  const [collapsableShare, setCollapsableShare] = useState('hidden');
  const [arrow, setArrow] = useState('fa-chevron-down');
  const [arrow2, setArrow2] = useState('fa-chevron-down');
  const [arrow3, setArrow3] = useState('fa-chevron-down');

  const [data, setData] = useState({
    palette: 'palette1',
    name: '',
    job: '',
    image: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
  });

  const handlerCollapsableDesign = (ev) => {
    ev.preventDefault();
    if (collapsableDesign === 'hidden') {
      setCollapsableDesign('');
      setArrow('fa-chevron-up');
    } else {
      setCollapsableDesign('hidden');
      setArrow('fa-chevron-down');
      setCollapsableFill('');
      setArrow2('fa-chevron-up');
    }

    setCollapsableShare('hidden');

    setArrow3('fa-chevron-down');
  };

  const handlerCollapsableFill = (ev) => {
    ev.preventDefault();
    if (collapsableFill === 'hidden') {
      setCollapsableFill('');
      setArrow2('fa-chevron-up');
    } else {
      setCollapsableFill('hidden');
      setArrow2('fa-chevron-down');
      setCollapsableShare('');
      setArrow3('fa-chevron-up');
    }
    setCollapsableDesign('hidden');

    setArrow('fa-chevron-down');
  };

  const handlerCollapsableShare = (ev) => {
    ev.preventDefault();
    if (collapsableShare === 'hidden') {
      setCollapsableShare('');
      setArrow3('fa-chevron-up');
    } else {
      setCollapsableShare('hidden');
      setArrow3('fa-chevron-down');
    }
    setCollapsableDesign('hidden');
    setCollapsableFill('hidden');
    setArrow('fa-chevron-down');
    setArrow2('fa-chevron-down');
  };

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
    } else if (currentInput === 'color_palette') {
      setData({
        ...data,
        palette: ev.currentTarget.value,
      });
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="page">
      <header className="header_cards header">
        <div>
          <a href="http://beta.adalab.es/project-promo-n-module-2-team-2/">
            <img
              className="cards"
              src={logo}
              alt="Logo de awesome profile cards"
              title="Web del proyecto"
            />
          </a>
        </div>
      </header>

      <main className="main_grid">
        <section className="main__cards">
          <button className="main__cards--button js_resetbutton">
            <i className="far fa-trash-alt"></i> Reset
          </button>
          <section
            className={`main__cards--section js-preview ${data.palette}`}
          >
            <div className="grid-sidebar">
              <div className="main__cards--section__sidebar"></div>
              <h1 className="main__cards--section__title1 js_previewtext js_title">
                {data.name === '' ? 'Nombre Apellido' : data.name}
              </h1>
              <h2 className="main__cards--section__title2 js_previewtext js_job">
                {data.job === '' ? 'Front-end developer' : data.job}
              </h2>
            </div>
            <div className="main__cards--section__img profile__image js__profile-image"></div>
            <nav>
              <ul className="main__cards--section__links">
                <li>
                  <a
                    className="main__cards--section__links--item js-icon-circle"
                    id="mobile_link"
                    href={
                      data.phone === '' ? '555-555-555' : `tel: ${data.phone}`
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
                      data.email === ''
                        ? 'sally-hill@gmail.com'
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
                      data.linkedin === ''
                        ? 'linkedin.com/in/sally.hill'
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
                      data.github === ''
                        ? 'sally-hill'
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

        <section className="section_form">
          <form onSubmit={handleSubmit} action="#" className="form js_form">
            <fieldset>
              <div
                className="section__title js_headerCollapsable"
                onClick={handlerCollapsableDesign}
                id="1"
              >
                <i className="far fa-object-ungroup"></i>
                <h2 className="title">Diseña</h2>
                <i className={`fas ${arrow} arrow js_arrow`}></i>
              </div>

              <div className={`js_content div_content ${collapsableDesign}`}>
                <label htmlFor="color_palette"> Colores </label>
                <ul>
                  <li className="first_palette">
                    <input
                      defaultChecked
                      id="palette1"
                      type="radio"
                      name="color_palette"
                      className="input_palette"
                      value="palette1"
                      onChange={handleInput}
                    />
                    <div className="colorOne palette"></div>
                    <div className="colorTwo palette"></div>
                    <div className="colorThree palette"></div>
                  </li>

                  <li className="second_palette">
                    <input
                      id="palette2"
                      type="radio"
                      name="color_palette"
                      className="input_palette"
                      value="palette2"
                      onChange={handleInput}
                    />
                    <div className="colorOne palette"></div>
                    <div className="colorTwo palette"></div>
                    <div className="colorThree palette"></div>
                  </li>

                  <li className="third_palette">
                    <input
                      id="palette3"
                      type="radio"
                      name="color_palette"
                      className="input_palette"
                      value="palette3"
                      onChange={handleInput}
                    />
                    <div className="colorOne palette"></div>
                    <div className="colorTwo palette"></div>
                    <div className="colorThree palette"></div>
                  </li>

                  <li className="fourth_palette">
                    <input
                      id="palette4"
                      type="radio"
                      name="color_palette"
                      className="input_palette"
                      value="palette4"
                      onChange={handleInput}
                    />
                    <div className="colorOne palette"></div>
                    <div className="colorTwo palette"></div>
                    <div className="colorThree palette"></div>
                  </li>

                  <li className="fifth_palette">
                    <input
                      id="palette5"
                      type="radio"
                      name="color_palette"
                      className="input_palette"
                      value="palette5"
                      onChange={handleInput}
                    />
                    <div className="colorOne palette"></div>
                    <div className="colorTwo palette"></div>
                    <div className="colorThree palette"></div>
                  </li>
                </ul>
              </div>
            </fieldset>
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
                  name="job"
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
            <fieldset>
              <div
                className="section__title js_headerCollapsable"
                onClick={handlerCollapsableShare}
              >
                <i className="fas fa-share-alt"></i>
                <h2 className="title">Comparte</h2>
                <i className={`fas ${arrow3} arrow js_arrow`}></i>
              </div>

              <div className={`js_content div_content ${collapsableShare}`}>
                <button className="button__card js_button_share">
                  <i className="far fa-address-card"></i> Crear tarjeta
                </button>
              </div>
            </fieldset>
          </form>
          <section className="share__section  js_share_twitter">
            <h2 className="share__section--title js_sharetitle"></h2>
            <a
              className="share__section--link js_parrafo_share"
              target="blank"
            ></a>
            <h3 className="titlecompartir">Compartir</h3>
            <div className="section_buttons">
              <button className="share__section--button">
                <a
                  className="js_linktwitter linktwitter"
                  target="blank"
                  href="https://twitter.com/"
                >
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </button>
              <button className="share__section--button">
                <a
                  className="js_linkFacebook linktwitter"
                  target="blank"
                  href="https://es-es.facebook.com/"
                >
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </button>
              <button className="share__section--button">
                <a
                  className="js_linkLinkedin linktwitter"
                  target="blank"
                  href="https://www.linkedin.com/in/"
                >
                  <i className="fab fa-linkedin-in js-icon"></i> Linkedin
                </a>
              </button>
            </div>
          </section>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">JavaS the hutt &copy; 2021</p>
        <a href="https://adalab.es/" target="_blank" rel="noreferrer">
          <img
            className="footer__image"
            src={adalab}
            alt="Adalab"
            title="go to Adalab"
          />
        </a>
      </footer>
    </div>
  );
}

export default App;
