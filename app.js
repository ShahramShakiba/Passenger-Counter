const button = document.getElementById('increment-btn');
const countDowns = document.getElementById('count-el');
const saveBtn = document.getElementById('save-btn');
const saveEl = document.getElementById('save-el');
const resetBtn = document.getElementById('reset-btn');

// initialize the count as 0
let count = 0;

// listen for clicks on the increment button
button.addEventListener('click', increment);
saveBtn.addEventListener('click', save);
resetBtn.addEventListener('click', reset);

// increment the count variable when the button is clicked
function increment() {
  count++;
  countDowns.textContent = count;
}

function save() {
  let saveContainer = ` ${count} - `;
  saveEl.textContent += saveContainer;
  countDowns.textContent = 0;
  return (count = 0);
}

function reset() {
  count = 0;
  countDowns.textContent = count;
  saveEl.textContent = 'Previous entries:';
}
