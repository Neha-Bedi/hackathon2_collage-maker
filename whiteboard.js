let points = [];

function whiteboard(n) {
    // let tools = document.querySelector(".tools");
    // let allTools = document.querySelectorAll(".container-one div");


    let collage = document.querySelector(".collage");
    let pen = document.querySelector(".pen");
    let eraser = document.querySelector(".eraser");
    let content = document.querySelector(".content");
    //cross = document.querySelectorAll(".fa-times-circle");
    //undo redo


    let wbCanvas = document.createElement("canvas");



    wbCanvas.height = collage.offsetHeight;
    wbCanvas.width = collage.offsetWidth;
    wbCanvas.style.position = 'absolute';
    wbCanvas.style.top = collage.offsetTop + "px";
    wbCanvas.style.left = collage.offsetLeft + "px";

    document.querySelector(".space").append(wbCanvas);




    let ctx = wbCanvas.getContext("2d");

    let top = wbCanvas.getBoundingClientRect().top;
    let left = wbCanvas.getBoundingClientRect().left;
    let right = wbCanvas.getBoundingClientRect().right;
    let bottom = wbCanvas.getBoundingClientRect().bottom;

    window.addEventListener("resize", function () {
        wbCanvas.style.top = collage.offsetTop + "px";
        wbCanvas.style.left = collage.offsetLeft + "px";
        top = wbCanvas.getBoundingClientRect().top;
        left = wbCanvas.getBoundingClientRect().left;
        right = wbCanvas.getBoundingClientRect().right;
        bottom = wbCanvas.getBoundingClientRect().bottom;

    })

    // if(tools.classList.contains(".disable"))

    pen.addEventListener("click", draw);

    function draw() {
        for (let j = 0; j < cross.length; j++) {
            cross[j].classList.add("hide");
        }

        wbCanvas.style.zIndex = 60;

        let isMouseDown = false;

        wbCanvas.addEventListener("mousedown", function (e) {
            console.log(e.clientX);
            console.log(e.clientY);

            isMouseDown = true;
            let x = e.clientX - left;
            let y = e.clientY - top;
            let point = { x: x, y: y, type: "md" };
            points.push(point);
            ctx.beginPath();
            ctx.moveTo(x, y);

        })

        wbCanvas.addEventListener("mousemove", function (e) {
            if (isMouseDown) {
                let x = e.clientX - left;
                let y = e.clientY - top;
                let point = { x: x, y: y, type: "mm" };
                points.push(point);
                ctx.lineTo(x, y);
                ctx.stroke();

            }
        })

        wbCanvas.addEventListener("mouseup", function (e) {
            isMouseDown = false;
        })
    }

    eraser.addEventListener("click", function () {
        ctx.clearRect(0, 0, wbCanvas.width, wbCanvas.height);
        points = [];
    })

    //sticky


    let stickers = document.querySelector(".stickers");
    let emojis = stickers.querySelectorAll("div");

    // console.log(emojis);
    for (let i = 0; i < emojis.length; i++) {
        let currEmoji = emojis[i];
        currEmoji.addEventListener("click", function (e) {
            console.log(e.target);
            let parent = e.target.parentElement.classList[0];
            let i = e.target.classList;
            //console.log(i);
            appendSticky(parent, i);
        })
    }



    function appendSticky(parent, i) {
        let sticky = document.createElement("div");

        sticky.classList.add("sticky");

        sticky.classList.add(parent);

        let str = `<i class="`;
        // let icon = document.createElement("i");

        for (let j = 0; j < i.length; j++) {
            str += i[j] + " ";
            //icon.classList.add(i[j]);
        }

        str += `"></i>`

        sticky.innerHTML = str;
        collage.append(sticky);

        let initialX;
        let initialY;
        let isStickyHold = false;
        sticky.addEventListener("mousedown", function (e) {
            let x = e.clientX;
            let y = e.clientY;
            initialX = x;
            initialY = y;
            isStickyHold = true;
        });
        sticky.addEventListener("mousemove", function (e) {
            if (isStickyHold) {
                let finalX = e.clientX;
                let finalY = e.clientY;
                let dx = finalX - initialX;
                let dy = finalY - initialY;

                let { top, left } = sticky.getBoundingClientRect();

                sticky.style.top = top + dy + "px";
                sticky.style.left = left + dx + "px";

                initialX = finalX;
                initialY = finalY;
            }

        });
        sticky.addEventListener("mouseup", function(e){
            isStickyHold = false;
        });
        // stickyPad.addEventListener("mousemove", handleMouseMove);
        // stickyPad.addEventListener("mouseup", handleMouseUp);
        // sticky.ondragstart = function () {
        //     return false;
        // };
    }

    // function handleMouseDown(event){

    //     //let stickyPad = event.currentTarget;

    //     let shiftX = event.clientX - sticky.getBoundingClientRect().left + left;
    //     let shiftY = event.clientY - sticky.getBoundingClientRect().top + top; 

    //     moveAt(event.pageX, event.pageY);

    //     function moveAt(pageX, pageY) {
    //         sticky.style.left = pageX - shiftX + 'px';
    //         sticky.style.top = pageY - shiftY + 'px';
    //     }

    //     function onMouseMove(event) {
    //         moveAt(event.pageX, event.pageY);
    //     }

    //     // move the pad on mousemove
    //     document.addEventListener('mousemove', onMouseMove);

    //     // drop the pad, remove unneeded handlers
    //     sticky.onmouseup = function() {
    //         sticky.removeEventListener('mousemove');
    //         sticky.removeEventListener('mousedown');
    //         sticky.onmouseup = null;
    //     };
    // }







    //     let sticky = document.querySelectorAll(".sticky");

    //     for(let j = 0; j<sticky.length; j++){

    //    let currEmoji = sticky[j];

    // }

    let borderSize = document.querySelector("#border-size");
    let borderRadius = document.querySelector("#border-radius");

    borderSize.addEventListener("change", function (e) {
        collage.style.border = `${e.target.value}px solid black`;
    })

    borderRadius.addEventListener("change", function (e) {
        collage.style.borderRadius = `${e.target.value}px`;
    })

    let filters = document.querySelectorAll(".filters>div");
    let changeDiv = document.querySelector(".change");

    for (let i = 0; i < filters.length; i++) {
        filters[i].addEventListener("click", function () {

            for (let j = 0; j < cross.length; j++) {
                cross[j].classList.add("hide");
            }
            // ctx.clearRect(0,0,500,500);
            changeDiv.style.background = filters[i].classList[0];
            changeDiv.style.zIndex = 50;


            // ctx.fillStyle = filters[i].classList[0];
            // ctx.globalAlpha = 0.05;
            // ctx.fillRect(0,0,500,500);


            // collage.style.background = filters[i].classList[0];
            //collage.style.opacity = "0.8";
        })
    }





}



