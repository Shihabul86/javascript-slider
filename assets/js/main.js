//selector variables
let allSingleImg = document.querySelectorAll('.single-img');
let hwSliderImg = document.querySelectorAll('.hw-slider-img');
let leftArrow = document.querySelectorAll('.left');
let rightArrow = document.querySelectorAll('.right');
let sliderBullet = document.querySelectorAll('.slider-bullet');

let totalAllSingleImg = allSingleImg.length;
//functions
let startPoint = 0
const changeSingleImg = () => {
    if(startPoint != totalAllSingleImg - 1){
        ++startPoint;
    }else{
        startPoint = 0;
    }
    return startPoint;
}
//common function
const repeatFunc = () =>{
    for( let i = 0; i < totalAllSingleImg; i++){
        if(startPoint != i){
            allSingleImg[i].classList.add('d-none');
            sliderBullet[0].children[i].classList.remove('red-border');
        }else{
            allSingleImg[i].classList.remove('d-none');
            sliderBullet[0].children[i].classList.add('red-border');
        }
    }
}
const changeDiv = () => {
    changeSingleImg();
    repeatFunc();
}
let runningItem = setInterval(changeDiv, 2000);
//stop slider
hwSliderImg[0].addEventListener('mouseover', () => {
    clearInterval(runningItem);
})
//run slider
hwSliderImg[0].addEventListener('mouseout', () => {
    runningItem = setInterval(changeDiv, 2000);
})
//leftArrow
leftArrow[0].addEventListener('click', () => {
    startPoint = (startPoint != 0)? --startPoint:totalAllSingleImg-1;
    repeatFunc();
})
//rightArrow
rightArrow[0].addEventListener('click', () => {
    startPoint = (startPoint != totalAllSingleImg-1)? ++startPoint:0;
    repeatFunc();
})

for (let j = 0; j < sliderBullet[0].childElementCount; j++) {
    sliderBullet[0].children[j].addEventListener('click', () => {
        startPoint = j;
        repeatFunc();
    })
}