/////signup page///
function signup() {
    location.href = "login.html"
}


var a = document.querySelector(".register");
var b = document.querySelector("#name");
var c = document.querySelector("#email");
var d = document.querySelector("#passw");
var s_notice = document.querySelector("#s-notice")


a.onclick = function (event) {
    event.preventDefault();
    // alert();
    if (c.value != " " || b.value != " " || d.value != " ") {
        if (localStorage.getItem(c.value && b.value) ==null) {
            var data = {
                nam: b.value,
                emai: c.value,
                pass: d.value

            }

            var string = JSON.stringify(data);
            localStorage.setItem("vinay", string);
            s_notice.innerHTML = "signup success";
            setTimeout(function () {
                s_notice.innerHTML = "";
            }, 3000)
            b.value = "";
            c.value = "";
            d.value = ""

        }
        else {
            s_notice.innerHTML = "Username already exist";

            setTimeout(function () {
                s_notice.innerHTML = "";
            }, 3000)
        }


    }
    else {
        s_notice.innerHTML = "Fill all the field"
        setTimeout(function () {
            s_notice.innerHTML = "";
        }, 3000)
    }


}



///login page///

function login() {
    location.href = "index.html"
}


var log_in = document.querySelector("#login-btn");
var userid = document.querySelector("#userid");
var pass = document.querySelector("#pass");
var login_notice = document.querySelector("#login-notice")



log_in.onclick = function (event) {
    event.preventDefault();
    // alert();
    if (userid.value != "" && pass.value != "") {
        if (localStorage.getItem(userid.value) != null) {
            // alert("success")
            var data = localStorage.getItem(userid.value);
            var pp = JSON.parse(data);
            var pppp = pp.pass;
            // alert(pppp)
            if (pass.value == pppp) {
                location.href = "dashboard.html"
            }
            else {
                login_notice.innerHTML = "password not match"
                setTimeout(function () {
                    login_notice.innerHTML = "";
                }, 3000)

            }
        }
        else {
            login_notice.innerHTML = "username not found"
            setTimeout(function () {
                login_notice.innerHTML = "";
            }, 3000)
        }
    }
    else {
        login_notice.innerHTML = "please enter all field"
        setTimeout(function () {
            login_notice.innerHTML = "";
        }, 3000)
    }
}






