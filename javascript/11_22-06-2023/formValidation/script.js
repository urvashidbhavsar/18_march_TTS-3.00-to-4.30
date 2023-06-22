// click validation
function check_form() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    if (fname == "" || fname == null) {
        document.getElementById("msg").innerText = "Enter Firstname"
        return false;
    } else if (lname == "" || lname == null) {
        document.getElementById("msg1").innerText = "Enter Lastname"
        return false
    }
    else {
        document.getElementById("msg").innerText = ""
        document.getElementById("msg1").innerText = ""
        return false
    }
}

// blur effect 
// banifit => do not write again code
function check_blank_value(blnk, spanid) {
    if (blnk.value == "" || blnk.value == null) {
        document.getElementById(spanid).innerText = "Enter value...!!!"
        return false;
    } else {
        document.getElementById(spanid).innerText = ""
        return false;
    }
}