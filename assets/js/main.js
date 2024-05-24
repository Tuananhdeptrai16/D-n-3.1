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
