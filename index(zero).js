const btn = document.querySelector("#button");
document.querySelector("#input").focus();

btn.addEventListener("click",() => {
    let inputTag = document.querySelector("#input");
    let wordTag = document.querySelector("#word");
    let errorTag = document.querySelector("#error");
    let word = wordTag.textContent;
    let input = inputTag.value;
    
    if ( word[word.length-1] === input[0] )
    {
        wordTag.textContent = input;
        inputTag.value = "";
        errorTag.textContent = "";
        wordnote.push(input);
        inputTag.focus();
    }
    else
    {
        errorTag.textContent = "다시입력하세요";
        inputTag.value = "";
        inputTag.focus();
    }
}
)