function draw() {
    var canvas = document.getElementById("gCanvas"); 
    var ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
window.onload = draw;
window.onresize = draw;