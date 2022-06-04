import { all, fork, takeEvery, call, put } from "redux-saga/effects";
import TimeActionCreator, { TIME_ACTION } from "../redux/TimeActionCreator";

//비동기 처리하는 함수입니다. 2초후에 현재시간을 응답합니다.
const changeTimeApi = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve({ currentTime: new Date() });
    }, 2000)
  );
};
//비동기 처리를 진행하는 작업자 사가입니다.
function* changeTime() {
  try {
    //changeTimeApi를 Promise가 완료될 때까지 블록되도록 fork 합니다.
    //Promise가 완료되면 response로 리턴합니다.
    const response: { currentTime: Date } = yield call(changeTimeApi);
    //리턴받은 response를 이용해 put()하여 액션을 전달(dispatch)합니다.
    yield put(TimeActionCreator.changeTimeCompleted(response.currentTime));
  } catch (e) {
    console.error(e);
    //실패시에는 실패했음의 액션을 전달(dispatch)합니다.
    yield put(TimeActionCreator.changeTimeFailed());
  }
}
//CHANGE_TIME_REQUEST 액션을 감시합니다.
//액션이 포착되면 changeTime 작업자 사가를 시작합니다.
function* watcher_changeTime() {
  yield takeEvery(TIME_ACTION.CHANGE_TIME_REQUEST, changeTime);
}
//watcher_changeTime()을 이용하는 새로운 사가 작업을 시작합니다.
export default function* timeSaga() {
  yield all([fork(watcher_changeTime)]);
}
