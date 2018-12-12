const contactInputName = document.getElementById("contactInputName");

const contactInputEmail = document.getElementById("contatoInputEmail");

const contactInputMessage = document.getElementById("contactInputMessage");

contactInputMessage.addEventListener('focus',function(){
    console.log('hi')
    document.querySelector(".contact__label").style.color = "#ff5050"        
})
contactInputMessage.addEventListener('blur',function(){
    console.log('hi')
    document.querySelector(".contact__label").style.color = "#c8c8c8"  
})

const contactForm = document.getElementById("formcontact");

const contactInvalidInput = "input__error"
const contactValidInput = "contact__input"
const contactValidInputBox = "contact__input-box"
const contactButton = document.querySelector(".contact__btn");

const contactValidateEmail = /\@/.compile()


contactButton.addEventListener("click", function(ev){
    ev.preventDefault();
    console.log(contactValidateEmail.test(contactInputEmail.value));


if(!contactInputName.value.trim()){
    contactInputName.focus();
    contactInputName.classList.add(contactInvalidInput);
    return false

} else if(!contactInputEmail.value.trim() || !contactValidateEmail.test(contactInputEmail.value)){
    contactInputEmail.focus();
    contactInputEmail.classList.add(contactInvalidInput);
    return false

}else if (!contactInputMessage.value.trim()){
    contactInputMessage.focus();
    contactInputMessage.classList.add(contactInvalidInputBox);
    return false
}

contactForm.reset();

contactInputEmail.className = contactValidInput;
contactInputName.className = contactValidInput;
contactInputMessage.className = contactValidInputBox;

})

