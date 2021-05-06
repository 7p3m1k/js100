/*다음 출력 값으로 올바른 것은?
var arr = [100, 200, 300];
console.log(typeof(arr));

1)  undefined
2)  string
3)  number
4)  object
*/

4번

이유 : Javascript의 array는 object형태를 가진다.

데이터의 타입을 확인하기 위해서는 typeof 를 사용
typeof를 사용하여 배열을 검사하면, typeof는 'object'를 리턴을 한다.

객체가 배열인지 확인 하는 방법은 isArray() 를 사용하면된다.