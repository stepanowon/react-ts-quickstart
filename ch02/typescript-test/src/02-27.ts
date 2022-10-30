function arrayConcat(items1: any[], items2: any[]): any[] {
  return items1.concat(items2);
} //any 타입의 인자를 전달하는 함수

let arr1 = arrayConcat([10, 20, 30], ["a", "b", 40]);
arr1.push(true); //어떤 값이라도 추가할 수 있음
