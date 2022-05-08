
function rotator() {
    const rotatorCase = document.querySelectorAll('.rotator__case');
    let i = 0;
    let speedAttr = Number(rotatorCase[i].dataset.speed);
    let colorAttr = rotatorCase[i].dataset.color;
    rotatorCase[i].style.color = colorAttr;
    let perpetum = function() {
        rotatorCase[i].classList.toggle('rotator__case_active');
        (i === Array.from(rotatorCase).length-1) ? i = 0 : i++;
        speedAttr = Number(rotatorCase[i].dataset.speed);
        colorAttr = rotatorCase[i].dataset.color;
        rotatorCase[i].classList.toggle('rotator__case_active');
        rotatorCase[i].style.color = colorAttr;
        setTimeout(perpetum,speedAttr);
    }
    setTimeout(perpetum,speedAttr);
}

rotator();
