var btn = document.querySelector("#button");
var react = document.querySelector('#react');

var flag = 0;

btn.addEventListener("click", function() {
    if (flag == 0) {
        btn.style.color = "cadetblue";
        flag = 1;
        document.querySelector("h2").innerHTML = "Liked the Picture!"

        react.style.opacity = 0.8;
        react.style.transform = "translate(-50%,-50%) scale(1)";
        
        setTimeout(function() {
            react.style.transform = "translate(-50%,-50%) scale(0)";
            
        }, 5000);

        setTimeout(function() {
            react.style.opacity = 0;
        }, 2000);
    } else {
    	document.querySelector("h2").innerHTML = "Hit the Like Button";
        btn.style.color = "white";
        flag = 0;
    }
});
