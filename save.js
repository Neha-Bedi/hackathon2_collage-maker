//const html2canvas = require("./html2canvas");

// saveBtn.addEventListener("click", function(){
// 	let imageUrl = wbCanvas.toDataURL("image/png");
// 	console.log(imageUrl);
// })

let saveBtn = document.querySelector(".save");



$(saveBtn).on('click', function () {
	//ss
	//draw on canvas , take height width using getboundingclientrect
	let collage = document.querySelector(".collage");
	for (let j = 0; j < cross.length; j++) {
		cross[j].classList.add("hide");
	}
	html2canvas(collage, {
		allowTaint: true,
		useCORS: true
	}).then(function (canvas) {
		// canvas.width = "500px";
		// canvas.height = "500px";
		//let imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
		let c = canvas.getContext("2d");
		// c.putImageData(imgData, 0, 0);

		// c.beginPath();
		// let start = points.pop();
		//c.moveTo(start.x, start.y);

		// for(let i = 0; i<points.length; i++){
		// 	let pt = points[i];
		// 	if(pt.type == "md"){
		// 		c.beginPath();
		// 		c.moveTo(pt.x, pt.y);
		// 	}
		// 	c.lineTo(pt.x,pt.y);
		//     c.stroke();
		// }

		// points = [];

		// while(points.length>0){
		// 	let pt = points.pop();
		// 	c.lineTo(pt.x,pt.y);
		//     c.stroke();
		// }

		// var anchorTag = document.createElement("a");
		// 	document.querySelector("body").appendChild(anchorTag);
		// 	//document.getElementById("previewImg").appendChild(canvas);
		// 	anchorTag.download = "filename.jpg";
		// 	anchorTag.href = canvas.toDataURL();
		// 	anchorTag.target = '_blank';
		// 	anchorTag.click();
		console.log(canvas.toDataURL("image/jpeg", 0.9));
		//saveMedia(canvas.toDataURL("image/jpeg",0.9));
		let mediaSource = canvas.toDataURL("image/jpeg", 0.9);

		let txn = db.transaction("Media", "readwrite");
		let mediaStore = txn.objectStore("Media");
		let mediaFile = {
			mid: Date.now(),
			mediaSource,
		}
		mediaStore.add(mediaFile);
		window.location.assign("gallery.html");

	});

});