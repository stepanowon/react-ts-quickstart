import React from "react";
import { connectClockTime, TimeFormatEnum } from "./connectClockTime";
import { connectMousePos, PositionType } from "./connectMousePos";

type PropsType = { currentTime: string; position: PositionType };

const Child = (props: PropsType) => {
  return (
    <div>
      <h2>고차 컴포넌트 사용하기</h2>
      <div>현재시간 : {props.currentTime}</div>
      <hr />
      <div>
        마우스 위치 : {props.position.x}, {props.position.y}
      </div>
    </div>
  );
};

export default connectMousePos(connectClockTime(Child, TimeFormatEnum.HHmmssKOR, 5000));
