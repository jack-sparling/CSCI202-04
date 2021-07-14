
function bind(){ 
    alert("Really! Try clicking on anything! Especially between the pictures!");
}

// Generate value
function getRandomNumber(maxNum){
    return Math.floor(Math.random() * maxNum);
}

// turn random number into colors
function getRandomColor(){
    const h = getRandomNumber(360);
    const s = getRandomNumber(100);
    const l = getRandomNumber(100);
   
    return `hsl(${h}deg, ${s}%, ${l}%)`;
}

function changeBackground(){
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}

function changeColor(){
    const randomColor = getRandomColor();
    document.getElementById("colorChange").style.color = randomColor;
}

function changeImage(a) {
    document.getElementById("img").src=a;
}

function growImage2(a) {
    document.getElementById("img2").style.width = '600px';
}

function shrinkImage() {
    document.getElementById("img2").style.width = '100px';
}

function getValue() {
    var input = document.getElementById("inputVal").value; 
    if(input<5){
        alert("False, " + input + " is less than 5!");
    }
    else if(input == 5){
        alert("5 is equal to 5");
    }
    else if(input>5){
        alert("True, " + input + " is greater than 5!");
    }
    else{
        alert("That isn't a number!");
    }
  }

  function name() {
      alert("The name of the creator");
  }
