function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}
function changeCircleColor(color){
    const circle=document.querySelector('.circle');
    circle.style.background = color;
}

function Scroll() {
    document.getElementById('footer').scrollIntoView({behavior:"smooth"})
}

