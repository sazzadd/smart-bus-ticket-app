console.log("hello");
const selectedSeatEl = document.getElementById("selected-seat");
const totalSeat = document.getElementById("total-booked-seat");
const availableSeatEl = document.getElementById("available-seat");
const totalPriceEl = document.getElementById("total-price");
const couponInputEl = document.getElementById("coupon-input-field");
const couponBtn = document.getElementById("coupon-btn");

let SelectedSeat = [];
let totalPrice = 0;
function handleSelectSeat(event) {
  const value = event.innerText;
  if (SelectedSeat.includes(value)) {
    return alert("seat alredy booked");
  } else if (SelectedSeat.length < 4) {
    console.log(event.innerText);
    event.classList.add("my-bg-primary");
    event.classList.add("text-white");
    SelectedSeat.push(event.innerText);
    console.log(SelectedSeat);
    totalSeat.innerText = SelectedSeat.length;

    selectedSeatEl.innerHTML += `<li class="flex justify-between text-base font-normal">
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>

  </li>`;

    // decress avvailable seat
    const availableSeatValue = parseFloat(availableSeatEl.innerText);
    console.log(typeof availableSeatValue);
    const newAvailableSeat = availableSeatValue - 1;
    availableSeatEl.innerText = newAvailableSeat;

    // updated price
    totalPrice += 550;
    totalPriceEl.innerText = totalPrice.toFixed(2);

    // active coupon button
    if (SelectedSeat.length > 3) {
      couponInputEl.removeAttribute("disabled");
      couponBtn.removeAttribute("disabled");
    }
  } else {
    alert("maximum seat booked");
  }
}
