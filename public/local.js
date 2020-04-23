const btnStart = document.getElementById('btnPlay');
const btnReset = document.getElementById('btnReset');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

var isRunning = false;
var time = 7200;
var copy = 7200;

btnStart.addEventListener("click", ()=>{
  if (!isRunning) {
    isRunning = true;
    decrement();
    btnStart.innerHTML = "PAUSE";
    btnStart.classList.remove("positive");
    btnStart.classList.add("brown");
  }else{
    btnStart.innerHTML = "START";
    btnStart.classList.remove("brown");
    btnStart.classList.add("positive");
    isRunning = false;
  }
});

btnReset.addEventListener("click", ()=>{
  reset();
});

function reset() {
  var hh = Math.floor(copy/60/60);
  var mm = Math.floor((copy/60)%60);
  if (hh < 10) hh = "0"+hh;
  if (mm < 10) mm = "0"+mm;
  hour.innerText = hh;
  minute.innerText = mm;
  second.innerText = "00";
  btnStart.innerHTML = "START";
  btnStart.classList.remove("brown");
  btnStart.classList.add("positive");
  isRunning = false;
  time = copy;
}

function decrement() {
  if (isRunning && time > 0) {
    setTimeout(()=>{
      time--;
      var hou = Math.floor(time/60/60);
      var min = Math.floor((time/60)%60);
      var sec = time % 60;
      if (hou < 10) hou = "0"+hou;
      if (min < 10) min = "0"+min;
      if (sec < 10) sec = "0"+sec;
      hour.innerText = hou;
      minute.innerText = min;
      second.innerText = sec;
      decrement();
    }, 1000);
  }else if (time <= 0) {
      reset();
      hour.innerText = "00";
  }
}

var toggle = false;
const modal = document.getElementById('modal');
const settings = document.getElementById('settings-btn');
settings.addEventListener("click", ()=>{
  if (!toggle) {
    modal.style.display = "block";
    btnStart.disabled = true;
    btnReset.disabled = true;
    toggle = true;
  }else {
    modal.style.display = "none";
    btnStart.disabled = false;
    btnReset.disabled = false;
    toggle = false;
  }
});

document.getElementById('btnOK').addEventListener('click', ()=>{
  if (isRunning) {
    btnStart.innerHTML = "START";
    btnStart.classList.remove("brown");
    btnStart.classList.add("positive");
    isRunning = false;
  }
  var hh = document.getElementById('etHr').value;
  var mm = document.getElementById('etMn').value;
  time = (hh*60*60)+(mm*60);
  copy = time;
  hour.innerHTML = hh;
  minute.innerHTML = mm;
  second.innerHTML = "00";
  modal.style.display = "none";
  btnStart.disabled = false;
  btnReset.disabled = false;
  toggle = false;
});

document.getElementById('year').innerHTML = new Date().getFullYear();
