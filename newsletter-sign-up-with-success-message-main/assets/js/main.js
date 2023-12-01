

const signUp = document.getElementById('sign-up')
const thanks = document.getElementById('thanks')
const email=document.querySelector('input[type="email"]');
const test =document.querySelector('ul li')
const button = document.querySelector('#sign-up .mybutton')

function Vaildate(element){
  var require = document.querySelector('label b:nth-child(2)');
  element.oninput = function(e){
    email.classList.remove("invalid");
    require.innerHTML= "";
  }
  element.onchange = function(e) {
    if(ValidEmail(e.target.value)){
      email.classList.remove("invalid");
      require.innerHTML= "";
    }else{
      email.classList.add("invalid");
      require.innerHTML= "Valid email required";
    }
    if(e.target.value.trim() === ""){
      email.classList.remove("invalid");
      require.innerHTML= "";
    }
  }
}

function ValidEmail(text){
  var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return pattern.test(text.trim());
}
Vaildate(email);
console.log(button)
button.onmouseup =function(){
  if(email.value.trim() !== "" && !email.classList.contains("invalid")){
    signUp.style.display = "none";
    thanks.style.display = "block";
  }
}

