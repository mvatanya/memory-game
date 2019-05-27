window.addEventListener("DOMContentLoaded", () => {
    function drawTiles(){
        // grab images container
        var imagesContainer = document.getElementById("images-container");
        // create div and add a class called row
        var rowDiv = document.createElement("div");
        rowDiv.className = "row"
        // append child
        imagesContainer.appendChild(rowDiv);
        var columnDiv = document.createElement("div");
        columnDiv.className = "column"
        rowDiv.appendChild(columnDiv);
        var backImage = document.createElement("img");
        backImage.className = "backImage";
        columnDiv.appendChild(backImage);
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