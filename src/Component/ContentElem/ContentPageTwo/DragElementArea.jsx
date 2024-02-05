import "../PageTwoStyles.css";
import arm from "../Source/Arm.svg";
import servergroup from "../Source/Server_group.svg";
import kommutator from "../Source/Switch.svg";
import classes from './DragElementArea.module.css'
import {useEffect, useState} from "react";

export const DragElementArea = ({ chart, setChart, setTimeTest }) => {

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
    const [fileButtonStyle, setFileButtonStyle] = useState({
        height: "100px",
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [value,setValue]= useState('');
    const [customElements,setCustomElements]= useState([]);
    const handleFileChange = (event) => {
        if (event.target.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = () => {
                setFileButtonStyle({
                    ...fileButtonStyle,
                    backgroundImage: `url(${reader.result})`,
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                });
                setSelectedFile(reader.result);
            };

        }
    };

    const handleCreate = () => {
        if (value.length !== 0) {
                setCustomElements(customElements => ([...customElements, {image: selectedFile, title: value}]))
                setSelectedFile(null);
                setValue('');
            setFileButtonStyle({
                ...fileButtonStyle,
                backgroundImage: `url()`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
            });
             localStorage.setItem('item',JSON.stringify({image: selectedFile, title: value}));
        }else{
            alert('Введите название элемента!')
        }
    }

  chart &&
    setTimeTest(
      Number(prompt("Введите время функционирования системы (Часы)", ""))
    );
    

  return (
    <div className="content contentBg elementArea" style={{overflowY:"scroll", overflowX:'hidden'}}>
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
        {Array.from(customElements)?.map((item)=>{
            return(
            <>
                <img
                    className="rounded mx-auto d-block"
                    src={item.image}
                    alt="Коммутатор-Switch"
                    style={{ cursor: "pointer" }}
                    onDragStart={(event) => onDragStart(event, "customNode")}
                ></img>
                <p className="text-center pb-3" style={{ color: "white" }}>
                    {item.title}
                </p>
            </>
        )})}
      <div className="d-grid gap-2 mb-0" style={{position:"relative"}}>
          <label
              htmlFor="fileInput"
              className={classes.fileInput}
              style={fileButtonStyle}>
              Загрузить файл
              <input
                  id="fileInput"
                  className={classes.file}
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*,.png,.jpg,.gif,.web"
              />
          </label>
          <input value={value} onChange={(e)=> setValue(e.target.value)} type="text" name="" id=""/>
          <button
              className="btn btn-warning text-white"
              onClick={()=>handleCreate()}
          >
              Новый элемент
          </button>
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
