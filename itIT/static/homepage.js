// 홈페이지 검색버튼 //
const search = document.getElementById('search');
const search_ap = document.querySelector('.search');

search.addEventListener('click', () => {
    search_ap.classList.add('search-appear');
    search_ap.focus();
});

search_ap.addEventListener('blur', () => {
    search_ap.classList.remove('search-appear');
});


////////////////////////홈페이지 동적 이미지 동작//////////////////////////

window.addEventListener('scroll', () => {
    let left_top = document.querySelector('.left-top');
    let left_topPosition = left_top.getBoundingClientRect().top/0.9;
    let screenPosition = window.innerHeight/1.55;
    let value=window.scrollY;

    console.log(value);

    if(left_topPosition < screenPosition) {
        left_top.classList.add('active1');
    } else {
        left_top.classList.remove('active1');
    }
});

window.addEventListener('scroll', () => {
    let left_bottom = document.querySelector('.left-bottom');
    let left_bottomPosition = left_bottom.getBoundingClientRect().top/0.9;
    let screenPosition = window.innerHeight/1.1;
    let value = window.scrollY;

    if(left_bottomPosition < screenPosition) {
        left_bottom.classList.add('active2');
    } else {
        left_bottom.classList.remove('active2');
    }
});


window.addEventListener('scroll', () => {
    let middle_top = document.querySelector('.middle-top');
    let middle_topPosition = middle_top.getBoundingClientRect().top/0.9;
    let screenPosition = window.innerHeight/1.8;

    if(middle_topPosition < screenPosition) {
        middle_top.classList.add('active3');
    } else {
        middle_top.classList.remove('active3');
    }
});


window.addEventListener('scroll', () => {
    let middle_bottom = document.querySelector('.middle-bottom');
    let middle_bottomPosition = middle_bottom.getBoundingClientRect().top/0.9;
    let screenPosition = window.innerHeight/0.9;
    let value = window.scrollY;

    if(middle_bottomPosition < screenPosition) {
        middle_bottom.classList.add('active4');
    } else {
        middle_bottom.classList.remove('active4');
    }
});


window.addEventListener('scroll', () => {
    let right_top = document.querySelector('.right-top');
    let right_topPosition = right_top.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/2.4;

    if(right_topPosition < screenPosition) {
        right_top.classList.add('active5');
    } else {
        right_top.classList.remove('active5');
    }
});


window.addEventListener('scroll', () => {
    let right_bottom = document.querySelector('.right-bottom');
    let right_bottomPosition = right_bottom.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/0.9;

    if(right_bottomPosition < screenPosition) {
        right_bottom.classList.add('active6');
    } else {
        right_bottom.classList.remove('active6');
    }
});


window.addEventListener('scroll', () => {
    let en = document.querySelector('.en')
    let enPosition = en.getBoundingClientRect().top/0.5;
    let screenPosition = window.innerHeight/1.7;

    if(enPosition < screenPosition) {
        en.classList.add('active-en');
    } else {
        en.classList.remove('active-en');
    }
})

window.addEventListener('scroll', () => {
    let ko = document.querySelector('.ko')
    let koPosition = ko.getBoundingClientRect().top/0.5;
    let screenPosition = window.innerHeight/1.7;

    if(koPosition < screenPosition) {
        ko.classList.add('active-en');
    } else {
        ko.classList.remove('active-en');
    }
})
