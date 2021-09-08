//  Burger Menu
const burgerItem = document.querySelector(".navigation-burger");
burgerItem.addEventListener("click", () => {
    const navItem = document.querySelector(".navigation-list")
    navItem.classList.toggle("js-navigation-active")
})

//  Swiper index page
new Swiper('.swiper-container.js-partners', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
});