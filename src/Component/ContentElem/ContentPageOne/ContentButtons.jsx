import New_model from "../Source/New_model.svg";
import Dowload_model from "../Source/Download_model.svg";
import Settings from "../Source/Settings.svg";
import Help from "../Source/Help.svg";
import Exit from "../Source/Exit.svg";
import { NavLink } from "react-router-dom";

export default function ContentButtons() {
  const buttonsElem = [
    { title: "Новая модель", link: New_model, href: "/NewModel" },
    { title: "Загрузить модель", link: Dowload_model, href: "/LoadModel" },
    { title: "Настройки", link: Settings, href: "/Settings" },
    { title: "Справка", link: Help, href: "/Help" },
    { title: "Выход", link: Exit, href: "/Exit" }
  ];

  const btnElm = buttonsElem.map((buttonElem, i) => (
    <NavLink to={buttonElem.href} key={i}>
      <button
        key={buttonElem.title}
        type="button"
        className="btn btn-lg bg-light text-success text-start mb-3 btn-outline-success"
      >
        {buttonElem.title}
        <img src={buttonElem.link} className="ps-3" alt={buttonElem.title} />
      </button>
    </NavLink>
  ));

  return <div className="btn-group-vertical">{btnElm}</div>;
}
