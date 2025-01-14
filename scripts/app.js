"use strict";

// Selected from DOM
const needleHoursEl = document.querySelector(".hours");
const needleMinuteEl = document.querySelector(".minute");
const needleSecondEl = document.querySelector(".second")
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const loaderEl = document.querySelector(".loader");


// Variables
let nowDate, timeFormat;


// Functions
const handleZero = function(number) {
    if (number < 10) {
        return `0${number}`;
    } else {
        return number;
    }
};

const handleTimeFormat = function(number) {
    if (number > 12) {
        timeFormat = "PM";
        return `0${number - 12}`;
    } else {
        timeFormat = "AM";
        return number;
    }
};

const updateTime = function() {

    setInterval(() => {

        nowDate = new Date();

        needleHoursEl.style.transform = `translate(-50%, -100%) rotate(${(nowDate.getHours() - 12) * 30}deg)`;

        needleMinuteEl.style.transform = `translate(-50%, -100%) rotate(${nowDate.getMinutes() * 6}deg)`;

        needleSecondEl.style.transform = `translate(-50%, -100%) rotate(${nowDate.getSeconds() * 6}deg)`;

        timeEl.innerHTML = `
            ${handleTimeFormat(handleZero(nowDate.getHours()))}:${handleZero(nowDate.getMinutes())}
            <span>${timeFormat}</span>
        `;

        dateEl.innerHTML = `${nowDate.getDate()} ${nowDate.toLocaleDateString("en", {month: "short"})}, ${nowDate.getFullYear()}`;
        
    }, 1000);

};

const updateClock = function() {
    updateTime();
    setTimeout(() => {
        loaderEl.classList.add("hide");
    }, 1000);
};

// Execution
window.addEventListener("load", updateClock);