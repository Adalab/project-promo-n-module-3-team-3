import "../styles/components/icons.scss";

function Icons(props) {
  return (
    <li>
      <a
        className="main__cards--section__links--item icon-circle"
        id={props.id}
        title={props.title}
        href={
          props.text === "" ? props.placeHolder : `${props.goTo}${props.text}`
        }
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className={`${props.iconClass} icon`}></i>
      </a>
    </li>
  );
}

export default Icons;
