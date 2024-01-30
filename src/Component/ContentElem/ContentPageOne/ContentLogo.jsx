import Logo from "../Source/Logo_vavko.png";
import "../style.css";

export default function ContentLogo() {
  return (
    <div className="logo-wrapper">
      <img
        src={Logo}
        className="img-fluid position-absolute top-50 end-0 translate-middle-y"
        alt="Логотип"
      ></img>
    </div>
  );
}
