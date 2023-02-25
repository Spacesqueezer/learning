let rangeInput = document.getElementById("input-range");
let lengthOutput = document.getElementById("length");
let priceOutput = document.getElementById("price");

rangeInput.oninput = function() {
    let value = (this.value - this.min) / (this.max - this.min) * 100;
    lengthOutput.value = this.value + ' м';
    priceOutput.value = (this.value * 100000).toLocaleString() + ' ₽';

    this.style.background = 'linear-gradient(to right, #FFCF7A ' + value + '%, #646464 ' + value + '%)';
};