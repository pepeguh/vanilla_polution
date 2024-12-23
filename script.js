let valueD = 59000;
let valueC = 1000;
let spanD = document.getElementById("dirty");
let spanC = document.getElementById("clear");
const startDate = new Date("2024-12-20T00:00:00");
const today = new Date();
const hoursElapsed = Math.floor((today - startDate) / (1000 * 60 * 60));
valueD -= hoursElapsed;
valueC += hoursElapsed;
if (valueD == 0 || valueD < 0) {
  valueD = 0;
  valueC = 60000;
}
spanD.innerText = valueD;
spanC.innerText = valueC;
