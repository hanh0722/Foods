// turn on Notification

const NotifyOn = () =>{
    Notification.requestPermission();   
}
NotifyOn();

// show the list
const listItems = () =>{
    const items = document.querySelector('.list-items i');
    const list = document.querySelector('.box-flow');
    items.addEventListener('click', () =>{
        list.classList.toggle('block');
        items.classList.toggle('rotate');
    })
}
listItems();

// show the navbar of mobile
const mobileNavBar = (item, navbar, layout) =>{
    item.addEventListener('click', () =>{
        navbar.classList.toggle('block-navbar');
        layout.classList.toggle('block-layout');
    })
}
const navBar = () =>{
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.mobile-navbar');
    const layout = document.querySelector('.layout-black');
    const close = document.querySelector(".top-bar .fa-times");
    mobileNavBar(hamburger, navbar, layout);
    mobileNavBar(layout, navbar, layout);
    mobileNavBar(close, navbar, layout);
}
navBar();
// show buttonTop
const scrollTop = () =>{
    const button = document.querySelector('.arrow-top');
    window.addEventListener('scroll', () =>{
        let y = window.pageYOffset;
        y > 100 ? button.classList.add('show-up-button') : button.classList.remove('show-up-button');
    })
    button.addEventListener('click', () =>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
}
scrollTop();

// fixed navbar
const fixNavBar = () =>{
    const navbar = document.querySelector('.nav-bar');
    window.addEventListener('scroll', () =>{
        let y = window.pageYOffset;
        if(y > 100){
            navbar.classList.add('nav-bar-fixed');
        }
        else{
            navbar.classList.remove('nav-bar-fixed');
        }
    })
}
fixNavBar();

