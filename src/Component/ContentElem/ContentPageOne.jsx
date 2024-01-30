import { Component } from "react";
import ContentButtons from "./ContentPageOne/ContentButtons";
import ContentLogo from "./ContentPageOne/ContentLogo";
import "./style.css";

class ContentPageOne extends Component {
  render() {
    return (
      <div className="content-bg vh-100 vw-100 overflow-hidden">
        <ContentButtons />
        <ContentLogo />
      </div>
    );
  }
}

export default ContentPageOne;
