let music = new Audio('meow.mp3')
let cats = document.querySelectorAll('.cat')
let meowcounter = 0
let meow = document.getElementById('meow')

cats.forEach(cat => {
    cat.addEventListener('click', function(){
        music.play()
        meowcounter += 1
        meow.innerHTML = 'meow counter : ' + meowcounter
    })
});

document.getElementById('bgmusic').play()