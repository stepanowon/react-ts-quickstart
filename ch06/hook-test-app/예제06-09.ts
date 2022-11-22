type MemberType = {
  name: string;
  point: number;
};
const familyMembers: Array<MemberType> = [
  { name: "홍길동", point: 10000 },
  { name: "성춘향", point: 20000 },
  { name: "홍예지", point: 15000 },
  { name: "홍철수", point: 5000 },
  { name: "홍희수", point: 10000 },
];

const initialPoint = 10000;
const reducer = (totalPoint: number, member: MemberType) => {
  totalPoint += member.point;
  return totalPoint;
};

const totalPoint = familyMembers.reduce(reducer, initialPoint);
console.log(`가족 합계 포인트 : ${totalPoint}`);
