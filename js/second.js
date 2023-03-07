document.querySelector('#second-task__teast').onmousemove = function(element) {
     console.log(element)
     document.querySelector('.offx').innerHTML = element.offsetX
     document.querySelector('.offy').innerHTML = element.offsetY
}