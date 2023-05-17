function clearError() {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}


function setError(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}
function checkValidation() {
    var returnValue = true;
    clearError();

    var name = document.forms["myLogin"]["fname"].value;
    // alert("name = " + name);
    if (name.length > 10) {
        setError("name", "Length of name is too long");
        returnValue = false;
    }
    var pass = document.forms["myLogin"]["fpass"].value;
    // alert(pass);
    // g = /[0-9][A-Z][a-z]$/;
    if (/^[A-Za-z\d]{8,}$/.test(pass) == 0) {
        setError("pass", "Atleast 1 capital letter and 1 digit min length 8");
        returnValue = false;
    }
    var cnic = document.forms["myLogin"]["cnicNum"].value;
    // alert(cnic);
    g = /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/;
    if (g.test(cnic) == 0) {
        setError("cnic", "Wrong input");
        returnValue = false;
    }



    return returnValue;
}