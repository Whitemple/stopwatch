
const app = document.getElementById('app');
app.innerHTML = `
<div class="wrapper">
    <div class="container">
        <div class="container__time">
            <span class="container__numbers" id="minValue">00</span>
            <span class="container__numbers" id="secvalue">00</span>
            <span class="container__numbers" id="milisecValue">00</span>
        
        </div>
        <ol class="container__laps"></ol>
        <div class="container__buttons">
            <button type="button" class="container__button" id="startBtn">Start</button>
            <button type="button" class="container__button" id="stopBtn">Stop</button>
            <button type="button" class="container__button" id="lapBtn">Lap</button>
            <button type="button" class="container__button" id="resetBtn">Reset</button>
        </div>
    </div>
</div>
`;

const conteinerTime = document.querySelector('.container__time'),
    containerBtn = document.querySelector('.container__buttons'),
    containerLaps = document.querySelector('.container__laps'),
    minValue = document.getElementById('minValue'),
    secvalue = document.getElementById('secvalue'),
    milisecValue = document.getElementById('milisecValue');
let step = 0,
    start,
    miliseconds,
    seconds,
    minutes;



const startTime = () => {
    clearInterval(start);
    start = setInterval(() => {
        step+=10;
        let date = new Date(step);
        miliseconds =('0'+date.getUTCMilliseconds()).slice(-3,-1);
        seconds = ('0'+date.getUTCSeconds()).slice(-2);
        minutes = ('0'+date.getUTCMinutes()).slice(-2);
        milisecValue.innerText = miliseconds;
        secvalue.innerText = seconds;
        minValue.innerText = minutes;
    },10);
    
};

const stopTime = () => {
    clearInterval(start);
}

const lapTime = () => {
    let li = document.createElement('li');
    if(step === 0){
        return;
    };
    li.innerText = `Lap: ${minutes}:${seconds}:${miliseconds}`;
    containerLaps.appendChild(li);
}

const resetTime = () => {
    clearInterval(start);
    step = 0;
    milisecValue.innerText = '00';
    secvalue.innerText = '00';
    minValue.innerText = '00';
    containerLaps.innerHTML = '';
}


containerBtn.addEventListener('click', (e) => {
    const element = e.target;
    if(element.id === 'startBtn') startTime();
    if(element.id === 'stopBtn') stopTime();
    if(element.id === 'lapBtn') lapTime();
    if(element.id === 'resetBtn') resetTime();
})