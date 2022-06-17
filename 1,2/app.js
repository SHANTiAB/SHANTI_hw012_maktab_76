//Q1-> PART ONE
function validateForm() {
 
  const a = document.forms["contact-info"]["name"].value;
  if (a == null || a == "") {
    alert("reruired name");
  }else{
      alert("valid massage");
  }
}
 
 function myValidation(){
    const a = document.forms["contact-info"]["name"].value;
    if(a == null || a == ""){
       alert("Oops! Validation failed!");
       returnToPreviousPage();
       return false;
    }
    alert("Validations successful!");
    return true;
 }


 //Q2=> PART TWO
 function myFunction() {
    document.getElementById("email").innerHTML.getElementById('#ce') = "shantiabbasian@gmail.com!"
  }


//Q3=>PART THREE
const prevent = document.querySelector('form .sub');
element.addEventListener('submit', e => {
  e.preventDefault();
  console.log('submission cancelled.');
});