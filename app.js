function logout(){
    window.location = "Password website.html"
}

function np(){
    window.location = "np1.html"
}
function djf(){
    window.location = "ngh.html"
}
function gff(){
    window.location = "ghj.html"
}

function tlp3(){
    window.location = "lp.html"
}
function op1(){
    window.location = "lp1.html"
}

function preload(){

}
 function setup(){
    
        canvas = createCanvas(500,500);
        canvas.center();
        video = createCapture(VIDEO);
        video.size(400,400);
       
    
        poseNet = ml5.poseNet(video,modelLoaded);
        poseNet.on('pose',gotPose);
    
 }
 
function modelLoaded(){
    console.log("poseNet Is Initialized");
}
function draw(){
    image(video,0,0,400,400);
}
