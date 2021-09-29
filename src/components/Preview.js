import '../styles/components/preview.scss';
import Icons from './Icons';

function Preview(props) {
  return (
    <section className="main__cards">
      <button className="main__cards--button">
        <i className="far fa-trash-alt"></i> Reset
      </button>
      <section className="main__cards--section palette1">
        <div className="grid-sidebar">
          <div className="main__cards--section__sidebar"></div>
          <h1 className="main__cards--section__title1">
            {props.data.name === '' ? 'Nombre Apellido' : props.data.name}
          </h1>
          <h2 className="main__cards--section__title2">
            {props.data.job === '' ? 'Front-end developer' : props.data.job}
          </h2>
        </div>
        <div className="main__cards--section__img profile__image"></div>
        <nav>
          <ul className="main__cards--section__links">
            {/* <Icons -----------------------------------------------------/> */}
            {/* <Icons />
            <Icons />
            <Icons />
            <Icons /> */}

            <li>
              <a
                className="main__cards--section__links--item"
                id="mobile_link"
                href={
                  props.data.phone === ''
                    ? '555-555-555'
                    : `tel: ${props.data.phone}`
                }
              >
                <i className="fas fa-mobile-alt"></i>
              </a>
            </li>
            <li>
              <a
                className="main__cards--section__links--item"
                target="blank"
                id="mail_link"
                href={
                  props.data.email === ''
                    ? 'sally-hill@gmail.com'
                    : `mailto: ${props.data.email}`
                }
              >
                <i className="far fa-envelope"></i>
              </a>
            </li>
            <li>
              <a
                className="main__cards--section__links--item"
                id="linkedin_link"
                target="blank"
                href={
                  props.data.linkedin === ''
                    ? 'linkedin.com/in/sally.hill'
                    : props.data.linkedin
                }
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                className="main__cards--section__links--item"
                id="github_link"
                target="blank"
                href={
                  props.data.github === ''
                    ? 'sally-hill'
                    : `https://github.com/ ${props.data.github}`
                }
              >
                <i className="fab fa-github-alt"></i>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </section>
  );
}

export default Preview;
