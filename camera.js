function appendCamera(x){
    let cam = document.createElement("div");
    cam.classList.add("cam");
    cam.innerHTML = `<div class="video-container">
    <video autoplay></video>
</div>
<div class="back-cam">
    <i class="fas fa-arrow-alt-circle-left"></i>
</div>
<div class="media-controls">
        <div id="in">+</div>
        <div id="capture-photo">
            <i class="fas fa-camera-retro"></i>
        </div>
        <div id="out">-</div>
    </div>`
    document.querySelector(".space").append(cam);



    let videoPlayer = document.querySelector("video");
    let photoButton = document.querySelector("#capture-photo");
    let zoomIn = document.querySelector("#in");
    let zoomOut = document.querySelector("#out");
    let back = document.querySelector(".back-cam");
    let constraints = {video:true};
    let recordedData;
    let mediaRecorder;
    
    let maxZoom = 3;
    let minZoom = 1;
    let currZoom = 1;
    
    (async function(){
    
        let mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
            videoPlayer.srcObject = mediaStream; 
            mediaRecorder = new MediaRecorder(mediaStream);
    
            photoButton.addEventListener("click", capturePhotos);
    
            zoomIn.addEventListener("click" , function(){
                if(currZoom + 0.1 <= maxZoom){
                  currZoom += 0.1;
                  videoPlayer.style.transform = `scale(${currZoom})`;
                }
              });
              zoomOut.addEventListener("click" , function(){
                if(currZoom - 0.1 >= minZoom){
                  currZoom -= 0.1;
                  videoPlayer.style.transform = `scale(${currZoom})`;
                }
            });
    
    function capturePhotos() {
    
        // photoButton.querySelector("div").classList.add("capture-animate");
        // setTimeout(function(){
        //     photoButton.querySelector("div").classList.remove("capture-animate");
        // },1000);
    
        let canvas = document.createElement("canvas");
        canvas.height = videoPlayer.videoHeight;
        canvas.width = videoPlayer.videoWidth;
        let ctx = canvas.getContext("2d");
    
        // canvas is scaled according to currZoom
      if(currZoom != 1){
        ctx.translate(canvas.width/2 , canvas.height/2);
        ctx.scale(currZoom , currZoom);
        ctx.translate(-canvas.width/2 , -canvas.height/2)
      }
    
          ctx.drawImage(videoPlayer, 0, 0);
          let imageUrl = canvas.toDataURL("image/png"); //canvas object => file url String
    
          document.querySelector(".cam").remove();

          x.style.backgroundImage = `url(${imageUrl})`;
          x.querySelector(".fa-plus").classList.add("hide");
          x.classList.add("present");
          x.querySelector(".fa-times-circle").classList.remove("hide");
          
      }
    
      back.addEventListener("click", function(){
       // window.location.assign("index.html");
       document.querySelector(".cam").remove();
      });
    
    })();


}
