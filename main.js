 SpeechRecognition= window.webkitSpeechRecognition;
 rec= new SpeechRecognition();
 function startbtn()
 {
     document.getElementById("textbox").innerHTML = "";
     rec.start();
 }
 rec.onresult = function(event) {
     console.log(event);
     Content = event.results[0][0].transcript;
     document.getElementById("textbox").innerHTML = Content;
     console.log(Content);

     if(Content=="take my selfie" )
     {
         console.log("Taking Selfie:")
        speakcomputer();
     }
    
 }

 function speakcomputer(){
    synth = window.speechSynthesis;
    speak_data="Taking Selfie in 5 Seconds";
    utterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
Webcam.attach(camera)

setTimeout(function(){
    take_snapshot()
    save();
}, 5000);

    
 }
camera=document.getElementById("camera");
 Webcam.set({
 width:360,
 height:250,
 image_format:'jpeg',
jpeg_quality:90    
 });

 function take_snapshot()
 {
     Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = "<img id='selfie_img' src='"+ data_uri + " '>"; 

     });
         
     }

     function save()
     {
         link=document.getElementById("link");
         image=document.getElementById("selfie_img").src;
         link.href=image;
         link.click();
     }