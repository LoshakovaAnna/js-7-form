document.addEventListener("DOMContentLoaded", init);
var arrEmptyFields, arrWrongFields = [];
var  emptyFields, wrongValueFields;

function init(){
  let submit = document.querySelector("#submit");
  submit.addEventListener('click', submitForm);
}

function submitForm() {
    arrEmptyFields = [];
    arrWrongFields = [];
    emptyFields = document.querySelector(".empty-fields");
    wrongValueFields = document.querySelector(".wrong-value");
    wrongValueFields.textContent = "WRONG VALUE: "
    emptyFields.textContent = "EMPTY FIELDS: ";

    let username = document.querySelector("#username");
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let confPass = document.querySelector('#confirmpassword');
    let gender = document.querySelector('#gender');
  
        showEmptyFill(username);    
        showEmptyFill(email);
        showEmptyFill(password);
        showEmptyFill(confPass);  
        isEqualPassword();
       
  /*  if ((arrEmptyFields==[])&& (arrWrongFields==[])){
        let user ={
            name: username.value,
            emailUser: email.value,
            passwordUser: password.value,
            genderUser: gender.value

        }
        console.log(user);
    }*/
    
}

function isEqualPassword() {
    let password = document.querySelector('#password');
    let confPass = document.querySelector('#confirmpassword');
    let notEqualPass = document.querySelector(".not-equal-passwords");
    password.classList.remove("error-password");
    notEqualPass.textContent = "";
    confPass.classList.remove("error-password");
    if (password.value!=confPass.value){
        password.classList.add("error-password");
        
        confPass.classList.add("error-password");
        notEqualPass.textContent = "NOT EQUAL PASSWORDS";
    }  
}
function isFieldFill(input) {
    return ( (input.hasAttribute('required')) && (input.value.length>0) );
    
}
function showEmptyFill(input){
    input.classList.remove("error-input");
    if (!isFieldFill(input))  
     {  
        arrEmptyFields.push(input.id); 
        emptyFields.textContent += input.id+ "; ";
        input.classList.add("error-input");

    } else
    {
        if (input.hasAttribute('pattern')) {
            var pattern = input.getAttribute('pattern');
             var reg = new RegExp(pattern);
             if (!reg.test(input.value.toUpperCase())) { 
                wrongValueFields.textContent += input.id + "; ";
                arrWrongFields.push(input.id);
             } 
          }
    }
     
}
