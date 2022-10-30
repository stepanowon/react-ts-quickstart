//string 타입에 대한 별칭 부여
type MyType = string;
let a: MyType = "Hello";

//복잡한 타입에 대한 별칭 부여
type MyType2 = { name: string; age: number };
let b: MyType2 = { name: "홍길동", age: 20 };

//선택적 속성과 읽기 전용 속성
type MyType3 = {
  name: string;
  age?: number;
  readonly email: string;
};
let c: MyType3 = { name: "홍길동", email: "gdhong@test.com" };
//읽기 전용이므로 에러 발생
//c.email = "gdhong@test.com";

//튜플 타입
type TupleType = [string, number];
let d: TupleType = ["hello", 100];
