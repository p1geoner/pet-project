import ButtonHeader from "./ButtonHeader";

export default function Header(props) {
  const prElem = props.name;
  const btnHeader = prElem.map((btnHead) => (
    <li key={btnHead.id} className="nav-item">
      {<ButtonHeader text={btnHead} />}
    </li>
  ));
  return <ul className="btn-group nav">{btnHeader}</ul>;
}
