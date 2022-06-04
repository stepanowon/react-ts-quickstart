import React from "react";

type Props = { title: string };

const About = (props: Props) => {
  return (
    <div className="card card-body">
      <h2>Abou {props.title}</h2>
    </div>
  );
};

export default About;
