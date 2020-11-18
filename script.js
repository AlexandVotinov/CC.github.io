const $INPUT     = document.getElementById('input');
const $BUTTON    = document.getElementById('button');
const $RESULT    = document.getElementById('result');
const $OF_SUSTEM = document.getElementsByClassName('of-sustem');
const $TO_SUSTEM = document.getElementsByClassName('to-sustem');

$BUTTON.addEventListener('click', getResult);

function getResult(e){
    e.preventDefault();
    let inputNum = $INPUT.value;
    let result = 'Введите число';
    if(inputNum){
       result = parseInt(inputNum, setSustem($OF_SUSTEM)).toString(setSustem($TO_SUSTEM)); 
    }
    $RESULT.innerHTML = result;
}

function setSustem(sus){
    for(let i = 0; i < sus.length; i++){
        if(sus[i].checked){
            return sus[i].value;
        }
    }
}