const newsLetterInputName = document.getElementById
("newsInputName");

const newsLetterInputEmail = document.getElementById
("newsInputEmail");

const newsLetterInputWhats = document.getElementById
("newsInputWhats");

const newsLetterForm = document.getElementById
("formNews");

const invalidInput = "news__input__error"
const validInput = "news__input"

const validateEmail = /\@/.compile()

const button = document.querySelector(".news__button");

button.addEventListener("click", function(ev){
    ev.preventDefault();

if(newsLetterInputName.value === undefined || newsLetterInputName.value === null || newsLetterInputName.value === "" || newsLetterInputName.value === " "){
    newsLetterInputName.focus();
    newsLetterInputName.className = invalidInput;
    return false

}else if(newsLetterInputEmail.value === undefined 
    || newsLetterInputEmail.value === null 
    || newsLetterInputEmail.value === "" 
    || newsLetterInputEmail.value === " "
    || !validateEmail.test(newsLetterInputEmail.value)){
    newsLetterInputEmail.focus();
    newsLetterInputEmail.className = invalidInput;
    return false

}else if (newsLetterInputWhats.value === undefined || newsLetterInputWhats.value === null || newsLetterInputWhats.value === "" || newsLetterInputWhats.value === " "){
    newsLetterInputWhats.focus();
    newsLetterInputWhats.className = invalidInput;
    return false


}

newsLetterForm.reset();

newsLetterInputEmail.className = validInput;

newsLetterInputName.className = validInput;

newsLetterInputWhats.className = validInput;



})

