let pictures = ['Portfolio', 'age', 'analog', 'bookLibrary', 'Books', 'bootstrap', 'cartoon', 'form', 'guess', 'login', 'Melody', 'netflix-clone', 'pomodoro', 'space', 'task', 'tic-tac', 'todo', 'tributePage', 'weather']
let i = 0;


function changeImg() {
    document.image.src = `src/img/${pictures[i]}.png`;

    if (i < pictures.length - 1) {
        i++;
    } else {
        i = 0;
    }
    console.log(i);
}

setInterval("changeImg()", 500);

//hide arrow brrowser end

document.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        document.getElementById('down').style.display = "none";
    }
}