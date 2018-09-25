
/*
    HANDLING COOKIE CLICKING
                                */
let cookieCount = 0;
let clickPower = 1;

// DOM Variables
let cookieCounter = document.querySelector('#cookie-counter');
let cookieClicker = document.querySelector('#cookie-clicker');

// Updates cookieCounter on click of cookieClicker
cookieClicker.addEventListener("click", () => {
    updateCount(clickPower);
});
// Does math to see how much cookieCount should be incremented by
let updateCount = (amount) => {
    cookieCount += amount;
    cookieCounter.innerHTML = cookieCount;
}
/*
    HANDLING POWER LEVEL STORE
                                */
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

// DOM Variables
let buyClickPower = document.querySelector('#buy-click-power');
let clickPowerPrice = document.querySelector('#click-power-price');
let clickPowerLevel = document.querySelector('#click-power-level');
let clickPowerMultiple = document.querySelector('#click-power-multiple');

// Does math to change the powerClick and updates cookieCount
buyClickPower.addEventListener("click", () => {
    if(cookieCount >= clickPowerPriceAmount) {
        updateCount(-clickPowerPriceAmount);
        updatePowerClick(1);
    }
})

// Updates the power click and changes the store listing
let updatePowerClick = (amount) => {
    clickPowerLevelNumber += amount;
    clickPowerLevel.innerHTML = clickPowerLevelNumber;

    clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);
    clickPowerPrice.innerHTML = clickPowerPriceAmount;

    clickPower += 1;
    clickPowerMultiple.innerHTML = clickPower;
}
