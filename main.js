document.addEventListener("DOMContentLoaded", init);
var arrEmptyFields, arrWrongFields;
var  emptyFields, wrongValueFields, errorsBlock;

function init(){
  let submit = document.querySelector("#submit");
  submit.addEventListener('click', submitForm);
};

function submitForm() {  
    initialSettings();
    checkInputValues();
    createNewUser();   
};

function initialSettings(){
    arrEmptyFields = [];
    arrWrongFields = [];

    emptyFields = document.querySelector(".empty-fields");    
    emptyFields.textContent = "EMPTY FIELDS: "; 
    hideElement(emptyFields);

    wrongValueFields = document.querySelector(".wrong-value");
    wrongValueFields.textContent = "WRONG VALUE: ";
    hideElement(wrongValueFields); 
    
    errorsBlock = document.querySelector(".errors");
    hideElement(errorsBlock);
};

function hideElement(element){
    element.classList.add("hide-message");    
};

function showElement(element){
    element.classList.remove("hide-message");
};

function checkInputValues(){    
    let username = document.querySelector("#username");
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let confPass = document.querySelector('#confirmpassword');
  
    checkFieldValue(username);    
    checkFieldValue(email);
    checkFieldValue(password);
    checkFieldValue(confPass);  
   
    checkEqualPassword(confPass,password);
};

function checkFieldValue(input){
    input.classList.remove("error-input");
    if (!isFieldFill(input))  
    {  
        arrEmptyFields.push(input.id); 
        emptyFields.textContent += input.id+ "; ";
        input.classList.add("error-input");
        showElement(emptyFields);
    } 
    else{
        checkPattern(input);
    }     
};

function isFieldFill(input) {
    return ( (input.hasAttribute('required')) && (input.value.length > 0) );
};

function checkPattern(input){
    if (input.hasAttribute('pattern')) {
        var pattern = input.getAttribute('pattern');
        var reg = new RegExp(pattern);
        if (!reg.test(input.value.toUpperCase())) { 
            wrongValueFields = document.querySelector(".wrong-value");
            wrongValueFields.textContent += input.id + "; ";
            arrWrongFields.push(input.id);

            showElement(wrongValueFields);
        } 
    }
};

function checkEqualPassword(input1, input2){
    let notEqualPass = document.querySelector(".not-equal-passwords");
    hideElement(notEqualPass);    
    if (!isEqualPassword( input1, input2)){
        input1.classList.add("error-password");        
        input2.classList.add("error-password");        
        showElement(notEqualPass);        
    }  
    else{
        input1.classList.remove("error-password");    
        input2.classList.remove("error-password");
    }
};

function isEqualPassword(input1, input2) {   
    return (input1.value == input2.value);
};

function createNewUser(){   
    let password = document.querySelector('#password');
    let confPass = document.querySelector('#confirmpassword');

    if ( (arrEmptyFields.length == 0) && (arrWrongFields.length == 0) && ( isEqualPassword(confPass,password) ) ) {
        console.log("new user:");
        let user = {
            nameUser: document.querySelector("#username").value,
            emailUser: document.querySelector('#email').value,
            passwordUser: password.value,
            genderUser: document.querySelector('#gender').value
        }
        console.log(user);
    }
    else
    {
        console.log("wrong value!");
        showElement(errorsBlock);        
    }
};