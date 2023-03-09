var baseInput = document.querySelector("#base");
var heightInput = document.querySelector("#height");
var areaInput = document.querySelector("#area");
var calcButtonInput = document.querySelector("#calcButton");

calcButton.addEventListener("click", () => {
    workInput();
});

function workInput() {
    let base = Number(baseInput.value);
    let height = Number(heightInput.value);
    let area = calcTriangleArea(base, height);
    areaInput.value = area + " cm2";
}

function calcTriangleArea(base, height) {
    return (base * height) / 2
}
