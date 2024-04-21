var element = document.getElementsByClassName("btn");
for (var i = 0 ; i < 16; i++) {
    element[i].addEventListener('click' , function(e) {
        console.log(e.target.firstChild.data)
        var str = document.getElementsByClassName("display")[0].value
        if(e.target.firstChild.data == "C"){
            document.getElementsByClassName("display")[0].value = str.substring(0, str.length - 1);
        }else if(e.target.firstChild.data == "="){
            var str = document.getElementsByClassName("display")[0].value
            document.getElementsByClassName("display")[0].value = eval(str);
        }else{
            document.getElementsByClassName("display")[0].value += e.target.firstChild.data;
        }
        
    })
 }