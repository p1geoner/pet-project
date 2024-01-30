import { useState, useCallback, useRef } from "react";
import "./PageTwoStyles.css";
import { DragElementArea } from "./ContentPageTwo/DragElementArea";
import armNode from "./Source/Arm.svg";
import serverGroupNode from "./Source/Server_group.svg";
import switchNode from "./Source/Switch.svg";
import ChartPage from "./ContentPageTwo/ChartPage";
import MWHeaders from "./ModalWindowElements/MWHeaders";

import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  Position,
  Handle,
  Background
} from "react-flow-renderer";

const initialElements = [];

const customArmNodeStyle = {
  backgroundImage: `url(${armNode})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "40px",
  width: "50px"
};

const customServerNodeStyle = {
  backgroundImage: `url(${serverGroupNode})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "40px",
  width: "50px"
};

const customSwitchNodeStyle = {
  backgroundImage: `url(${switchNode})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "55px",
  width: "50px"
};

const styleLabel = {
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  borderRadius: "4px",
  fontSize: "8px",
  position: "relative",
  top: "41px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

let idArm = 1;
let idServer = 1;
let idSwitch = 1;
//const getId = () => `dndnode_${id++}`;

const getId = (type) => {
  switch (type) {
    case "armNode":
      return `Арм №${idArm++}`;
    case "serverNode":
      return `Серв. гр. №${idServer++}`;
    case "switchNode":
      return `Switch №${idSwitch++}`;
    default:
      return "Error 404";
  }
};

////------->главная функция

const ContentPageTwo = ({ settingPropertie }) => {
  const [chart, setChart] = useState(false);
  const [timeTest, setTimeTest] = useState(0);

  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
  const [valueInput, setValueInput] = useState([]);

  const styleLines = {
    stroke: settingPropertie[1].colorLine,
    strokeWidth: settingPropertie[3].value
  };

  const CustomArmNode = ({ id }) => {
    return (
      <div style={customArmNodeStyle}>
        <Handle
          type="target"
          position={Position.Left}
          id="Left"
          style={{ top: "50%" }}
        />
        <span style={styleLabel}>{id}</span>
        <Handle
          type="source"
          position={Position.Right}
          id="Right"
          style={{ top: "50%" }}
        />
        <Handle type="target" position={Position.Top} id="Top" />
      </div>
    );
  };

  const CustomServerNode = ({ id }) => {
    return (
      <div style={customServerNodeStyle}>
        <span style={{ ...styleLabel, top: "-11px" }}>{id}</span>
        <Handle type="source" position={Position.Bottom} id="Bottom" />
      </div>
    );
  };

  const CustomSwitchNode = ({ id }) => {
    return (
      <div style={customSwitchNodeStyle}>
        <Handle type="source" position={Position.Bottom} id="Bottom" />
        <Handle type="target" position={Position.Top} id="Top" />
        <span style={{ ...styleLabel, top: "38px" }}>{id}</span>
      </div>
    );
  };

  const nodeTypes = {
    armNode: CustomArmNode,
    serverNode: CustomServerNode,
    switchNode: CustomSwitchNode
  };

  const onConnect = useCallback(
    (params) =>
      setElements((els) =>
        addEdge(
          {
            ...params,
            animated: settingPropertie[2].active,
            style: {
              stroke: settingPropertie[1].colorLine,
              strokeWidth: settingPropertie[3].value
            }
          },
          els
        )
      ),
    [setElements]
  );
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onDrop = (event) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData("application/reactflow");
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top
    });

    const newNode = {
      id: getId(type),
      type,
      position,
      data: { label: type }
    };

    setElements((es) => es.concat(newNode));
  };

  const chartPage = chart && (
    <ChartPage
      chart={chart}
      setChart={setChart}
      timeTest={timeTest}
    />
  );

  return (
    <div className="contents dndflow dndflow vh-100 vw-100 overflow-hidden">
      <MWHeaders
        elements={elements}
        valueInput={valueInput}
        setValueInput={setValueInput}
      />
      <ReactFlowProvider>
        <div className="titleArea contentBg">
          <p className="text-center p-2">Инструменты создания</p>
        </div>
        <DragElementArea
          setChart={setChart}
          chart={chart}
          timeTest={timeTest}
          setTimeTest={setTimeTest}
        />
        <div className="reactflow-wrapper contentBg" ref={reactFlowWrapper}>
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            deleteKeyCode="Delete"
            connectionLineStyle={styleLines}
          >
            <Background variant="lines" />
            <Controls />
            {chartPage}
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default ContentPageTwo;
