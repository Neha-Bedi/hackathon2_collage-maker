
let stickers = document.querySelector(".stickers");
let emojis = stickers.querySelectorAll("div");
let currEmoji;
// console.log(emojis);
for(let i = 0; i<emojis.length; i++){
    currEmoji = emojis[i];
    currEmoji.addEventListener("click", function(e){
        console.log(e.target);
        let parent = e.target.parentElement.classList[0];
        let i = e.target.classList;
        //console.log(i);
        appendSticky(parent,i);
    })

//     let isStickyHold = false;
//   let initialX;
//   let initialY;

//   currEmoji.addEventListener("mousedown" , function(e){
//       isStickyHold = true;
//       let x = e.clientX;
//       let y = e.clientY;
//       initialX = x;
//       initialY = y;
//   })

//   currEmoji.addEventListener("mousemove" , function(e){
//     if(isStickyHold){
//         let x = e.clientX;
//         let y = e.clientY;
//         let finalX = x;
//         let finalY = y;

//         let dx = finalX - initialX;
//         let dy = finalY - initialY;

//         // set top and left of sticky
//         // getBoundingClient => top left get kr skte hai but set nhi kr skte
//         let {top , left} = sticky.getBoundingClientRect();

//         sticky.style.top = top + dy + "px";
//         sticky.style.left = left + dx + "px";

//         initialX = finalX;
//         initialY = finalY;
//     }
//   })

// currEmoji.addEventListener("mouseup" , function(){
//       isStickyHold = false;
//   })

 } //for-loop




function appendSticky(parent, i){
    let sticky = document.createElement("div");

    sticky.classList.add("sticky");

    sticky.classList.add(parent);

    let str = `<i class="`;
    // let icon = document.createElement("i");

    for(let j = 0; j<i.length; j++){
        str += i[j] + " ";
        //icon.classList.add(i[j]);
    }

    str += `"></i>`

    sticky.innerHTML=str;
    document.querySelector("body").append(sticky);
}