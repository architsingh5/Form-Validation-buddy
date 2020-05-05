const name = document.getElementById('name');
const email = document.getElementById('email');
const scholar = document.getElementById('scholar');
let validEmail = false;
let validScholar = false;
let validName = false;

name.addEventListener('blur', function (){
    let regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    let str = name.value;
    if(regex.test(str)){
        name.classList.remove('is-invalid');
        validName = true;
    }
    else{
        name.classList.add('is-invalid');
        validName = false;
    }
})

scholar.addEventListener('blur', function() {
    
    let regex = /^([0-9]){9}$/;
    let str = scholar.value;
    if(regex.test(str)){
        scholar.classList.remove('is-invalid');
        validScholar = true;
    }
    else{
        scholar.classList.add('is-invalid');
        validScholar = false; 
    }
})

email.addEventListener('blur', function() {

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if(regex.test(str)){
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        email.classList.add('is-invalid');
        validEmail = false;
    }
})


const submit = document.getElementById('submit');

submit.addEventListener('click', (e)=>{
    e.preventDefault();

    if(validEmail && validName && validScholar){
        var a=document.getElementById("msg");
        a.innerText="Your response is valid, Thanks for sharing.";
        document.getElementById("pic").classList.remove("fa-times-circle")
        document.getElementById("pic").classList.add("fa-check-circle")
    }
    else{
        var a=document.getElementById("msg");
        a.innerText="Invalid!! Please check your all details.";
        document.getElementById("pic").classList.add("fa-times-circle")
        document.getElementById("pic").classList.remove("fa-check-circle")
    }
})
