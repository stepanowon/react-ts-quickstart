import { useState, useEffect } from "react";
import DateAndTime from "date-and-time";

const App = () => {
  const [currentTime, setCurrentTime] = useState(DateAndTime.format(new Date(), "HH:mm:ss"));

  useEffect(() => {
    const handle = window.setInterval(() => {
      setCurrentTime(DateAndTime.format(new Date(), "HH:mm:ss"));
    }, 1000);

    return () => {
      window.clearInterval(handle);
    };
  }, []);

  return (
    <>
      <h2>현재 시각</h2>
      <hr />
      <div>{currentTime}</div>
    </>
  );
};
export default App;
