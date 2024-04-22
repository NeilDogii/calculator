var element = document.getElementsByClassName("btn");
var signs = ['+', '-', '*', '/']
for (var i = 0 ; i < 16; i++) {
    element[i].addEventListener('click' , function(e) {
        console.log(!isNaN(e.target.firstChild.data))
        console.log(!signs.includes(e.target.firstChild.data))
        if(isNaN(e.target.firstChild.data) || !signs.includes(e.target.firstChild.data)){
        console.log("wont run")
        }
        var str = document.getElementsByClassName("display")[0].value
        var expression = ""
        if(e.target.firstChild.data == "C"){
            document.getElementsByClassName("display")[0].value = str.substring(0, str.length - 1);
        }else if(e.target.firstChild.data == "="){
            var str = document.getElementsByClassName("display")[0].value
            document.getElementsByClassName("display")[0].value = eval(str)
        }else{
            document.getElementsByClassName("display")[0].value += e.target.firstChild.data;
        }
        
    })
 }