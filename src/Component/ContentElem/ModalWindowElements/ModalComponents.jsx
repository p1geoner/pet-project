import headersElements from "./headersElements";

const ModalComponents = ({ elements, valueInput, setValueInput }) => {
  let nodes = elements.filter((elem) => {
    return "type" in elem;
  });

  let armArr = nodes.filter((elem) => {
    return elem.type === "armNode";
  });

  let switchArr = nodes.filter((elem) => {
    return elem.type === "switchNode";
  });

  let serverArr = nodes.filter((elem) => {
    return elem.type === "serverNode";
  });

  let edges = elements.filter((elem) => {
    return "source" in elem;
  });

  const switchElements = (type) => {
    switch (type) {
      case "arm":
        return (
          <tbody>
            {armArr.map((elem, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{elem.id}</td>
                <td>
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm пример"
                  >
                    <option selected>Выбор...</option>
                    {armArr.map((_, i) => (
                      <option value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Введите данные..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text" id="basic-addon2">
                      Кол-во
                    </span>
                  </div>
                </td>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Введите данные..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        setValueInput([...valueInput, { i: e.target.value }])
                      }
                    />
                    <span className="input-group-text" id="basic-addon2">
                      λ(10<sup>-5</sup>)
                    </span>
                  </div>
                </td>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Введите данные..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text" id="basic-addon2">
                      τ(часы)
                    </span>
                  </div>
                </td>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Введите данные..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text" id="basic-addon2">
                      T(часы)
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        );

      case "server":
        return (
          <tbody>
            {serverArr.map((elem, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{`Серверная группа №${elem.id[elem.id.length - 1]}`}</td>
                <td>
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm пример"
                  >
                    <option selected>Выбор...</option>
                    {serverArr.map((_, i) => (
                      <option value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </td>
                <td><div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Введите данные..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text" id="basic-addon2">
                      Кол-во
                    </span>
                  </div></td>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Введите данные..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text" id="basic-addon2">
                      λ(10<sup>-5</sup>)
                    </span>
                  </div>
                </td>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Введите данные..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text" id="basic-addon2">
                      τ(часы)
                    </span>
                  </div>
                </td>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Введите данные..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text" id="basic-addon2">
                      T(часы)
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        );

      case "switch":
        return (
          <tbody>
            {switchArr.map((elem, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{`Коммутатор-Switch №${elem.id[elem.id.length - 1]}`}</td>
                <td>
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm пример"
                  >
                    <option selected>Выбор...</option>
                    {switchArr.map((_, i) => (
                      <option value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </td>
                <td><div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Введите данные..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text" id="basic-addon2">
                      Кол-во
                    </span>
                  </div></td>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Введите данные..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text" id="basic-addon2">
                      λ(10<sup>-5</sup>)
                    </span>
                  </div>
                </td>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Введите данные..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text" id="basic-addon2">
                      τ(часы)
                    </span>
                  </div>
                </td>
                <td>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Введите данные..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text" id="basic-addon2">
                      T(часы)
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        );

      default:
        return (
          <tbody>
            <tr>
              <th scope="row"></th>
              <td>Добавьте элементы!</td>
            </tr>
          </tbody>
        );
    }
  };
  return (
    <>
      {headersElements.map((elem, i) => (
        <div className="accordion" id="accordionExample" key={i}>
          <div className="accordion-item">
            <h2 className="accordion-header" id={`panelsStayOpen-heading${i}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#panelsStayOpen-${i}`}
                aria-expanded="true"
                aria-controls={`#panelsStayOpen-${i}`}
              >
                {elem.name}
                <img
                  src={elem.srcImg}
                  alt={elem.name}
                  style={{ marginLeft: "20px" }}
                ></img>
              </button>
            </h2>
            <div
              id={`panelsStayOpen-${i}`}
              className="accordion-collapse collapse show"
              aria-labelledby={`panelsStayOpen-heading${i}`}
            >
              <div className="accordion-body">
                <table className="table table-success table-hover">
                  <thead>
                    <tr>
                      {elem.subName.map((subElem, i) => (
                        <th scope="col" className="align-middle" key={i}>
                          {subElem}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  {switchElements(elem.id)}
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ModalComponents;
