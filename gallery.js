let gallery = document.querySelector(".gallery");
let backBtn = document.querySelector(".back-btn");

function showMedia() {
    // assume db is open !!
    let txn = db.transaction("Media", "readonly");
    let mediaStore = txn.objectStore("Media");
    let cursorObject = mediaStore.openCursor();
  
    cursorObject.onsuccess = function (e) {
      let cursor = cursorObject.result;
      if (cursor) {
        let media = cursor.value;
        console.log(media);
        
          appendImage(media);
          cursor.continue();
      }
    };

// let allImgs = document.querySelectorAll(".gallery-item img");
// for(let i = 0; i<allImgs.length; i++){
//     allImgs[i].addEventListener("click", function(){
//         console.log(e);
//     })
//}


  }
  
  let iv = setInterval(function () {
    if (db) {
      showMedia();
      clearInterval(iv);
    }
  }, 100);

  function createMediaDiv() {
    let mediaDiv = document.createElement("div");
    mediaDiv.classList.add("gallery-item"); //jQ
    mediaDiv.innerHTML = ` <div class="media">  </div>
      <div class="media-buttons">
      <div class="download"><i class="fas fa-download"></i></div>
      <div class="delete"><i class="fas fa-trash"></i></div>
      </div>`;
    return mediaDiv;
  }
  
  function appendImage(media) {
    let mediaDiv = createMediaDiv();
    mediaDiv.setAttribute("mid", media.mid);
    let a = document.createElement("a");
    a.setAttribute("href", media.mediaSource);

    let image = document.createElement("img");
    image.src = media.mediaSource;

    a.append(image);
  
    mediaDiv.querySelector(".media").append(a);
    gallery.append(mediaDiv);
  
    mediaDiv.querySelector(".download").addEventListener("click", function () {
      downloadMedia(media);
    });
    mediaDiv.querySelector(".delete").addEventListener("click", function () {
      deleteMedia(media);
    });
  }
  
  
  function deleteMedia(media) {
      let mid = media.mid;
      // DB se remove
      let txn = db.transaction("Media" , "readwrite");
      let mediaStore = txn.objectStore("Media");
      mediaStore.delete(mid);
      
      // UI se remove
      document.querySelector(`div[mid="${mid}"]`).remove();
  }
  
  function downloadMedia(media) {
      let aTag = document.createElement("a");
      
          aTag.download = "image.png";
          aTag.href = media.mediaSource;
          aTag.click();
          aTag.remove();
  }

  backBtn.addEventListener("click", function(){
      window.location.assign("index.html");
  })