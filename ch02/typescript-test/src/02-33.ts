type PersonTypeA = {
  no: number;
  name: string;
  email: string;
};
type PersonTypeB = {
  no: number;
  name: string;
  tel: string;
};

type PersonTypeInter = PersonTypeA & PersonTypeB;

const p4: PersonTypeInter = {
  no: 1001,
  name: "홍길동",
  email: "gdhong@test.com",
  tel: "010-1111-1111",
};
