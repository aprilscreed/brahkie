document.addEventListener('mousemove', function(e) {
    let lilShit = document.getElementById('lilshit');
    let x = e.clientX;
    let y = e.clientY;
    lilShit.style.left = x + 'px';
    lilShit.style.top = y + 'px';
});
