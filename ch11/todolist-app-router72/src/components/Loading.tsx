import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="bg-white w-100 h-100 position-fixed" style={{ top: 0, left: 0, opacity: 0.8 }}>
      <div className="row w-100 h-100 justify-content-center align-items-center">
        <div className="col-6 text-center">
          <h3>처리중</h3>
          <ScaleLoader height="40px" width="6px" radius="2px" margin="2px" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
