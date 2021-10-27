const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
    searchInputEl.focus()
})

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused')
    searchInputEl.setAttribute('placeholder','통합검색');
})
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused')
    searchInputEl.setAttribute('placeholder','');
})

const badgeEl = document.querySelector('header .badges')

// window.addEventListener('scroll', function(){
//     if(this.pageYOffset > 1000){
//         badgeEl.style.opacity = 0
//         badgeEl.style.transition = '0.4s'
//     }else {
//         badgeEl.style.opacity = 100
//         badgeEl.style.transition = '0.4s'
//     }
// })
window.addEventListener('scroll', _.throttle(
    function(){
        
        if(window.scrollY > 800){
            // badgeEl.style.opacity = 0
            // badgeEl.style.transition = '0.4s'

            // gsap.to(요소, 지속시간, 옵션)
            gsap.to(badgeEl , 0.6, {
                opacity: 0,
                display: 'none'
            })
        }else {
            gsap.to(badgeEl , 0.6, {
                opacity: 1,
                display: 'block'
            })
        }
    },200
))
// _.throttle(함수, 시간(밀리초 단위))

const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function(event, index) {
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(event, 1, {
        delay:(index + 1) * 0.7,
        opacity:1

    });
 })

//  swiper
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay:true,
    loop:true
});

new Swiper('.promotion .swiper-container', {
    slidesPerView:3, //한번에 보여줄 슬라이드 개수
    spaceBetween:10, // 슬라이드 사이 여백
    centeredSlides:true, // 1번 슬라이드가 가운데 보이기
    loop:true,
    // autoplay: {
    //     delay:5000
    // },
    pagination:{
        el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable:true, //사용자의 페이지 번호 요소 제어 여부
    },
    navigation :{
        prevEl:'.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next',
    }
})
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion
    if (isHidePromotion){
        //숨김 처리!
        promotionEl.classList.add('hide');
    } else {
        //보임 처리
        promotionEl.classList.remove('hide');
    }
})