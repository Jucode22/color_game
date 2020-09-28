function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
let numOfSquares = 6;  
let colors = generateRandomColors(numOfSquares);

let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let squares = document.querySelectorAll(".square"); //returns a list of nodes
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easy = document.querySelector("#Easy");
let hard = document.querySelector("#Hard");

easy.addEventListener("click", function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i]
        }else{
            squares[i].style.display = "none";
        }
    }
})

hard.addEventListener("click", function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})
 
reset.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numOfSquares);
    // pick a new random color from array 
    pickedColor = pickColor();
    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for(let i=0; i<squares.length ;i++){
        squares[i].style.backgroundColor = colors[i]; 
    }
    h1.style.backgroundColor = "#232323";
    resetButton.textContent = "New Colors";
    
})

colorDisplay.textContent = pickedColor;
for(let i =0; i<squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];//`rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`;
    // add click event listeners to squares
    squares[i].addEventListener("click",function(){
        // grab the color of clicked square
        let clickedColor = this.style.backgroundColor;
        if (clickedColor == pickedColor){
            messageDisplay.textContent = "Correct!"; 
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again?";
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"; 

        }
    })
}

function changeColors(color){
    //loop through all the squares
    //change the color of all the squares to the correct color
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
}

function generateRandomColors(num){
    //make an array 
    // add num random colors to the array 
    //return array 
    let arr=[];
    
    for (let j = 0; j < num; j++){
        // get random color and pish into array

        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let randColor = `rgb(${r}, ${g}, ${b})`;
    return randColor;
}
// set each square a different color

//set a color for the user to guess and display it on the header

// when the user clicks the correct square he will be alerted that he or she was correct but if he/she is wrong then he will be alerted wrong
