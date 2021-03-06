var tbody = document.querySelector('#table tbody');
const dataset = [];
document.querySelector('#exec').addEventListener('click',function(){
    tbody.innerHTML = ''; //내부 초기화
    const hor = parseInt(document.querySelector('#hor').value);
    const ver = parseInt(document.querySelector('#ver').value);
    const mine = parseInt(document.querySelector('#mine').value);
    //parseInt => 숫자나 문자열을 정수형으로 바꿔줌
    const mineset = (hor*ver) - (mine);
    const candidate = Array(hor * ver)
        .fill()
        .map(function (src, idx){
            return idx;
        });
        let shuffle = [];
        while(candidate.length > mineset){
            let value = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
            shuffle.push(value);
        }
        console.log(shuffle);
        //로또 추첨기에서 했던 배열생성후 1 ~ n까지 값을 차례대로 배열인자안에 넣어준후
        // 정렬된 배열에서 랜덤수를 새로운 배열에 저장해 정렬된 1 부터 n까지의 수를 
        // 랜덤적으로 shuffle에 넣어줌  

    for(let i = 0;i < ver ; i++)    
    {
        const arr = [];
        const tr = document.createElement('tr');
        dataset.push(arr);
        for(let j = 0;j < hor; j++)
        {
            arr.push(1);
            const td = document.createElement('td');
            td.addEventListener('contextmenu',function(e){
                e.preventDefault();
                const Mtr = e.currentTarget.parentNode;
                const Mtbody = e.currentTarget.parentNode.parentNode;
                const can = Array.prototype.indexOf.call(Mtr.children, e.currentTarget);
                const jul = Array.prototype.indexOf.call(Mtbody.children, Mtr);
                if(e.currentTarget.textContent === '' || e.currentTarget.textContent === 'X'){
                    e.currentTarget.textContent = '!';
                } else if (e.currentTarget.textContent === '!'){
                    e.currentTarget.textContent = '?';
                }
                else if(e.currentTarget.textContent === '?'){
                    if(dataset[jul][can] === 1){
                        e.currentTarget.textContent = '';
                    } else if(dataset[jul][can] === 'X'){
                        e.currentTarget.textContent = 'X';
                    }
                }
            });
            td.addEventListener('click',function (e){
                //클릭시의 주변 지뢰 개수 찾기
                const Mtr = e.currentTarget.parentNode;
                const Mtbody = e.currentTarget.parentNode.parentNode;
                const can = Array.prototype.indexOf.call(Mtr.children, e.currentTarget);
                const jul = Array.prototype.indexOf.call(Mtbody.children, Mtr);
                if(dataset[jul][can] === 'X')
                {
                    e.currentTarget.textContent = '펑';
                } else{
                    let around = [
                        dataset[jul][can-1],                         dataset[jul][can+1],
                    ];
                    if(dataset[jul-1]){
                        around = around.concat([dataset[jul-1][can-1],dataset[jul-1][can],dataset[jul-1][can+1]])
                    }
                    if(dataset[jul+1]){
                        around = around.concat([dataset[jul+1][can-1], dataset[jul+1][can],dataset[jul+1][can+1]])
                    }
                    e.currentTarget.textContent = around.filter(function(v) {
                        return v === 'X';
                    }).length;
                }
            });
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    // 지뢰 심기
    for(let k = 0; k < shuffle.length; k++)
    {
        let  height = Math.floor(shuffle[k] / 10); 
        let width = shuffle[k] % 10;
        tbody.children[height].children[width].textContent = 'X';
        dataset[height][width] = 'X';
        // 가로 세로 지정해주고 셔플에 넣어진 값을 차례대로 tbody의 자손인 즉, tr에 지뢰를 넣어줌
    }
});
