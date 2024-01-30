import ModalComponents from "./ModalComponents";

export default function MWHeaders({ elements, valueInput, setValueInput }) {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Ввод данных для функциональных элементов:
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Закрыть"
            ></button>
          </div>
          <div className="modal-body">
            <ModalComponents
              elements={elements}
              valueInput={valueInput}
              setValueInput={setValueInput}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Закрыть
            </button>
            <button type="button" className="btn btn-primary">
              Сохранить изменения
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
