var prediction1 = "angry";
var prediction2 = "sad";
Webcam.set({
    width : 380,
    height : 275,
    image_format : 'png',
    png_quality : 90
});
var camera = document.getElementById("camera");
Webcam.attach('#camera');
function Snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id = "Image_result" src = "'+data_uri+'"/>';
    })
}

console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BsSeRaEn8/model.json", modelLoaded);
function modelLoaded() {
    console.log("Model Loaded");
}
 function speak() {
     console.log("Started");
     var synth = window.speechSynthesis;
     speak_data = "The first prediction is "+prediction1+" and your second prediction is "+prediction2;
     var utterThis = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterThis);
}