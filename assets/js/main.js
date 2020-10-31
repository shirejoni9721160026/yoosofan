let element = document.querySelector(".menu-icon");

let toggleStatus = false;
element.addEventListener('click', function () {
    console.log("Add Menu");
    document.querySelector('body').classList.add('menu-expand');
    toggleStatus = true;
})

const clickOutSideHandler = (e) => {
    let targetElement = e.target;

    if (!(e.target == element || document.querySelector('.menu-side').contains(targetElement))) {
        document.querySelector('body').classList.remove('menu-expand');
        toggleStatus = false;
    }
};

document.addEventListener('click', clickOutSideHandler);

