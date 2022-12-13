// 5. Create a function that validates a password to conform to the following rules:
//  Length between 6 and 24 characters,
//  At least one uppercase letter (A-Z).
//  At least one lowercase letter (a-z).
//  At least one digit (0-9).
//  Maximum of 2 repeated characters (“aa” is OK, “aaa” is NOT).
//  Supported special characters: ! @ # $ % ^ &amp; * ( ) + = _ - { } [ ] : ; &quot; &#39; ? &lt; &gt; , .
//  Examples: validatePassword(&quot;P1zz@&quot;) ➞ false // Too short.
//  validatePassword(&quot;iLoveYou&quot;) ➞ false // Missing a number.
//  validatePassword(&quot;Fhg93@&quot;) ➞ true // OK!

var name1 = document.getElementById("fname");
var password1 = document.getElementById('fpassword');
var send1 = document.getElementById("sendBtn");

send1.addEventListener("click", validation);
name1.addEventListener("focus", allClear);
password1.addEventListener("focus", allClear);

function validation() 
{  var check = 0;
     //name validation
  if(name1.value == "") {
    name1.value = "This is required!";
    name1.style.color = "red";
    check = 1;
  };
    //password validation
  var upperStr = 0;
  var lowerStr = 0;
  var numb = 0;
  var threeCar = 0;
  var supChar = 0;
   
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const alphabetLow = alphabet.map(e => e.toLowerCase());
  const specialSy = ["!", "@", "#", "$" ,"%", "^", "*", "(", ")", "+", "=", "_" ,"-" , "{","}", "[", "]", ":",";","\"","\'","?","<",">",",","."];
  const number2 = ['0','1','2','3','4','5','6','7','8','9'];
  const merged = [...alphabet, ...alphabetLow,...specialSy,...number2];
   
  if( password1.value.length < 6 || password1.value.length > 24 ) {
    window.alert ( "Length must be between 6 and 24 characters!" );
    check = 1;
  };
  for (let i = 0; i < password1.value.length; i++) {
    if( alphabet.includes(password1.value[i]) ) {
      upperStr++;
    };
    if( alphabetLow.includes(password1.value[i])) {
      lowerStr++;
    };
    if(isNaN(password1.value[i]) == false) {
      numb++;
    };
    if( password1.value[i] == password1.value[i+1] && password1.value[i] == password1.value[i+2]) {
      threeCar++;
    };
    if( merged.includes(password1.value[i])) {
      supChar++;
    };
  };
    if(upperStr == 0){
      window.alert ("Required at least one uppercase letter!");
      check = 1;
    };
    if(lowerStr == 0){
      window.alert ("Required at least one lowercase letter!");
      check = 1;
    };
    if(numb == 0){
      window.alert ("Required at least one one digit (0-9)!");
      check = 1;
    };
    if(threeCar != 0){
      window.alert ( "Maximum of 2 repeated characters!");
      check = 1;
    };
    if(supChar != password1.value.length){
      window.alert ("You use unsupported character!");
      check = 1;
    };
    if(check == 0){
      window.location.assign('second.html')
    };
};
function allClear(){
  this.value = "";
  this.style.color = "black";
};    