/*문제16 : 로꾸거

문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

```jsx
**입출력**

입력 : 거꾸로
출력 : 로꾸거
``` */



const reversed = (string) => {
  return string.split("").reverse().join("");
} 

console.log(reversed("거꾸로"));