console.log("hello");
const selectedSeatEl = document.getElementById("selected-seat");
const totalSeat = document.getElementById("total-booked-seat");
const availableSeatEl = document.getElementById("available-seat");

let SelectedSeat = [];
 let totalPrice = 0;
function handleSelectSeat(event) {
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
}
