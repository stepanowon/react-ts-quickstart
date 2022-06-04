import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export const TIME_ACTION = {
  CHANGE_TIME_REQUEST: "changeTimeRequest" as const,
  CHANGE_TIME_COMPLETED: "changeTimeCompleted" as const,
};

const TimeActionCreator = {
  changeTimeRequest: () => {
    return { type: TIME_ACTION.CHANGE_TIME_REQUEST };
  },
  changeTimeCompleted: ({ currentTime }: { currentTime: Date }) => {
    return {
      type: TIME_ACTION.CHANGE_TIME_COMPLETED,
      payload: { currentTime: currentTime },
    };
  },
  asyncChangeTime() {
    //의도적 지연시간 1초
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
      dispatch(this.changeTimeRequest());
      setTimeout(() => {
        dispatch(this.changeTimeCompleted({ currentTime: new Date() }));
      }, 1000);
    };
  },
};

export type TimeActionType =
  | ReturnType<typeof TimeActionCreator.changeTimeCompleted>
  | ReturnType<typeof TimeActionCreator.changeTimeRequest>;

export default TimeActionCreator;
