document.querySelector('.task-one').onclick = function(event) {
    if ((event.target.tagName === "IMG") && (event.target.classList.contains('changes-img'))) {
        event.target.classList.remove('changes-img')
    }
    else if (event.target.tagName === "IMG") {
       event.target.classList.add('changes-img')
    } 
}