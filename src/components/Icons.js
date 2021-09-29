import "../styles/Preview.scss";

function Icons(props) {
  return (
    <li>
      <a
        className="main__cards--section__links--item"
        id={props.id}
        title={props.title}
        href={
          props.text === "" ? props.placeHolder : `${props.goTo} ${props.text}`
        }
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className={props.iconClass}></i>
      </a>
    </li>
  );
}

export default Icons;
