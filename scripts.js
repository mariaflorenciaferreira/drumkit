const keymap = {
    a: "a",
    s: "s",
    d: "d",
    f: "f",
    g: "g",
    h: "h",
    j: "j",
    k: "k",
    l: "l"  
}

let prevkeyElement, prevaudioElement;

function play(key) {
    if (prevkeyElement !== undefined) {
        prevkeyElement.classList.remove("playing");
        prevaudioElement.pause();

       
    }

    const keyElement = document.querySelector(`.key[id="${key}"]`);
    const audioElement = document.querySelector(`audio[data-key="${key}"]`);
    prevkeyElement = keyElement;
    prevaudioElement = audioElement;

    keyElement.classList.add("playing");
    audioElement.currentTime = 0;
    audioElement.play();

    setTimeout(()=>{
        prevkeyElement.classList.remove("playing")
    },250);
}

window.addEventListener("keydown", (e) => {
    const key = keymap[e.key];
    if (key) {
        play(key);
    }
});

function clickHandler(key) {
    play(key);
}