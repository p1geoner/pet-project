import "./style.css";

let today = new Date();

export default function Footer() {
  return (
    <div
      className="borderTop fixed-bottom bg-white d-flex justify-content-between align-items-center"
      style={{ height: "20px", paddingRight: "20px" }}
    >
      <div style={{ width: "25%" }}></div>
      <h4
        style={{
          color: "#228D00",
          fontFamily: "Calibri",
          fontSize: 16,
          marginTop: "5px",
        }}
      >
        VA VKO {today.getFullYear()}
      </h4>
      <div className="progress" style={{ width: "25%" }}>
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-success"
          role="progressbar"
          style={{ width: "100%" }}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          100%
        </div>
      </div>
    </div>
  );
}
