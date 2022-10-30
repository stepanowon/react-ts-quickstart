// 이 예제는 브라우저의 콘솔에서 실행하세요
var obj = { result: 0 };
obj.add = function (x, y) {
  this.result = x + y;
};
var add2 = obj.add;
console.log(add2 === obj.add); //true, 동일한 함수
add2(3, 4); //전역 변수 result에 7이 할당됨.
console.log(obj); // { result:0 }
console.log(result); //7
