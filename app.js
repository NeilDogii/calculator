var element = document.getElementsByClassName("btn");
var signs = ['+', '-', '*', '/']
var expression = ""
for (var i = 0 ; i < 16; i++) {
    element[i].addEventListener('click' , function(e) {
        //console.log(!isNaN(e.target.firstChild.data), signs.includes(e.target.firstChild.data))
        if(isNaN(e.target.firstChild.data) && !signs.includes(e.target.firstChild.data) && e.target.firstChild.data != "C" && e.target.firstChild.data != "="){
        return console.error("Illegal format, please do no change the input. If the problem persists, please reload the page.")
        }
        var str = document.getElementsByClassName("display")[0].value
        if(e.target.firstChild.data == "C"){
            document.getElementsByClassName("display")[0].value = str.substring(0, str.length - 1);
            expression = expression.substring(0, expression.length - 1)
        }else if(e.target.firstChild.data == "="){
            document.getElementsByClassName("display")[0].value = eval(expression)
            expression = eval(expression)
        }else{
            document.getElementsByClassName("display")[0].value += e.target.firstChild.data;
            expression += e.target.firstChild.data
        }
        
    })
 }