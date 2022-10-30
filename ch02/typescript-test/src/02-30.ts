type PersonType = {
  name: string;
  mobile: string;
  birthYear?: number;
};

type PersonListType = {
  pageNo: number;
  pageSize: number;
  persons: PersonType[];
};

const personList: PersonListType = {
  pageNo: 2,
  pageSize: 4,
  persons: [
    { name: "정연", mobile: "010-2222-1111" },
    { name: "유나", mobile: "010-2222-1112", birthYear: 1993 },
    { name: "유정", mobile: "010-2222-1113", birthYear: 1992 },
  ],
};
