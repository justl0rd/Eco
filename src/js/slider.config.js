(function () {
    let scrollBar = document.getElementById("technoRange");
    let scrollSliderWrapp = document.querySelector(".technology__slider-items");
    scrollBar.oninput = function () {
        scrollSliderWrapp.style.transform = `translateX(${-scrollBar.value / 100}%)`;
    }
})();
