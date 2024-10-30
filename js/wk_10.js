
document.getElementById('colorBox').addEventListener('click', function () {
    this.style.backgroundColor = this.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
});

document.getElementById('hoverText').addEventListener('mouseover', function () {
    this.textContent = 'You hovered over me!';
});

document.getElementById('hoverText').addEventListener('mouseout', function () {
    this.textContent = 'Hover over me!';
});