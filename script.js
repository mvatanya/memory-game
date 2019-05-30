window.addEventListener("DOMContentLoaded", () => {

    function cardTiles(){
        var frontImageFiles = ["gif-1.webp","gif-1.webp","gif-2.webp","gif-2.webp","gif-3.webp","gif-3.webp","gif-4.webp","gif-4.webp","gif-5.webp","gif-5.webp","gif-6.webp","gif-6.webp","","gif-7.webp","gif-7.webp","gif-8.webp","gif-8.webp","gif-9.webp","gif-9.webp","gif-10.webp","gif-10.webp","gif-11.webp","gif-11.webp","gif-12.webp","gif-12.webp"];
        var cardsContainer = document.getElementById("cardsContainer");
        for (var i = 0; i < 25; i++) {
            var memCards = document.createElement("div");
            memCards.className = "memCards" 
            memCards.dataset.nameOfGif = frontImageFiles[i];
            if(i === 12){
                memCards.classList.add("countCard");
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
                backImage.src = "pinkcard.gif"; 
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
    var stopOpenThirdCard = false;
    function openCard(){
        //to prevent the middle card to change
        if(this.dataset.nameOfGif===""){
            return;
        }
        //to prevent open the third card while two cards still opened
        if (stopOpenThirdCard) {
            return;
        }
        //to prevent doubleclick. This has to reset the variables after it's done in the timer below
        if (this === firstCard){
            return;
        }
        this.classList.add('open');
        
        if (!alreadyOpenedCard){
            alreadyOpenedCard = true;
            firstCard = this;
        } else {
            alreadyOpenedCard = false;
            secondCard = this;
            if (firstCard.dataset.nameOfGif === secondCard.dataset.nameOfGif){
                stopOpenThirdCard = true;
                firstCard.removeEventListener('click', openCard);
                secondCard.removeEventListener('click', openCard);
                stopOpenThirdCard = false;
            } else {
                stopOpenThirdCard = true;
                setTimeout(() => {
                    firstCard.classList.remove('open');
                    secondCard.classList.remove('open')
                    stopOpenThirdCard = false;   
                    //to reset from doubleclick prevention
                    alreadyOpenedCard = false;
                    stopOpenThirdCard = false;
                    firstCard = null;
                    secondCard = null;
                }, 1500);
                
            }
        }
    }
 //an imidiately invoked function expression (= this function will be executed as soon as it is defined )   
    (function shuffleCards() {
        var randomArr = []
        for (var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], i = a.length; i--; ) {
            var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
            randomArr.push(random)
        }        
        // console.log(randomArr);
        for (var i = 0; i < 25; i++) {
            gifCards[i].style.order = randomArr[i];
            //console.log(gifCards[i].style.order);
            }
        var temp = gifCards[12].style.order;
        gifCards[12].style.order = 12;
        gifCards[randomArr.indexOf(12)].style.order = temp;
    })();

    gifCards.forEach(card => card.addEventListener('click',openCard))
})    
