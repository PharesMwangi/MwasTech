document.getElementById("my-form").onsubmit = function(event){
    event.preventDefault();

    let isValid = true;

    const name = document.getElementById('name').value.trim()
    const email = document.getElementById('email').value.trim()
    const tel = document.getElementById('tel').value.trim()
    const message = document.getElementById('message').value.trim()
    const sub = document.getElementById('sub-btn')

    //delete previous error messages
    document.getElementById('nameError').innerText = "";
    document.getElementById('emailError').innerText = "";
    document.getElementById('telError').innerText = "";
    document.getElementById('txtError').innerText = "";

    if(name === ""){
        document.getElementById('nameError').style.color = "red";
        document.getElementById('nameError').innerText = "Name is Required!";
        isValid = false;
    }else if(name.length < 3){
        document.getElementById('nameError').style.color = "red";
        document.getElementById('nameError').innerText = "Name must be atleast 3 letters!";
        isValid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

    if(email === ""){
        document.getElementById('emailError').style.color = "red";
        document.getElementById('emailError').innerText = "Email is required!"
        isValid = false;
    } else if(!emailPattern.test(email)){
        document.getElementById('emailError').style.color = "red";
        document.getElementById('emailError').innerText = "Invalid email pattern!"
        isValid = false;
    }

    let telPattern = /^(?:\+?254|0)(7|1)\d{8}$/;

    if(tel === ""){
        document.getElementById('telError').style.color = "red";
        document.getElementById('telError').innerText = "Telephone number required!";
        isValid = false;
    } else if(!telPattern.test(tel)){
        document.getElementById('telError').style.color = "red";
        document.getElementById('telError').innerText = "Invalid phone number!"
        isValid = false;
    }  

    if(message === ""){
        document.getElementById('txtError').style.color = "red";
        document.getElementById('txtError').innerText = "Message required!";
        isValid = false;
    } else if(message.length < 50){
        document.getElementById('txtError').style.color = "red";
        document.getElementById('txtError').innerText = "Message must be atleast 50 characters!"
        isValid = false;
    }

    //check if all validations passed
    /*if(isValid) {
        //submit form or perform desired actions
        alert("Form submitted successfully!");
        
        document.getElementById("my-form").reset(); //reset form fields
    }*/
    if (isValid) {
    // Instead of only showing alert
    document.getElementById("my-form").submit();
}

}

const inputs = document.getElementsByClassName('input');

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('focus', () => {
    inputs[i].style.backgroundColor = "lightblue";
  });

  inputs[i].addEventListener('blur', () => {
    inputs[i].style.backgroundColor = ""; // reset when focus is lost
  });
}

