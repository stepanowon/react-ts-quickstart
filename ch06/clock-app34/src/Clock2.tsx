import React, { useEffect, useState } from "react";
import DateAndTime from "date-and-time";

type Props = {
  formatString: string;
};

const Clock2 = (props: Props) => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  useEffect(() => {
    const handle = setInterval(() => {
      console.log("## tick!");
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(handle);
    };
  }, []);

  return (
    <div className="boxStyle">
      <h3>{DateAndTime.format(currentTime, props.formatString)}</h3>
    </div>
  );
};

export default Clock2;
