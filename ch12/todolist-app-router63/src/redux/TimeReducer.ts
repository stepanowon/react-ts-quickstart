import { TimeActionType, TIME_ACTION } from "./TimeActionCreator";

const initialState = {
  currentTime: new Date(),
  isChanging: false,
};

export type HomeStatesType = { currentTime: Date; isChanging: boolean };

const TimeReducer = (state: HomeStatesType = initialState, action: TimeActionType) => {
  switch (action.type) {
    case TIME_ACTION.CHANGE_TIME_REQUEST:
      return { ...state, isChanging: true };
    case TIME_ACTION.CHANGE_TIME_COMPLETED:
      return { ...state, currentTime: action.payload.currentTime, isChanging: false };
    default:
      return state;
  }
};

export default TimeReducer;
