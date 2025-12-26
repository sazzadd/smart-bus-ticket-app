console.log("hello");
const selectedSeatEl = document.getElementById("selected-seat")
const totalSeat = document.getElementById("total-booked-seat");

let SelectedSeat = [];
function handleSelectSeat(event) {
  console.log(event.innerText);
  event.classList.add("my-bg-primary");
  event.classList.add("text-white");
  SelectedSeat.push(event.innerText);
  console.log(SelectedSeat);
  totalSeat.innerText = SelectedSeat.length;

  selectedSeatEl.innerHTML = `<li class="flex justify-between text-base font-normal">
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>

  </li>`;
}
