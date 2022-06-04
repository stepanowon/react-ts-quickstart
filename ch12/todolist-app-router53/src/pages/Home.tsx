import MyTime from "./MyTime";
import TimeActionCreator from "../redux/TimeActionCreator";
import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { RootStatesType } from "../redux/AppStore";

type PropsType = {
  currentTime: Date;
  changeTime: () => void;
};

const Home = ({ currentTime, changeTime }: PropsType) => {
  return (
    <div className="card card-body">
      <h2>Home</h2>
      <MyTime currentTime={currentTime} changeTime={changeTime} />
    </div>
  );
};

const mapStateToProps = (state: RootStatesType) => ({ currentTime: state.home.currentTime });
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  changeTime: () => dispatch(TimeActionCreator.changeTime()),
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;
