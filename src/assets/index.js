var video = document.getElementById('video');

// Get access to the camera!

async function init() {

    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        });
        
    } catch (err) {
        console.log('Error retrieving a media device.');
        console.log(err);
    }
}

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}


var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');

// Trigger photo take
document.getElementById("snap").addEventListener("click", function() {
	context.drawImage(video, 0, 0, 640, 480);
});

init();