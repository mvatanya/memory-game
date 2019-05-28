window.addEventListener("DOMContentLoaded", () => {
    function drawTiles(){
        var imagesContainer = document.getElementById("images-container");
        for (var j = 0; j < 5; j++) {
            var rowDiv = document.createElement("div");
            rowDiv.className = "row" 
            for (var i = 0; i < 5; i++){
                var columnDiv = document.createElement("div");
                columnDiv.className = "column"
                if(j === 2 && i === 2){
                    var countNum = document.createElement("span");
                    countNum.className = "countNum";
                    countNum.textContent = 0;
                    columnDiv.appendChild(countNum);
                } else {
                    var backImage = document.createElement("img");
                    backImage.className = "backImage";
                    backImage.src = "back-image.jpg";  
                    columnDiv.appendChild(backImage); 
                }
                rowDiv.appendChild(columnDiv); 
          
            }
            imagesContainer.appendChild(rowDiv);
        }
    }
    drawTiles();
    var count = 0;
    var imagesContainerElement =  document.getElementById("images-container");
    imagesContainerElement.addEventListener("click", function(event){
        // console.log("click to try",event);
        // console.log(event.target.className);
        if (event.target.className === "backImage"){
            count++;
        }
        // console.log(count)
        var showCountNumber = document.getElementsByClassName("countNum")[0]
        showCountNumber.textContent = count;
    })


    
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