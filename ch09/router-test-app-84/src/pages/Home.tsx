import React from "react";
import { useLocation } from "react-router";

type Props = {};
type LocationStateType = {
  from: string;
};

const Home = (props: Props) => {
  const location = useLocation();
  const state = location.state as LocationStateType;
  const from = state ? state.from : "";

  return (
    <div className="card card-body">
      <h2>Home</h2>
      {from !== "" ? <h4>state.from : {from}</h4> : ""}
    </div>
  );
};

export default Home;
