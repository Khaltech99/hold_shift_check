"use strict";
let firstCheck;
let secondCheck;
const markers = document.querySelectorAll(`[type="checkbox"]`);

function clickedStuff(e) {
    let inBetween = false;
    if (!e.shiftKey && this.checked) {
        firstCheck = this;
        console.log(this);
    }

    if (e.shiftKey && this.checked) {
        secondCheck = this;
        console.log(secondCheck);
    }
    if (firstCheck && secondCheck) {
        const mark = Array.from(markers);
        const middles = mark.slice(
            mark.indexOf(firstCheck),
            mark.indexOf(secondCheck)
        );
        middles.forEach((middle) => {
            middle.checked = true;
        });
    }
}
markers.forEach((marker) => {
    marker.addEventListener("click", clickedStuff);
});