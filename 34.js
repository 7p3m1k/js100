// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 

// 민주를 위해 **키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램**을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)

// ```jsx
// **입출력**

// 입력 : 176 156 155 165 166 169
// 출력 : NO

// 입력 : 155 156 165 166 169 176
// 출력 : YES
// ```

// const tall = (str) => {
//   string = str.split(" ");
//   sortStr = str.split(" ").sort();
  
//   for(let i = 0; i < string.length-1; i++)
//    return string[i] === sortStr[i] ?  "yes" : "no";
// }


// tall("1 2 3 4 6 5")


// console.log(string)
// console.log(sortStr)


const checkBiggerTall = (str) => {
  string = str.split(" ");
  sortStr = str.split(" ").sort((a,b)=>{
    return a - b;
  });
  for (let i = 0; i<string.length-1; i++) {
    if (string[i] !== sortStr[i]) {
    result = "no";
    break;
    }
    result = "yes";
  }
return result;
}

checkBiggerTall("1 11 12 2 3 4 5 7 9")
console.log(string)
console.log(sortStr)