const candidate = Array(45).fill().map((v, i) => {return i + 1})
const shuffle = [];
while(candidate.length > 0)
{
    const random = Math.floor(Math.random() * candidate.length);
    const spliceArray = candidate.splice(random, 1);
    const value = spliceArray[0];
    shuffle.push(value);
}
const winBalls = shuffle.slice(0, 6).sort((p, c) => p - c);
const bonus = shuffle[6];

function colorrise(number, tag){
    if(number <= 10){
        tag.style.backgroundColor = 'red';
        tag.style.color = 'white';
    }
    else if(number <= 20){
        tag.style.backgroundColor = 'orange';
        tag.style.color = 'black';
    }
    else if (number <= 30){
        tag.style.backgroundColor = 'yellow';
        tag.style.color = 'black';
    }
    else if(number <= 40){
        tag.style.backgroundColor = 'blue';
        tag.style.color = 'white';
    }
    else{
        tag.style.backgroundColor = 'green';
        tag.style.color = 'white';
    }
}

const resultTag  = document.querySelector('#result'); 
for(let i = 0; i < 6; i++)
{
    setTimeout(() => {
        const ball = document.createElement('div');
        ball.className = 'ball';
        colorrise(winBalls[i], ball);
        ball.textContent = winBalls[i];
        resultTag.appendChild(ball);
    }, 650 * (i + 1))
}

const bonusTag = document.querySelector('#bonus');
setTimeout(() => {
    const bonusBall = document.createElement('div');
    bonusBall.className = 'ball';
    colorrise(bonus, bonusBall)
    bonusBall.textContent = bonus;
    bonusTag.appendChild(bonusBall);
}, 4450);


//console.log(shuffle);
//console.log(winBalls);
//console.log(bonus);

/*
    1. candidate를 배열로 선언, 45개의 배열을 fill()함수로 선언해줌
    여기서 fill()함수란 45개의 배열안의 값들을 일일히 지정 해줌
    ex) fill("1")이라면 45개의 값을 모두 문자열"1"로 지정,

    2.fill()을한후에 map()함수를 chaining method느낌으로 해줌
    map()함수는 일대일로 일일히 해줌, 
    ex) map((a,b) => {return a + 1})일때 a는 매개변수로 각 값을 a로 특정
    b는 자릿수로 45개의 값이라면 b는 0~44가 됨
    그래서 map(v, i) => i + 1을 하는건 i = 0 ~ 44 이므로 i + 1을 각 값에
    넣어주면 candidate배열에는 1부터45의 값이 차례로 들어가게됨.

    3.random변수에 candidate의 길이만큼 랜덤수를 대입, 
    spliceArray변수에 랜덤수의 첫값을 정수형태로 추출해주고
    (추출되면 그 자리의 값은 없어짐 45개의 값 -> 44개의 값)
    value에 그 값을 대입후 shuffle배열에 넣어줌, 
    그렇게 되면 shuffle배열에 1부터45의 값이 랜덤으로 대입됨

    4. winBalls변수를 만들고 shuffle의 0부터 5번째 값을 대입,
    bonus 변수를 만들고 shuffle의 6번째 값을 대입,
    
    4-1. winBalls변수에 대입을 해줄때 sort()함수를 이용해 정렬을 해주게 되는데,
    sort( (p, c) => { return p - c; }); 이 함수를 풀이하자면 p, c는 winBalls변수의 0과1번째값 / 1과2번째값등
    배열의 앞,뒤값을 비교할수있는 변수이다, 만약 p - c가 양수이면 
    p 와 c의 순서를 바꿔주고 음수면 안바꿔준다.

    5.winBalls 와 bonus는 합해 총 7개의 숫자가 된다.
    html파일에서 만든 result랑 bonus를 querySelector로 지정해주고
    div를 생성후 class이름을 지정해준다. 그런후 공처럼 css입히고 숫자넣고
    colorrise함수는 로또처럼 표현하기위해 만든 style 함수

    5-1.setTimeout()함수는 "로또"의 긴장감을주기위해 일정시간마다 공이
    나오게끔 연출하는것, 나는 0.65(6500)초마다 하나씩 나오게하기위해
    650 * (i + 1)로 만들었다. 마지막 보너스에는 650 * 7 인 4450을 넣음
*/
