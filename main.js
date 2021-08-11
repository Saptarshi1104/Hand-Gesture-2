prediction = "";

camera = document.getElementById('camera');

Webcam.attach('#camera');

Webcam.set(
{
height: 300,
width: 350,
image_format: 'png',
png_quality: 90
});

function take_snapshot(){
Webcam.snap(function (data_uri)
{
document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
});
}

console.log("ml5 version: " + ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_JtjZnpRD/model.json', modelLoaded);

function modelLoaded(){
console.log('model loaded!');
}

function speak(){
var synth = window.speechSynthesis;
speak_data = "The hand gesture prediction is " + prediction;
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}

function check(){
img = document.getElementById("selfie_image");
classifier.classify(img, gotResult);
}