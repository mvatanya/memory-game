window.addEventListener("DOMContentLoaded", () => {
    // function drawTiles(){
    //     var imagesContainer = document.getElementById("images-container");
    //     for (var j = 0; j < 5; j++) {
    //         var rowDiv = document.createElement("div");
    //         rowDiv.className = "row" 
    //         for (var i = 0; i < 5; i++){
    //             var columnDiv = document.createElement("div");
    //             columnDiv.className = "column"
    //             if(j === 2 && i === 2){
    //                 var countNum = document.createElement("span");
    //                 countNum.className = "countNum";
    //                 countNum.textContent = 0;
    //                 columnDiv.appendChild(countNum);
    //             } else {
    //                 var backImage = document.createElement("img");
    //                 backImage.className = "backImage";
    //                 backImage.src = "back-image.jpg";  
    //                 columnDiv.appendChild(backImage); 
    //             }
    //             rowDiv.appendChild(columnDiv); 
          
    //         }
    //         imagesContainer.appendChild(rowDiv);
    //     }
    // }
    // drawTiles();

    function cardTiles(){
        var frontImageFiles = ["gif-1.webp","gif-1.webp","gif-2.webp","gif-2.webp","gif-3.webp","gif-3.webp","gif-4.webp","gif-4.webp","gif-5.webp","gif-5.webp","gif-6.webp","gif-6.webp","","gif-7.webp","gif-7.webp","gif-8.webp","gif-8.webp","gif-9.webp","gif-9.webp","gif-10.webp","gif-10.webp","gif-11.webp","gif-11.webp","gif-12.webp","gif-12.webp"];
        var cardsContainer = document.getElementById("cardsContainer");
        for (var i = 0; i < 25; i++) {
            var memCards = document.createElement("div");
            memCards.className = "memCards" 
            memCards.dataset.nameOfGif = frontImageFiles[i];
            if(i === 12){
                var countNum = document.createElement("span");
                countNum.className = "countNum";
                countNum.textContent = 0;
                memCards.appendChild(countNum);
            } else {
                var frontImage = document.createElement("img");
                frontImage.className = "frontImage" 
                frontImage.src = frontImageFiles[i];
                var backImage = document.createElement("img");
                backImage.className = "backImage";
                backImage.src = "pinkcard.png"; 
                memCards.appendChild(frontImage); 
                memCards.appendChild(backImage); 
            }
        cardsContainer.appendChild(memCards);    
        }
    };
    cardTiles();

    var count = 0;
    var cardsContainer =  document.getElementById("cardsContainer");
    cardsContainer.addEventListener("click", function(event){
        // console.log("click to try",event);
        // console.log(event.target.className);
        if (event.target.className === "backImage"){
            count++;
        }
        // console.log(count)
        var showCountNumber = document.getElementsByClassName("countNum")[0]
        showCountNumber.textContent = count;
    })

    var gifCards = document.querySelectorAll('.memCards');
    var alreadyOpenedCard = false;
    var firstCard;
    var secondCard;
    function openCard(){
        this.classList.add('open');

        if (!alreadyOpenedCard){
            alreadyOpenedCard = true;
            firstCard = this;
        } else {
            alreadyOpenedCard = false;
            secondCard = this;
            if (firstCard.dataset.nameOfGif === secondCard.dataset.nameOfGif){
                firstCard.removeEventListener('click', openCard);
                secondCard.removeEventListener('click', openCard);
            } else {
                setTimeout(() => {
                    firstCard.classList.remove('open');
                    secondCard.classList.remove('open')
                }, 1500);
            }
        }
    }
    gifCards.forEach(gifCards => gifCards.addEventListener('click',openCard))
})    
