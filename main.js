function preload(){

}

function setup(){
    canvas=createCanvas(450, 400);
    canvas.center();
    webcam=createCapture(VIDEO);
    webcam.hide();
}

function draw(){
    image(webcam, 0, 0, 450, 400);
}

function take_snapshot(){
    save("image.png");
}