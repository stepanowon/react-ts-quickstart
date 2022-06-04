type PropsType = {
  currentTime: Date;
  changeTime: () => void;
};

const MyTime = ({ currentTime, changeTime }: PropsType) => {
  return (
    <div className="row">
      <div className="col">
        <button className="btn btn-primary" onClick={() => changeTime()}>
          현재 시간 확인
        </button>
        <h4>
          <span className="label label-default">{currentTime.toLocaleString()}</span>
        </h4>
      </div>
    </div>
  );
};

export default MyTime;
