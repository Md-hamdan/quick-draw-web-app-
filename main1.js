function preload() {
    classifier=ml5.imageClassifier('DoodleNet')
}

function setup() { 
canvas = createCanvas(280, 280); 
canvas.center(); 
background("white"); 
canvas.mouseRealesed(classifyCanvas)
synth=window.speechSynthesis;
}

function draw() {
    strokeWeight(15);
    stroke(0);
    if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY)
    }
}

function classifyCanvas() {
    classifier.classify(canvas,gotResult)
}

function gotResult(error,results) {
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("label").innerHTML="label: "+results[0].label;
        document.getElementById("confidence").innerHTML="confidence: "+Math.round(results[0].confidence*100)+"%";
        utterThis=new SpeechSynthesisUtterance(results[0].label)
        synth.speak(utterThis)
    }
}

function clearCanvas() {
background("white"); 
}