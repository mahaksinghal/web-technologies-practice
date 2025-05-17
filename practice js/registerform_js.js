console.log("hi");

// validation for password and confirm password
function validatePassword(id, cid, errId){
    console.log("in validatePassword()");
    var pass = document.getElementById(id).value;
    var cpass = document.getElementById(cid).value;
    // to check if password and confirm password are not empty and not contain spaces and are matching
    if(pass !== "" && cpass !== "" && pass.trim().length > 0 && cpass.trim().length > 0 && pass.trim() === cpass.trim()) {
        //if true, clear the error message and return true (if all conditions are met)
        document.getElementById(errId).innerHTML = "";
        return true;
    }
    // else if password and confirm password are empty or contain spaces or not matching 
    document.getElementById(errId).innerHTML = "Password can't contain spaces and must match";
    // also clear the password and empty password fields if false
    document.getElementById(id).value = "";
    document.getElementById(cid).value = "";
    return false;
}

// validation for checkboxes
function validateCheckBox(name, errId){
    console.log("in validateCheckBox()");
    var arr = document.getElementsByName(name);
    var count = 0;
    var str = "";
    for(var i = 0; i<arr.length; i++){
        if(arr[i].checked){
            count++;
            str += arr[i].value + ", ";
        }
    }
        console.log(str);

        if(count>0){
            document.getElementById(errId).innerHTML = "";
            return true;
        }
        document.getElementById(errId).innerHTML = "Please select at least one hobby";
        return false;
}

function validateRadioButton(name, errId){
    var arr = document.getElementsByName(name);
    for(var i = 0; i < arr.length; i++){
        if(arr[i].checked){
            document.getElementById(errId).innerHTML = "";
            return true;
        }
    }
        document.getElementById(errId).innerHTML = "Please select one option";
        return false;
}

function validateDropDown(id, errId){
    var city = document.getElementById(id);
    // index of selected option
    var index = city.selectedIndex;
    // value of selected element
    var value = city.options[index].value;
    if(index !== 0){
        document.getElementById(errId).innerHTML = "";
        return true;
    }
    document.getElementById(errId).innerHTML = "Please select a city";
    return false;
}



function validateData(){
    console.log("in validateData()");
    passFlag = validatePassword("pass", "cpass", "errPass");
    hobbyFlag = validateCheckBox("hobbies", "errHobbies");
    genderFlag = validateRadioButton("gender", "errGender");
    degreeFlag = validateRadioButton("degree", "errDegree");
    cityFlag = validateDropDown("city", "errCity");
    return passFlag && hobbyFlag && genderFlag && degreeFlag && cityFlag;
}