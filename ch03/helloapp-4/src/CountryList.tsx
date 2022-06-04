import React from "react";

type CountryType = {
  no: number;
  country: string;
  visited: boolean;
};

const CountryList = () => {
  let list: Array<CountryType> = [
    { no: 1, country: "이집트", visited: false },
    { no: 2, country: "일본", visited: true },
    { no: 3, country: "피지", visited: false },
    { no: 4, country: "콜롬비아", visited: false },
  ];

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
