import "../PageTwoStyles.css";
import arm from "../Source/Arm.svg";
import servergroup from "../Source/Server_group.svg";
import kommutator from "../Source/Switch.svg";

export const DragElementArea = ({ chart, setChart, setTimeTest }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  chart &&
    setTimeTest(
      Number(prompt("Введите время функционирования системы (Часы)", ""))
    );
    

  return (
    <div className="content contentBg elementArea">
      <img
        className="rounded mx-auto d-block pt-3"
        src={arm}
        alt="Автоматизированное рабочее место"
        style={{ cursor: "pointer" }}
        onDragStart={(event) => {
          return onDragStart(event, "armNode");
        }}
      ></img>
      <p className="text-center pb-3" style={{ color: "white" }}>
        АРМ
      </p>
      <img
        className="rounded mx-auto d-block"
        src={servergroup}
        alt="серверная группа"
        style={{ cursor: "pointer" }}
        onDragStart={(event) => {
          return onDragStart(event, "serverNode");
        }}
      ></img>
      <p className="text-center pb-3" style={{ color: "white" }}>
        Серверная группа
      </p>
      <img
        className="rounded mx-auto d-block"
        src={kommutator}
        alt="Коммутатор-Switch"
        style={{ cursor: "pointer" }}
        onDragStart={(event) => onDragStart(event, "switchNode")}
      ></img>
      <p className="text-center pb-3" style={{ color: "white" }}>
        Коммутатор-Switch
      </p>
      <div className="d-grid gap-2 mb-0">
        <button
          className="btn btn-warning text-white"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Ввод данных
        </button>
        <button
          className="btn btn-success"
          type="button"
          onClick={() => {
            setChart(!chart);
          }}
        >
          {chart ? "Закрыть окно" : "Моделировать"}
        </button>
      </div>
    </div>
  );
};
