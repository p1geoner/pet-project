const LoadModel = () => {
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center vw-100 vh-100"
        style={{
          position: "relative",
          color: "white",
          fontSize: "24px",
          textAlign: "center",
          flexDirection: "column"
        }}
      >
        <div class="input-group">
          <input
            type="file"
            class="form-control"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
            aria-label="Upload"
          ></input>
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="inputGroupFileAddon04"
          >
            Загрузить модель
          </button>
        </div>
      </div>
    </>
  );
};

export default LoadModel;
