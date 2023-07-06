<section>
    <h1 id="time-left">60:00</h1>
    <button id="start-btn">Start</button>
    <button id="stop-btn">Stop</button>
    <button id="reset-btn">Reset</button>
</section>
```
CSS Component:
```css
section {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 50px;
}

#time-left {
    font-size: 48px;
    margin-bottom: 20px;
}

button {
    font-size: 24px;
    padding: 10px 20px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#start-btn {
    background-color: #4CAF50;
    color: white;
}

#stop-btn {
    background-color: #f44336;
    color: white;
}

#reset-btn {
    background-color: #555555;
    color: white;
}
```
JavaScript Component:
```javascript
let count = 60 * 60;
let counter;
let isRunning = false;
const timeDisplay = document.getElementById("time-left");

document.getElementById("start-btn").addEventListener("click", function() {
    if (!isRunning) {
        startCountdown();
        isRunning = true;
    }
});

document.getElementById("stop-btn").addEventListener("click", function() {
    clearInterval(counter);
    isRunning = false;
});

document.getElementById("reset-btn").addEventListener("click", function() {
    clearInterval(counter);
    isRunning = false;
    count = 60 * 60;
    displayTime(count);
});

function startCountdown(){
    counter = setInterval(timer, 1000);
}

function timer() {
    count--;
    if (count < 0)
    {
        clearInterval(counter);
        return;
    }
    displayTime(count);
}

function displayTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    timeDisplay.innerHTML = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}
