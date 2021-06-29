let layoutItems = document.querySelectorAll(".row");
let containerTwo = document.querySelector(".container-two");
layoutBox = document.querySelector(".layouts");
toolBox = document.querySelector(".tools");
let faq = document.querySelector(".faq");
let back = document.querySelector(".back");
let galleryBtn = document.querySelector(".my-gallery");
let content = document.querySelector(".content");
let gallery = document.querySelector(".gallery");


for(let i = 0; i<layoutItems.length; i++){
    layoutItems[i].addEventListener("click", function(e){
        //console.log(e);
        let n = e.target.getAttribute("number");
        //console.log(n);
        n = parseInt(n);
        let collage = document.createElement("div");
        collage.classList.add("collage");
        let str = `<div class="change"></div>
        <input type="file" id="photo-upload" class="hide">`;
        for(let j = 0; j<n; j++){
            str += `<div class="${j+1} item">
            <i class="fas fa-plus"></i>
            <i class="fas fa-times-circle hide"></i>
            
        </div>`
        }
        collage.innerHTML = str;
        let direction = e.target.getAttribute("dir");
        if(direction == "horizontal")
        collage.style.flexDirection = 'column';
        
        
        // collage.style.top = "50px";
        // collage.style.left = "50px";

        let allItems = document.querySelectorAll(".item");

 console.log(collage.style.width + " " + collage.style.height + " " + n);

         for(let j = 0; j<allItems.length; j++){
            if(direction == "horizontal"){

                allItems[j].classList.add("landscape");

                allItems[j].style.height = (500 / n) +"px";
                allItems[j].style.width = "200px";
                    }else{
                allItems[j].style.height = "200px";
                allItems[j].style.width = (500 / n) +"px";
                    }
        }      
        
        containerTwo.append(collage);
        layoutBox.classList.add("hide");
        toolBox.classList.remove("hide");
        faq.classList.add("hide");
        back.classList.remove("hide");


        makeCollage(n);
      //  whiteboard();
    });
}

galleryBtn.addEventListener("click", function(){
   window.location.assign("gallery.html");
})