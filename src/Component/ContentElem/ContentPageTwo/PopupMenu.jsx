export default function PopupMenu({ pop, setPop, timeTest, setTimeTest }) {
  const style = {
    position: "relative",
    width: "310px",
    border: "2px solid #6f47d7 ",
    borderRadius: "10px",
    margin: "20px",
    marginLeft: "75%",
    backgroundColor: "white",
    zIndex: "5"
  };
  const lbls = {
    margin: "10px",
    color: "#228D00"
  };

  const handleClick = () => {
    alert("Сохранено!!!");
    setPop(!pop);
  };

  const handleTest = (e) => {
    setTimeTest(e.target.value);
  };

  return (
    <div style={style}>
      <h4 style={lbls}>Показатели надёжности</h4>
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Наработка на отказ"
            aria-label="Наработка на отказ"
            aria-describedby="basic-addon2"
          ></input>
          <span className="input-group-text" id="basic-addon2">
            Часы
          </span>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Проработавшее время ЭВМ"
            aria-label="Проработавшее время ЭВМ"
            aria-describedby="basic-addon2"
          ></input>
          <span className="input-group-text" id="basic-addon2">
            Часы
          </span>
        </div>
        <div className="form-check form-switch" style={lbls}>
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          ></input>
          <label className="form-check-label">Человеческий фактор</label>
        </div>
      </div>
      <hr />
      <h4 style={lbls}>Параметры функциональной группы</h4>
      <div>
        <div className="input-group mb-3">
          <input
            onChange={handleTest}
            value={timeTest}
            type="text"
            className="form-control"
            placeholder="Количество тестов"
            aria-label="Количество тестов"
            aria-describedby="basic-addon2"
          ></input>
          <span className="input-group-text" id="basic-addon2">
            Кол-во
          </span>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Длительность тестирования"
            aria-label="Длительность тестирования"
            aria-describedby="basic-addon2"
          ></input>
          <span className="input-group-text" id="basic-addon2">
            Часы
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-outline-success"
          style={{ margin: "0 10px 10px 0" }}
          onClick={handleClick}
        >
          Сохранить
        </button>
      </div>
    </div>
  );
}
