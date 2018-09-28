/*
    HANDLING COOKIE CLICKING
                                */
let cookieCount = 0;
let clickPower = 1;

// DOM Variables
let cookieCounter = document.querySelector('#cookie-counter');
let cookieClicker = document.querySelector('#cookie-clicker');
let image = document.querySelector('.cookie-image');

// Updates cookieCounter on click of cookieClicker
cookieClicker.addEventListener("click", () => {
    updateCount(clickPower);
});

// Does math to see how much cookieCount should be incremented by
let updateCount = (amount) => {
    cookieCount += amount;
    cookieCounter.innerHTML = cookieCount;
    image.classList.remove("drop");
    void image.offsetWidth;
    image.classList.add("drop");
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
    if (cookieCount >= clickPowerPriceAmount) {
        updateCount(-clickPowerPriceAmount);
        updatePowerClick(1);
    }
})

// Updates the power click and changes the store listing
let updatePowerClick = (amount) => {
    clickPowerLevelNumber += amount * Math.floor(clickPowerLevelNumber * 1.05);
    clickPowerLevel.innerHTML = clickPowerLevelNumber;

    clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * Math.pow(1.33, amount));
    clickPowerPrice.innerHTML = clickPowerPriceAmount;

    clickPower += 1;
    clickPowerMultiple.innerHTML = clickPower;
}


/*
    HANDLING GRANDMA STORE
                                */
let grandmaPower = 50 - 10;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;
let grandmaAuto = false;

//declare DOM variables
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');

buyGrandma.addEventListener("click", () => {
    if (cookieCount >= grandmaPriceAmount) {
        updateCount(-grandmaPriceAmount);
        updateGrandma(1);
    }
})

let updateGrandma = (amount) => {
    grandmaLevelNumber += amount;
    grandmaLevel.innerHTML = grandmaLevelNumber;

    grandmaPriceAmount = Math.floor(grandmaPriceAmount * Math.pow(1.33, amount));
    grandmaPrice.innerHTML = grandmaPriceAmount;

    grandmaPower += 10 * amount;
    grandmaMultiple.innerHTML = grandmaPower;
    if (!grandmaAuto) {
        grandmaAuto = true;
        autoGrandmaStart();
    }
}

let autoGrandmaStart = () => {
    let grandmaInt = window.setInterval(() => {
        console.log("Grandma makes: " + grandmaPower);
        updateCount(grandmaPower);
    }, 1000);
}


/*
            FACILITIES
                                */
let facilityAuto = false;
let facilityPower = 2000 - 600;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;

// DOM Variables
let buyFacility = document.querySelector('#buy-facility');
let facilityPrice = document.querySelector('#facility-price');
let facilityLevel = document.querySelector('#facility-level');
let facilityMultiple = document.querySelector('#facility-multiple');

buyFacility.addEventListener("click", () => {
    if (cookieCount >= facilityPriceAmount) {
        facilityUpdate(1);
    }
})

let facilityUpdate = (amount) => {

    facilityLevelNumber += amount;
    facilityLevel.innerHTML = facilityLevelNumber;

    facilityPriceAmount += Math.floor(facilityPriceAmount * Math.pow(1.33, amount));
    facilityPrice.innerHTML = facilityPriceAmount;

    facilityPower += (600 * amount) + Math.floor(facilityLevelNumber * 1.33);
    facilityMultiple.innerHTML = facilityPower;

    if (!facilityAuto) {
        facilityAuto = true;
        autoFacilityStart();
    }
}

let autoFacilityStart = () => {
    let facilityInt = window.setInterval(() => {
        console.log("Facility makes: " + facilityPower);
        updateCount(facilityPower);
    }, 1000);
}
