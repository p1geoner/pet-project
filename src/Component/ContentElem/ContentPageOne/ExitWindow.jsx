const ExitWindow = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center .bg-dark.bg-gradient vw-100 vh-100"
        style={{
          position: "relative",
          backgroundColor: "black",
          color: "white",
          fontSize: "24px",
          textAlign: "center",
          zIndex: 9999,
          flexDirection: "column"
        }}
      >
        Вы вышли из программы, можете закрыть вкладку браузера.
        <span style={{ fontSize: "12px", color: "GrayText" }}>
          Dev: Sokolik Alexey
        </span>
      </div>
    </>
  );
};

export default ExitWindow;
