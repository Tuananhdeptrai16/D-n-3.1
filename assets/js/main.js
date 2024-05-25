const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$('.navigation__li');
const lines = $$('.line');

tabs.forEach((tab, index) => {
    tab.onclick = function () {
        const lineactive = $('.line.active'); // Tìm phần tử có class 'line active'
        lineactive.classList.remove('active'); // Loại bỏ lớp 'active' khỏi phần tử hiện tại
        lines[index].classList.add('active'); // Thêm lớp 'active' cho phần tử line tương ứng
        const tabactive=$('.navigation__li.text__shadow')
        tabactive.classList.remove('text__shadow')
        tab.classList.add('text__shadow')
    }    
});
// javsceipt phan hero 
window.addEventListener('load', ()=> {
    let hero2=$('.hero-img__2')
    hero2.classList.add('slide-down')
    let hero13=$$('.hero-img__1')
    hero13.forEach((hero, index)=> {
        hero.classList.add('slide-down')

    })
   

})
// js phan service 
const btnRight = $('.service__link--right')
const btnLeft = $('.service__link--left')
const listItems = $$('.service-item')
let length=listItems.length
console.log('length :',listItems[0] );
let current = 0

const clickHander =() => {
    if (current == length - 3)
        {
            current=0
        }else{
            current++
            
        }
        let width=listItems[0].offsetWidth + 16;
        listItems.forEach((item, index) => {
            item.style.transform = `translateX(${-width * current}px)`;
        });
}
let handerEvent = setInterval(clickHander, 4000)
btnRight.onclick = function() {
    clearInterval(handerEvent)
    clickHander()
    handerEvent = setInterval(clickHander, 4000)
};
btnLeft.onclick = function () {
    clearInterval(handerEvent)
    if (current==0){
        current = length-1
    }else{
        current--
    }
    let width=listItems[0].offsetWidth + 16;
    listItems.forEach((item, index) => {
        item.style.transform = `translateX(${-width * current}px)`;
    });
    handerEvent = setInterval(clickHander, 4000)

}