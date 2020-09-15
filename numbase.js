const input = document.querySelector("#input");
const check = document.querySelector("#check");
const logs = document.querySelector("#logs");
let count = 0; 
//전역변수 - 10번 카운트하기위함 계속 바꾸기때문에 let을 씀
//랜덤한 4자리숫자는 한번에 못만듬 만드는법을 외워야함
// 랜덤한4자리 숫자 만드는법 -> 랜덤한 1자리숫자를 4번만들고 4개를 붙이기
let answer = [];
let numbers = [0,1,2,3,4,5,6,7,8,9];
for(let i = 0 ; i < 4 ; i++){
    const index = Math.floor(Math.random() * numbers.length);
    answer.push(numbers[index]);
    numbers.splice(index , 1);
}
console.log(answer); //--> 정답!
/* answer.join('') --> 배열을 문자열로 해줌
String() --> 문자열로 변환 / Number() --> 숫자로 변환
Math.floor --> 랜덤숫자 소숫점 떼어주기
Math.random() --> 랜덤한 숫자 생성
[로직 설명] 
1. answer객체를 만든다.
2. number객체를생성해 0부터9까지의 숫자을 넣는다.
3. for문으로 0~9사이의 랜덤숫자를 소숫점자리떼고 index에 저장,
4. index에 저장된 랜덤숫자를 answer객체에 4번 넣어준다.
5. answer객체에 넣어줌과 동시에 랜덤으로 생성된 숫자와 같은 
   numbers 객체를 삭제해줌 /ex) 숫자가 5면 numbers객체의 5를 삭제/
6. 10 - i (= numbers.length)를 곱해주는이유는 중복을 거르기위함임.  */
check.addEventListener("click",() => {
    const value = input.value; 
    // 0, '' , NaN , false , null , undifinded -> falsy 값
    if(value && value.length === 4) //else무시
    {
        if(answer.join('') == value)
        {
            logs.appendChild(document.createTextNode('HR')); //홈런
        }
        else
        {
            console.log('false'); //정답과 틀림
            let strike = 0;
            let ball = 0;
            for (const [aIndex, aNumber] of answer.entries())
            {
                for(const [iIndex, iString] of input.value.split('').entries())
                {
                    if(aNumber === Number(iString))
                    {
                        if(aIndex === iIndex)
                        {
                            strike += 1;
                        }
                        else
                        {
                            ball += 1;
                        }
                    }
                }
            }
            if(count >= 10)
            {
                logs.append(`Game Over: ${answer.join('')} / END` , document.createElement('br'));
            }
            else{
                logs.append(`${input.value}: ${strike} strike ${ball} ball`, document.createElement('br'));
                count++;
            }
        }
    }
});