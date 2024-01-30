import { Component } from "react";
import { NavLink } from "react-router-dom";

class ButtonHeader extends Component {
  render() {
    const { text } = this.props;
    return (
      <div
        className="btn-group ms-1 mt-1 mb-1"
        role="group"
        aria-label="Basic example"
      >
        <button
          className="btn btn-outline-success btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {text.title}
        </button>
        <ul className="dropdown-menu">
          {text.text.map((subtext) => (
            <NavLink to={text.link[subtext]} key={subtext.toString()}>
              <li className="nav-item">
                <a className="nav-link" href={text.link[subtext]}>
                  {subtext}
                </a>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    );
  }
}

export default ButtonHeader;
