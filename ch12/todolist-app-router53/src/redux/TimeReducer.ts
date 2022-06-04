import { TimeActionType, TIME_ACTION } from "./TimeActionCreator";

const initialState = {
  currentTime: new Date(),
};

export type HomeStatesType = { currentTime: Date };

const TimeReducer = (state: HomeStatesType = initialState, action: TimeActionType) => {
  switch (action.type) {
    case TIME_ACTION.CHANGE_TIME:
      return { ...state, currentTime: action.payload.currentTime };
    default:
      return state;
  }
};

export default TimeReducer;
