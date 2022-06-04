import MyTime from "./MyTime";
import TimeActionCreator from "../redux/TimeActionCreator";
import { connect } from "react-redux";
import { RootStatesType } from "../redux/AppStore";
import { AnyAction, Dispatch } from "redux";

type PropsType = {
  currentTime: Date;
  changeTime: () => void;
  isChanging: boolean;
};

const Home = ({ currentTime, changeTime, isChanging }: PropsType) => {
  return (
    <div className="card card-body">
      <h2>Home</h2>
      <hr />
      {isChanging ? <h4>시간 확인 중</h4> : <MyTime currentTime={currentTime} changeTime={changeTime} />}
    </div>
  );
};

const mapStateToProps = (state: RootStatesType) => ({
  currentTime: state.home.currentTime,
  isChanging: state.home.isChanging,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  changeTime: () => dispatch(TimeActionCreator.changeTimeRequest()),
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;
