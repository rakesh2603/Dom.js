(function () {
    var add = document.querySelector("#add");
    var popup = document.querySelector(".popup")
    var x = document.querySelector(".x")
    add.addEventListener("click", () => {
        popup.classList.add("show")
    })
    x.addEventListener("click", () => {
        popup.classList.remove("show")
    })
})();



var a = document.querySelector(".save");
var b = document.querySelector("#EmployeName")
var c = document.querySelector("#EmployeCity")
var d = document.querySelector("#EmployeAddress")
var e = document.querySelector("#EmployeJob")
var f = [];
var g = document.querySelector("#myForm")
var h = document.querySelector(".update")


if (localStorage.getItem("charger") != null)
    f = JSON.parse(localStorage.getItem("charger"))


a.onclick = (function (event) {
    // event.preventDefault()
    saveData();

    g.reset("")

})


function saveData() {
    f.push({
        Name: b.value,
        City: c.value,
        Address: d.value,
        Job: e.value

    });
    var add = JSON.stringify(f);
    localStorage.setItem("charger", add);

}


var table = document.querySelector(".table");

const water = () => {
    table.innerHTML = "";
    f.forEach((data, index) => {
        table.innerHTML += `
         <tr index="${index}">
                    <td class="td">${index + 1}</td>
                    <td class="td">${data.Name}</td>
                    <td class="td">${data.City}</td>
                    <td class="td">${data.Address}</td>
                    <td class="td">${data.Job}</td>
                   <td> <button class="edit">Edit</button>
                    <button class="delete">Delete </button></td>
                    
                    
                </tr> `
    });
    var i;
    var h = document.querySelectorAll(".delete")
    for (i = 0; i < h.length; i++) {
        h[i].addEventListener("click", function () {
            var tr = this.parentElement.parentElement;
            var id = tr.getAttribute("index");
            f.splice(id, 1);
            localStorage.setItem("charger", JSON.stringify(f));
            tr.remove()


        });
    }



    //     var editbtn = document.querySelectorAll(".edit")
    //     // console.log(editbtn)
    //     for (i = 0; i < editbtn.length; i++) {
    //         editbtn[i].addEventListener("click", function () {
    //             // alert();
    //             var q = this.parentElement.parentElement;
    //             var v = q.querySelectorAll("td")
    //             // console.log(v);
    //             var bluetooth = q.getAttribute("index")
    //             // alert(bluetooth);
    //             var employeename = v[1].innerHTML;
    //             //  alert(employeename)
    //             var employecity = v[2].innerHTML;
    //             // alert(employecity)
    //             var employeaddress = v[3].innerHTML;
    //             // alert(employeaddress)
    //             var emplotejob = v[4].innerHTML;
    //             // alert(emplotejob)
    //             add.click();
    //             a.disabled = true;
    //             h.disabled = false;
    //             b.value = employeename;
    //             c.value = employecity;
    //             d.value = employeaddress;
    //             e.value = emplotejob;
    //             h.onclick = function(e){

    //                 f[index] = {
    //                     Name: b.value,
    //                     City: c.value,
    //                     Address: d.value,
    //                     Job: e.value
    //                 }
    //                 localStorage.setItem("charger", JSON.stringify(f));
    //             }
    //         })
    //     }


}





water();




var log_out=document.querySelector(".btn");
log_out.onclick = function(){
    // alert()
    location.href="index.html"
}