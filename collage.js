let allItems=[];
let cross;
let photoInput;
let tools = document.querySelector(".tools");
let allTools = document.querySelectorAll(".tool");

function makeCollage(n){

    back.addEventListener("click", function(){
        containerTwo.innerHTML = "";
        toolBox.classList.add("disable");
        toolBox.classList.add("hide");
        layoutBox.classList.remove("hide");
        back.classList.add("hide");
        faq.classList.remove("hide");
        if(document.querySelector("canvas")){
            document.querySelector("canvas").remove();
        }
    })
      

    let iv = setInterval( function(){
        if(n == document.querySelectorAll(".present").length){ 
            whiteboard(n);
            document.querySelector(".tools").classList.remove("disable");
            clearInterval(iv);
            
        }
  } , 100);

  for(let i = 0; i<allTools.length; i++){
    allTools[i].addEventListener("click", function(e){
        if(tools.classList.contains("disable"))
        alert("Add pictures first!");
    })
}

    

allItems = document.querySelectorAll(".item");
console.log(allItems);

let x;
cross = document.querySelectorAll(".fa-times-circle");

photoInput = document.querySelector("#photo-upload");



for(let i = 0; i<allItems.length; i++){
allItems[i].addEventListener("click", function(e){
    if(!allItems[i].classList.contains("present")){
    //show modal -> absolute
    if(!document.querySelector(".modal")){
    let modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `<div class="camera">
    <i class="fas fa-camera"></i>
</div>
<div class="gallery">
    <i class="fas fa-image"></i>
</div>
<div class="close">
    <i class="far fa-times-circle"></i>
</div>`;

document.querySelector(".content").append(modal);
    }

let camera = document.querySelector(".camera");
let gallery = document.querySelector(".gallery");
let closeIcon = document.querySelector(".close");


camera.addEventListener("click", function(){
    // window.location.assign("camera.html");
    document.querySelector(".modal").remove();
    x = allItems[i];
    appendCamera(x);
    
});

gallery.addEventListener("click", function(){
    x = allItems[i];
    photoInput.click();
    //document.querySelector(".modal").remove();
});


closeIcon.addEventListener("click", function(){
    document.querySelector(".modal").remove();
})


    // photoInput.click();
    // x = allItems[i];
    }
    
});
}


// two.addEventListener("click",function(e){
//     if(!two.classList.contains("present")){
//     photoInput.click();
//     x = two;
//     }
// });

// if(photoInput)
photoInput.addEventListener("change" , function(e){
    console.log(e);
    let fileObject = e.target.files[0];

    let imageUrl = URL.createObjectURL(fileObject);
    x.style.backgroundImage = `url(${imageUrl})`;
    // console.log(imageUrl);
    // let img = document.createElement("img");
    // img.src = imageUrl;
    // img.classList.add("image-upload");
    // x.append(img);
    x.querySelector(".fa-plus").classList.add("hide");
    x.classList.add("present");
    x.querySelector(".fa-times-circle").classList.remove("hide");
    document.querySelector(".modal").remove();
    // console.log(document.querySelector(".modal").classList);
    // document.querySelector(".modal").classList.add("hide");
})



for(let i = 0; i<cross.length; i++){
cross[i].addEventListener("click", function(e){
    console.log(e);
    console.log(e.target.offsetParent);
   // e.target.offsetParent
     let y = e.target.parentElement;
     console.log(y);
     y.style.backgroundImage = `none`;
    //  let image = e.target.nextElementSibling;
    //  console.log(image);
    // image.remove();
    y.classList.remove("present");
    y.querySelector(".fa-plus").classList.remove("hide"); //show '+'
    cross[i].classList.add("hide"); //hide cross
    tools.classList.add("disable"); //?

});
}



}

