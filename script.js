// getting subhanAllah
const subhanAllahDisplay = document.getElementById("subhanAllahDisplay");
const subhanAllahIncrement = document.getElementById("subhanAllahIncrement");
const subhanAllahDecrement = document.getElementById("subhanAllahDecrement");

// getting alhamdulillah
const alhamdulillahDisplay = document.getElementById("alhamdulillahDisplay");
const alhamdulillahIncrement = document.getElementById("alhamdulillahIncrement");
const alhamdulillahDecrement = document.getElementById("alhamdulillahDecrement");

// getting Allahuakbar
const allahuakbarDisplay = document.getElementById("allahuakbarDisplay");
const allahuakbarIncrement = document.getElementById("allahuakbarIncrement");
const allahuakbarDecrement = document.getElementById("allahuakbarDecrement");

// getting reset button
const reset = document.getElementById("reset");

// logics
let subhanAllahCount = 0;
subhanAllahIncrement.addEventListener("click", () => {
  if (subhanAllahCount < 33) {
    subhanAllahCount++;
    subhanAllahDisplay.innerText = subhanAllahCount;
  }
});
subhanAllahDecrement.addEventListener("click", () => {
  if (subhanAllahCount > 0) {
    subhanAllahCount--;
    subhanAllahDisplay.innerText = subhanAllahCount;
  }
});

let alhamdulillahCount = 0;
alhamdulillahIncrement.addEventListener("click", () => {
  if (alhamdulillahCount < 33) {
    alhamdulillahCount++;
    alhamdulillahDisplay.innerText = alhamdulillahCount;
  }
});
alhamdulillahDecrement.addEventListener("click", () => {
  if (alhamdulillahCount > 0) {
    alhamdulillahCount--;
    alhamdulillahDisplay.innerText = alhamdulillahCount;
  }
});

let allahuakbarCount = 0;
allahuakbarIncrement.addEventListener("click", () => {
  if (allahuakbarCount < 33) {
    allahuakbarCount++;
    allahuakbarDisplay.innerText = allahuakbarCount;
  }
});
allahuakbarDecrement.addEventListener("click", () => {
  if (allahuakbarCount > 0) {
    allahuakbarCount--;
    allahuakbarDisplay.innerText = allahuakbarCount;
  }
});

// reset button
reset.addEventListener("click", () => {
  subhanAllahCount = 0;
  alhamdulillahCount = 0;
  allahuakbarCount = 0;
  subhanAllahDisplay.innerText = 0;
  alhamdulillahDisplay.innerText = 0;
  allahuakbarDisplay.innerText = 0;
});
