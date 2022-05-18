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

function play(key) {
    var keyElement = document.querySelector(`.key[id="${key}"]`); 
    var audioElement = document.querySelector(`audio[data-key="${key}"]`);
    
    keyElement.classList.add('playing');
    audioElement.currentTime = 0;
    audioElement.play();
}


window.addEventListener('keydown',(e)=>{
    var key = keymap[e.key];
    if (key) {
        play(key);
    }
})  


function clickHandler (key){
    play(key);
}