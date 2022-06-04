export const TIME_ACTION = {
  CHANGE_TIME_REQUEST: "changeTimeRequest" as const,
  CHANGE_TIME_COMPLETED: "changeTimeCompleted" as const,
  CHANGE_TIME_FAILED: "changeTimeFailed" as const,
};

const TimeActionCreator = {
  changeTimeRequest() {
    return { type: TIME_ACTION.CHANGE_TIME_REQUEST };
  },
  changeTimeCompleted(currentTime: Date) {
    return {
      type: TIME_ACTION.CHANGE_TIME_COMPLETED,
      payload: { currentTime: currentTime },
    };
  },
  changeTimeFailed() {
    return { type: TIME_ACTION.CHANGE_TIME_FAILED };
  },
};

export type TimeActionType =
  | ReturnType<typeof TimeActionCreator.changeTimeRequest>
  | ReturnType<typeof TimeActionCreator.changeTimeCompleted>
  | ReturnType<typeof TimeActionCreator.changeTimeFailed>;

export default TimeActionCreator;
