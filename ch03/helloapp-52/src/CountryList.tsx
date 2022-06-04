import React from "react";
import { CountryType } from "./App";

type CountryListPropsType = {
  countries: Array<CountryType>;
};

const CountryList = (props: CountryListPropsType) => {
  const list = props.countries;
  let countries = list.map((item, index) => {
    return (
      <li key={item.no} className={item.visited ? "list-group-item active" : "list-group-item"}>
        {item.country}
      </li>
    );
  });

  return <ul className="list-group">{countries}</ul>;
};

export default CountryList;
