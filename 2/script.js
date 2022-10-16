const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");


// ctx.beginPath();
// ctx.arc(780, 20, 20, Math.PI * 2, false);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(780, 578, 20, Math.PI * 2, false);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.moveTo(0,570);
// ctx.lineTo(50,595);
// ctx.lineTo(50,545);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

    // function draw() {
    //     let x = 50;
    //     ctx.beginPath();
    //     ctx.rect(0, 0, x, 50);
    //     ctx.fillStyle = "#FF0000";
    //     ctx.fill();
    //     ctx.closePath();
    //     x+=10;
    // }

    // setInterval(draw, 500)

    ctx.beginPath();
    ctx.rect(10, 10, 50, 50);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(740, 10, 50, 40);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(770, 568, 20, Math.PI * 2, false);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(10,570);
    ctx.lineTo(60,595);
    ctx.lineTo(60,545);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();





function draw() {
    ctx.beginPath();
    ctx.rect(10, 10, 50, 50);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(740, 10, 50, 40);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(770, 568, 20, Math.PI * 2, false);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(10,570);
    ctx.lineTo(60,595);
    ctx.lineTo(60,545);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}


function draw2() {
    ctx.beginPath();
    ctx.rect(10, 10, 50, 50);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(740, 10, 50, 40);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(770, 568, 20, Math.PI * 2, false);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(10,570);
    ctx.lineTo(60,595);
    ctx.lineTo(60,545);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

setInterval(draw, 1000);

setInterval(draw2, 3000);