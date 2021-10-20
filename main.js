status="";
objects=[];
img_TV="";
img_mobile="";
img_desk="";
img_bottle="";
img_bedroom="";
img_basket="";
function setup(){
    canvas= createCanvas(640,300);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";

    
}

function preload(){
    img_TV= loadImage("TV.jpg");
    img_mobile= loadImage("phone.jpg");
    img_desk= loadImage("desk.jpg");
    img_basket= loadImage("basket.jpg")
    img_bedroom= loadImage("bedrrom.jpg");
    img_bottle= loadImage("bottle.jpg");
    
}

function modelLoaded(){
    console.log("Model is loaded");
    status= true;
    object_detector.detect(image_var, gotResult);
    
}

function gotResult(error,result){
    if(error){
        console.error(error);
    }
    console.log(result);
    objects=result;
}
