let imageElement = document.getElementById("image");

let defaultImageWidth = 200;

let errorMessage=document.getElementById('warningMessage');

let imageWidthElement=document.getElementById('imageWidth');

imageElement.style.width=defaultImageWidth+'px';

imageWidthElement.innerHTML=defaultImageWidth+'px';

function increment() {
    defaultImageWidth+=5;
        imageElement.style.width=defaultImageWidth+'px';
        imageWidthElement.innerHTML=defaultImageWidth+'px';
    if(defaultImageWidth > 300) {
        errorMessage.textContent="Too big.Decrease the size of the Image"
    }
    else {
       errorMessage.textContent=""
    }
}
function decrement() {
    defaultImageWidth-=5;
    console.log(defaultImageWidth);
    imageElement.style.width=defaultImageWidth+'px';
    imageWidthElement.innerHTML=defaultImageWidth+'px';
    if(defaultImageWidth < 100) {
        errorMessage.textContent="Can't Visible.Increase the size of the Image"
    }
    else {
        errorMessage.textContent=""
    }
}