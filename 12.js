/*
문제12 : 게임 캐릭터 클래스 만들기

다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.
**주어진 소스 코드를 수정해선 안됩니다.**

```jsx
**데이터**
<여기에 class를 작성하세요.>

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

**출력**
545 210 10
파이어볼
```
*/

/*제가 푼거*/ 
function Wizard(health,mana,armor) {
  this.health = health;
  this.mana = mana;
  this.armor = armor;
  
  this.attack = () =>{
    console.log("파이어볼")
  }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();



//문제에서는 class로 작성하라고 했는데.. new만보고 그냥 this생각나서 이렇게 만들었습니다.. class에 대해서 공부하기

/*정답*/ 
const Wizard = class Wizard {
  constructor (health, mana, armor){
      this.health = health;
      this.mana = mana;
      this.armor = armor;
  }
  attack(){
      console.log('파이어볼');
  }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();