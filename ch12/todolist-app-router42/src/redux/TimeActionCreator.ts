export const TIME_ACTION = {
  CHANGE_TIME: "changeTime" as const,
};

export type TimeActionType = ReturnType<typeof TimeActionCreator.changeTime>;

const TimeActionCreator = {
  changeTime() {
    return { type: TIME_ACTION.CHANGE_TIME, payload: { currentTime: new Date() } };
  },
};

export default TimeActionCreator;
