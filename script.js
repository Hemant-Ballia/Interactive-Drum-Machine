const pads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

function playSound(pad){

  const audio = pad.querySelector(".clip");

  audio.currentTime = 0;

  audio.play();

  display.innerText = pad.id;

  pad.classList.add("active");

  setTimeout(() => {

    pad.classList.remove("active");

  },100);

}

pads.forEach((pad)=>{

  pad.addEventListener("click",()=>{

    playSound(pad);

  });

});

document.addEventListener("keydown",(e)=>{

  const key = e.key.toUpperCase();

  const audio = document.getElementById(key);

  if(audio){

    const pad = audio.parentElement;

    playSound(pad);

  }

});