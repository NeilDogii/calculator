var element = document.getElementsByClassName("btn");
for (var i = 0 ; i < 16; i++) {
    element[i].addEventListener('click' , function(e) {
        console.log(e.target.firstChild.data)
        //document.getElementsByClassName("display")[0].innerHTML = ;
    })
 }
// element.addEventListener("click", function() {
//     console.log("Button clicked")
//   document.getElementById("demo").innerHTML = "Hello World";
// });