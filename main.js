var mouseEvent = " empty";

canvas = document.getElementById("myCanvas");

function clearArea() { ctx.clearRect(0, 0, canvas.width, canvas.height); }

color = "red";

ctx = canvas.getContext("2d");

width_of_circle = 1;

var last_position_of_x, last_position_of_y;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_circle = document.getElementById("width_of_circle").value;

    mouseEvent = "mouseDown";
}


canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}


canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "moseUP";
}


canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_circle;

        console.log("Last Position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates =");
        console.log("x = " + current_position_of_mouse_x + "y =" + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y
}