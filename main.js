function preload() {

}

function setup() {
    video = createCapture(VIDEO);
    video.size(300, 300);
   
}

function draw() {
    image(video,500,500,300,300);
}