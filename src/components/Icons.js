import "../styles/components/preview.scss";

function Icons(props) {
  return (
    <li>
      <a
        className="main__cards--section__links--item"
        id="mobile_link"
        href={props.phone === "" ? "555-555-555" : `tel: ${props.phone}`}
      >
        <i className="fas fa-mobile-alt"></i>
      </a>
    </li>
  );
}

export default Icons;
