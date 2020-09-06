const form = document.querySelector("form");
const input = document.querySelector(".input");
const set = document.querySelector(".setWord");
const cont = document.querySelector(".container");
const dan = document.querySelector(".warning");

function inputWord(event){
    event.preventDefault();
    const currentWord = input.value;
    setNewWord(currentWord);
    input.value = "";
}

function setNewWord(text){
    if(text === "")
    {
        dan.innerText = "다시입력하세요";
    }
    else
    {
        if(set.className == "setWord")
        {
            set.className = "js";
            set.innerText = text;
            dan.innerText = "";
        }
        else{
            if(set.className == "js")
            {
                const word = document.querySelector(".js").textContent;
                const lastIndex = word.length - 1;
                const first = text[0];
                if(word[lastIndex] == first)
                {
                    set.innerText = text;
                    dan.innerText = "";
                }
                else
                {
                    dan.innerText = "다시입력하세요";
                }
            }
        }
    }
}

function firstWord(words)
{
    const n1 = words.split("");
    return n1[0];
}

function lastWord(words) 
{
    const n2 = words.split("");
    return [n2.length - 1];
}

function init(){
    cont.addEventListener("submit",inputWord);
}

init();