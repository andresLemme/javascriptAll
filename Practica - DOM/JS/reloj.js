export function digitalClock(clock, btnPlay, btnStop) {
  let clockTempo;

  document.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        document.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      document.querySelector(clock).innerHTML = null;
      document.querySelector(btnPlay).disabled = false;
    }
  });
}

export function alarm(sound, btnPlay, btnStop) {
  let alarmaTempo;
  let alarmaSound = document.createElement("audio");
  alarmaSound.src = sound;

  document.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alarmaTempo = setTimeout(() => {
        alarmaSound.play();
      }, 1000);
      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearTimeout(alarmaTempo);
      alarmaSound.pause();
      alarmaSound.currentTime = 0;
      document.querySelector(btnPlay).disabled = false;
    }
  });
}
