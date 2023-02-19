
    function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].length >=8;
    var confirmPassword = document.forms["myForm"]["confirm"].length >=8;
    var nameFormat = /^[a-zA-Z]*$/;
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    if (name == "") {
      document.getElementById("name").style.borderColor = "red";
      alert("Name must be filled out");
      return false;
    } else if (!nameFormat.test(name)) {
      document.getElementById("name").style.borderColor = "red";
      alert("Name must be correctly filled out");
      return false;
    } else if (email == "") {
      document.getElementById("email").style.borderColor = "red";
      alert("Email must be filled out");
      return false;
    } else if (!emailFormat.test(email)) {
      document.getElementById("email").style.borderColor = "red";
      alert("Email format is invalid");
      return false;
    } else if (password == "") {
      document.getElementById("password").style.borderColor = "red";
      alert("Password must be filled out");
      return false;
    } else if (!passwordFormat.test(password)) {
      document.getElementById("password").style.borderColor = "red";
      alert("Password must be at least 8 characters");
      return false;
    } else if (confirmPassword == "") {
      document.getElementById("confirm").style.borderColor = "red";
      alert("Confirm password must be filled out");
      return false;
    } else if (password !== confirmPassword) {
      document.getElementById("password").style.borderColor = "red";
      document.getElementById("confirm").style.borderColor = "red";
      alert("Passwords do not match");
      return false;
    } else {
      document.getElementById("name").style.borderColor = "green";
      document.getElementById("email").style.borderColor = "green";
      document.getElementById("password").style.borderColor = "green";
      document.getElementById("confirm").style.borderColor = "green";
      alert("Form Submitted Successfully!");
      document.getElementById("myForm").submit();
      return true;
    }
  }

