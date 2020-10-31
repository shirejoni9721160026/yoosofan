let element = document.querySelector(".menu-icon");

let toggleStatus = false;
element.addEventListener('click', function () {
    document.querySelector('body').classList.toggle('menu-expand');
    toggleStatus = !toggleStatus;
})

document.addEventListener('click', function () {

});