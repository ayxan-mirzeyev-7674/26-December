const convertTime = (ms) => {
  let millisecond = String(ms % 1000).slice(0, 2);
  let second = String(Math.floor(ms / 1000) % 60);
  let minute = String(Math.floor(ms / 1000 / 60));
  console.log(second.length);
  return `${minute.length < 2 ? "0" + minute : minute}:${
    second.length < 2 ? "0" + second : second
  }:${millisecond.length < 2 ? "0" + millisecond : millisecond}`;
};

let mainTime = 0;
let mainInterval;

const start = () => {
  mainInterval = setInterval(() => {
    mainTime += 10;
    document.getElementById("timer").innerHTML = convertTime(mainTime);
  }, 10);
};

const stop = () => {
  clearInterval(mainInterval);
};

const reset = () => {
  mainTime = 0;
  stop();
  document.getElementById("timer").innerHTML = convertTime(mainTime);
};
