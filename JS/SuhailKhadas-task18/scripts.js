function greeting() {
    const input = document.getElementById('greetingInput').value;
    const greettag = document.getElementById('greethead');
    greettag.textContent = 'Hello!'+ input;
   
}
function red() {
    const box1 = document.getElementById('box1');
    box1.style.backgroundColor = 'red';
}
function green() {
    const box2 = document.getElementById('box2');
    box2.style.backgroundColor = 'green';
}
function blue() {
    const box3 = document.getElementById('box3');
    box3.style.backgroundColor = 'blue';
}
function yellow() {
    const box4 = document.getElementById('box4');
    box4.style.backgroundColor = 'yellow';
}

