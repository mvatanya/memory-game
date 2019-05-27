window.addEventListener("DOMContentLoaded", () => {
    function drawTiles(){
        var imagesContainer = document.getElementById("images-container");
        for (var j = 0; j < 5; j++) {
            var rowDiv = document.createElement("div");
            rowDiv.className = "row" 
            for (var i = 0; i < 5; i++){
                var columnDiv = document.createElement("div");
                columnDiv.className = "column"
                var backImage = document.createElement("img");
                backImage.className = "backImage";
                // backImage.src = "back-imagesContainer.jpg";  
                columnDiv.appendChild(backImage); 
                rowDiv.appendChild(columnDiv);           
            }
            imagesContainer.appendChild(rowDiv);
        }
    }
    drawTiles();
})    


// <!-- <div class="row">
// <div class="column">
//   <img src="gif-1.webp" alt="gif-1" style="width:100%">
// </div>
// <div class="column">
//   <img src="gif-2.webp" alt="gif-2" style="width:100%">
// </div>
// <div class="column">
//   <img src="gif-3.webp" alt="gif-3" style="width:100%">
// </div>
// <div class="column">
//   <img src="gif-4.webp" alt="gif-4" style="width:100%">
// </div>
// <div class="column">
//   <img src="gif-5.webp" alt="gif-5" style="width:100%">
// </div> -->