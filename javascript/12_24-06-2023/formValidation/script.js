// click validation
function check_form() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let birth = document.getElementById("dob").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let addr = document.getElementById("addr").value;
    let mno = document.getElementById("mno").value;
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;
    if (fname == "" || fname == null) {
        document.getElementById("msg").innerText = "Enter Firstname"
        return false;
    } else if (lname == "" || lname == null) {
        document.getElementById("msg1").innerText = "Enter Lastname"
        return false
    } else if (birth == "" || birth == null) {
        document.getElementById("msg2").innerText = "Select date"
        return false
    } else if (male == false && female == false) {
        document.getElementById("msg3").innerText = "Select Gender"
        return false
    } else if (addr == "" || addr == null) {
        document.getElementById("msg4").innerText = "Enter Address"
        return false
    } else if (mno == "" || mno == null) {
        document.getElementById("msg5").innerText = "Enter Mobile No"
        return false
    } else if (mail == "" || mail == null) {
        document.getElementById("msg6").innerText = "Enter Email"
        return false
    } else if (pass == "" || pass == null) {
        document.getElementById("msg7").innerText = "Enter password"
        return false
    } else if (cpass == "" || cpass == null) {
        document.getElementById("msg8").innerText = "Enter Confirm password"
        return false
    }
    else {
        document.getElementById("msg").innerText = ""
        document.getElementById("msg1").innerText = ""
        document.getElementById("msg2").innerText = ""
        document.getElementById("msg3").innerText = ""
        document.getElementById("msg4").innerText = ""
        document.getElementById("msg5").innerText = ""
        document.getElementById("msg6").innerText = ""
        document.getElementById("msg7").innerText = ""
        document.getElementById("msg8").innerText = ""
        return false
    }
}

// blur effect 
// banifit => do not write again code
function check_blank_value(blnk, spanid) {
    if (blnk.value == "" || blnk.value == null) {
        document.getElementById(spanid).innerText = "Enter value...!!!"
        return false;
    }
}

// KEYBOARD EVENT
function name_expression(expr, spanid) {
    let regex = /^[a-zA-z]*$/;
    if (regex.test(expr.value)) {
        document.getElementById(spanid).innerText = "";
        return false
    } else {
        document.getElementById(spanid).innerText = "Only Alphabets allowed";
        return false
    }
}

// for address 
function addressLength() {
    let addr = document.getElementById("addr").value;
    if (addr.length <= 50) {
        document.getElementById("msg4").innerText = "Address must be more than 50 character";
        return false
    } else {
        document.getElementById("msg4").innerText = ""
        return false
    }
}

// mobile expression
function number_expression(expr, spanid) {
    let regex = /^[0-9]*$/;
    let numberex = /^[6-9]/;
    if (!(regex.test(expr.value) && numberex.test(expr.value))) {
        document.getElementById(spanid).innerText = "Enter proper number";
        return false
    } else if (expr.value.length < 10) {
        document.getElementById(spanid).innerText = "Number must be 10 digits";
        return false
    } else {
        document.getElementById(spanid).innerText = "";
        return false
    }
}

// email expression
function email_ex() {
    let mail = document.getElementById("mail").value;
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(mail)) {
        document.getElementById("msg6").innerText = ""
        return false
    } else {
        document.getElementById("msg6").innerText = "Enter proper email"
        return false
    }
}

// password expression
function passExpression() {
    let pass = document.getElementById("pass").value;
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/;
    if (regex.test(pass)) {
        document.getElementById("msg7").innerText = ""
        return false
    } else {
        document.getElementById("msg7").innerText = "Password must be 8 to 12 character"
        return false
    }
}

// compare
function passcompare() {
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;
    if (cpass != pass) {
        document.getElementById("msg8").innerText = "password and confirm password does not match";
        return false;
    } else {
        document.getElementById("msg8").innerText = "";
        return false;
    }
}

// show password
function showpass() {
    let pass = document.getElementById("pass");
    let cpass = document.getElementById("cpass");
    if ((pass.type == "password") && (cpass.type == "password")) {
        pass.type = "text";
        cpass.type = "text";
    } else {
        pass.type = "password";
        cpass.type = "password";
    }
}