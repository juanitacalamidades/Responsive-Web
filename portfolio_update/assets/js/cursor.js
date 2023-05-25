let a_link = document.querySelectorAll(".enfasis");
// Handle mouse over/out event on links
a_link.forEach(e => e.addEventListener('mouseenter', handleMouseEnter));
a_link.forEach(e => e.addEventListener('mouseleave', handleMouseLeave));
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('mousemove', handleMouseMove);
// Move the cursor in dom/window
function handleMouseMove(event) {
    let cursor_top = event.pageY - (cursor.clientHeight / 2);
    let cursor_left = event.pageX - (cursor.clientWidth / 2);
    let circle_top = event.pageY - (circle.clientHeight / 2);
    let circle_left = event.pageX - (circle.clientWidth / 2);
    cursor.style.top = cursor_top + 2 + 'px';
    cursor.style.left = cursor_left + 2 + 'px';
    circle.style.top = circle_top + 'px';
    circle.style.left = circle_left + 'px';
}
// event: mouse enter on link
function handleMouseEnter() {
    cursor.classList.add('hovered');
    circle.classList.add('hovered');
}
// event: mouse leave on link
function handleMouseLeave() {
    cursor.classList.remove('hovered');
    circle.classList.remove('hovered');
}

// event: mouse enter on link
function handleMouseEnter() {
    cursor.classList.add('hovered');
    circle.classList.add('hovered');
}
// event: mouse leave on link
function handleMouseLeave() {
    cursor.classList.remove('hovered');
    circle.classList.remove('hovered');
}