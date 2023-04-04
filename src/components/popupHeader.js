function PopupHeader({setIsOpenPopup ,isOpenPopup}) {
  return (
    <>
      <div
        onClick={setIsOpenPopup(!isOpenPopup)}
        style={{
          position: "fixed",
          background: "rgba(0,0,0,0.6)",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "relative",
            background: "white",
            borderRadius: "8px",
            width: "250px",
            padding: "20px 10px",
            animation: "dropTop .3s linear",
          }}
        >
          <div>
            <h1>Title here</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopupHeader;
