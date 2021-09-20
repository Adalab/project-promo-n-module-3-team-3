// Fichero src/components/App.js
import '../styles/App.scss';
import jabbascript from '../images/jabbascript-social.jpg';
import adalab from '../images/logo-adalab.png';
import logo from '../images/logo-awesome-profile-cards.svg';


function App() {


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
            /></a>
          </div>
        </header>
    
        <main className="main_grid">
          <section className="main__cards">
            <button className="main__cards--button js_resetbutton">
              <i className="far fa-trash-alt"></i> Reset
            </button>
            <section className="main__cards--section js-preview palette5">
              <div className="grid-sidebar">
                <div className="main__cards--section__sidebar"></div>
                <h1 className="main__cards--section__title1 js_previewtext js_title">
                  Nombre Apellido
                </h1>
                <h2 className="main__cards--section__title2 js_previewtext js_job">
                  Front-end developer
                </h2>
              </div>
              <div
                className="main__cards--section__img profile__image js__profile-image"
              ></div>
              <nav>
                <ul className="main__cards--section__links">
                  <li>
                    <a
                      className="main__cards--section__links--item js-icon-circle"
                      id="mobile_link"
                      href=""
                      ><i className="fas fa-mobile-alt js-icon"></i></a>
                  </li>
                  <li>
                    <a
                      className="main__cards--section__links--item js-icon-circle"
                      target="blank"
                      id="mail_link"
                      href=""
                      ><i className="far fa-envelope js-icon"></i></a>
                  </li>
                  <li>
                    <a
                      className="main__cards--section__links--item js-icon-circle"
                      id="linkedin_link"
                      target="blank"
                      href=""
                      ><i className="fab fa-linkedin-in js-icon"></i></a>
                  </li>
                  <li>
                    <a
                      className="main__cards--section__links--item js-icon-circle"
                      id="github_link"
                      target="blank"
                      href=""
                      ><i className="fab fa-github-alt js-icon"></i></a>
                  </li>
                </ul>
              </nav>
            </section>
          </section>
    
          <section className="section_form">
            <form action="#" className="form js_form">
              <fieldset>
                <div className="section__title js_headerCollapsable">
                  <i className="far fa-object-ungroup"></i>
                  <h2 className="title">Diseña</h2>
                  <i className="fas fa-chevron-up arrow js_arrow"></i>
                </div>
    
                <div className="js_content div_content">
                  <label htmlFor="color_palette"> Colores </label>
                  <ul>
                    <li className="first_palette">
                      <input
                        checked={true}
                        id="palette"
                        type="radio"
                        name="color_palette"
                        className="input_palette"
                        value="1"
                      />
                      <div className="colorOne palette"></div>
                      <div className="colorTwo palette"></div>
                      <div className="colorThree palette"></div>
                    </li>
    
                    <li className="second_palette">
                      <input
                        checked={false}
                        id="palette"
                        type="radio"
                        name="color_palette"
                        className="input_palette"
                        value="2"
                      />
                      <div className="colorOne palette"></div>
                      <div className="colorTwo palette"></div>
                      <div className="colorThree palette"></div>
                    </li>
    
                    <li className="third_palette">
                      <input
                        checked={false}
                        id="palette"
                        type="radio"
                        name="color_palette"
                        className="input_palette"
                        value="3"
                      />
                      <div className="colorOne palette"></div>
                      <div className="colorTwo palette"></div>
                      <div className="colorThree palette"></div>
                    </li>
    
                    <li className="fourth_palette">
                      <input
                        checked={false}
                        id="palette"
                        type="radio"
                        name="color_palette"
                        className="input_palette"
                        value="4"
                      />
                      <div className="colorOne palette"></div>
                      <div className="colorTwo palette"></div>
                      <div className="colorThree palette"></div>
                    </li>
    
                    <li className="fifth_palette">
                      <input
                        checked={false}
                        id="palette"
                        type="radio"
                        name="color_palette"
                        className="input_palette"
                        value="5"
                      />
                      <div className="colorOne palette"></div>
                      <div className="colorTwo palette"></div>
                      <div className="colorThree palette"></div>
                    </li>
    
                  </ul>
                </div>
              </fieldset>
              <fieldset>
                <div className="section__title js_headerCollapsable">
                  <i className="far fa-keyboard"></i>
                  <h2 className="title">Rellena</h2>
                  <i className="fas fa-chevron-up arrow js_arrow"></i>
                </div>
    
                <div className="js_content div_content">
                  <label htmlFor="name" className="label"
                    >Nombre completo<span className="span">*</span></label
                  >
                  <input
                    type="text"
                    placeholder="Ej. sally jill"
                    name="name"
                    id="name"
                    className="input js_inputtext"
                    value=""
                    required
                  />
                  <label htmlFor="work" className="label"
                    >Puesto<span className="span">*</span></label
                  >
                  <input
                    type="text"
                    placeholder="Ej. Front-end unicorn"
                    name="work"
                    id="job"
                    className="input js_inputtext"
                    required
                  />
                  <label htmlFor="image" className="label"
                    >Imagen de perfil<span className="span">*</span></label
                  >
                  <div className="action">
                    <label className="action__upload-btn" htmlFor="photo">Añadir Imagen</label>
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
                  <label htmlFor="email" className="label"
                    >Email<span className="span">*</span></label>
                  <input
                    type="email"
                    placeholder="Ej. sally-hill@gmail.com "
                    name="email"
                    id="email"
                    className="input js_input_link"
                    required
                  />
                  <label htmlFor="phone" className="label"
                    >Teléfono<span className="span">*</span></label
                  >
                  <input
                    type="tel"
                    placeholder="Ej: 555-55-55-55 "
                    pattern="[6-7]{1}[0-9]{8}"
                    name="phone"
                    id="phone"
                    className="input js_input_link"
                    required
                  />
                  <label htmlFor="linkedin" className="label"
                    >Linkedin<span className="span">*</span></label
                  >
                  <input
                    type="text"
                    placeholder="Ej. linkedin.com/in/sally.hill"
                    name="linkedin"
                    id="linkedin"
                    className="input js_input_link"
                    required
                  />
                  <label htmlFor="github" className="label"
                    >Github<span className="span">*</span></label
                  >
                  <input
                    type="text"
                    placeholder="Ej: @sally-hill"
                    name="github"
                    id="github"
                    className="input js_input_link"
                    value=""
                    required
                  />
                </div>
              </fieldset>
              <fieldset>
                <div className="section__title js_headerCollapsable">
                  <i className="fas fa-share-alt"></i>
                  <h2 className="title">Comparte</h2>
                  <i className="fas fa-chevron-up arrow js_arrow"></i>
                </div>
    
                <div className="js_content div_content">
                  <button className="button__card js_button_share">
                    <i className="far fa-address-card"></i> Crear tarjeta
                  </button>
                </div>
              </fieldset>
            </form>
            <section className="share__section  js_share_twitter">
              <h2 className="share__section--title js_sharetitle"></h2>
              <a className="share__section--link js_parrafo_share" target="blank"></a>
              <h3 className="titlecompartir">Compartir</h3>
              <div className="section_buttons">
                <button className="share__section--button">
                  <a className="js_linktwitter linktwitter" target="blank" href=""
                    ><i className="fab fa-twitter"></i> Twitter</a
                  >
                </button>
                <button className="share__section--button">
                  <a className="js_linkFacebook linktwitter" target="blank" href=""
                    ><i className="fab fa-facebook"></i> Facebook</a
                  >
                </button>
                <button className="share__section--button">
                  <a className="js_linkLinkedin linktwitter" target="blank" href=""
                    ><i className="fab fa-linkedin-in js-icon"></i> Linkedin</a
                  >
                </button>
              </div>
            </section>
          </section>
    
        </main>
        <footer className="footer">
          <p className="footer__copyright">JavaS the hutt &copy; 2021</p>
          <a href="https://adalab.es/" target="_blank"
            ><img
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