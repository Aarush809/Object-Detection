objects=[];
image_var1="";
status1="";

function preload(){
    image_var1= loadImage("TV.jpg");
}

function setup(){
    canvas = createCanvas(450,600);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";

    
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

function draw(){
    image(image_var1,0,0,640,300);
   if(status!=""){
       for(i=0;i<objects.length;i++){
           document.getElementById("status").innerHTML="Status: Object is detected";
           fill("red");
           Decimal= floor(objects[i].confidence*100);
           text(objects[i].label + " " + Decimal + "%", objects[i].x+15, objects[i].y+15);
           noFill()
           stroke("black");
           rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
           
       }
   }


}