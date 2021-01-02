let email;
let fname;
let lname;
let pword;


var btn = document.querySelector("#submitbtn");
btn.addEventListener("click", validatefname);
btn.addEventListener("click", validatelname);
btn.addEventListener("click", validateEmail);
btn.addEventListener("click", validatepword);
btn.addEventListener("click", test);

function test(){
    console.log('i work')
}


function validatefname() {
    fname = document.getElementById('fname').value;
    if (fname === '') {
        document.getElementById('deet1').style.borderColor = "red";
        document.getElementById('errdeet1').style.display = "block";
        document.getElementById('iconerrdeet1').style.display = "block";

        
    }
}


function validatelname() {
    lname = document.getElementById('lname').value;
    if (lname === '') {
      document.getElementById("deet2").style.borderColor = "red";
      document.getElementById("errdeet2").style.display = "block";
      document.getElementById("iconerrdeet2").style.display = "block";

    }
}










function validateEmail(email) {
    email = document.getElementById('email').value
    console.log(email)
    // alert('i work') 


    if (email === '') {
        document.getElementById("deet3").style.borderColor = "red";
        document.getElementById("errdeet3").style.display = "block";
        document.getElementById("iconerrdeet3").style.display = "block";

        document.getElementById('errdeet3').innerHTML = 'Enter an Email'
    }
    else {

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let result = re.test(String(email).toLowerCase());
        console.log(result)

        if (result !== true) {

            document.getElementById('errdeet3').innerHTML = 'Enter a valid Email'
            document.getElementById("deet3").style.borderColor = "red";
            document.getElementById("errdeet3").style.display = "block";
            document.getElementById("iconerrdeet3").style.display = "block";
        }
    }





}



function validatepword(){
    pword = document.getElementById('pword').value;
    if(pword===''){
        document.getElementById('errdeet4').innerHTML='Enter a password'
        document.getElementById("deet4").style.borderColor = "red";
        document.getElementById("errdeet4").style.display = "block";
        document.getElementById("iconerrdeet4").style.display = "block";
       }
   else if(pword.length < 8){
        document.getElementById('errdeet4').innerHTML='Password is too short'
        document.getElementById("deet4").style.borderColor = "red";
        document.getElementById("errdeet4").style.display = "block";
        document.getElementById("iconerrdeet4").style.display = "block";
    }
}