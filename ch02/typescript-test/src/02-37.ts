interface IPerson2 {
  name: string;
  age: number;
}

interface IEmployee extends IPerson2 {
  employeeId: string;
  dept: string;
}

let e1: IEmployee = { employeeId: "E001", dept: "회계팀", name: "홍길동", age: 20 };
