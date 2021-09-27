import "../styles/Preview.scss";

function Icons() {
  return (
    <li>
      <a
        className="main__cards--section__links--item"
        id="mobile_link"
        href={data.phone === "" ? "555-555-555" : `tel: ${data.phone}`}
      >
        <i className="fas fa-mobile-alt"></i>
      </a>
    </li>
  );
}

export default Icons;
