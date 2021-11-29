// 搜索框展示及隐藏
let searchBtn = document.querySelector('#search-btn')
let searchBar = document.querySelector('.search-bar-container')

searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-times')
  searchBar.classList.toggle('active')
})

// 登录框展示及隐藏
let formBtn = document.querySelector('#login-btn')
let formClose = document.querySelector('#form-close')
let loginForm = document.querySelector('.login-form-container')

formBtn.addEventListener('click', () => {
  loginForm.classList.add('active')
})

formClose.addEventListener('click', () => {
  loginForm.classList.remove('active')
})

// 手机端导航菜单展示及隐藏
let menuBtn = document.querySelector('#menu-bar')
let navBar = document.querySelector('.navbar')

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('fa-times')
  navBar.classList.toggle('active')
})

// 视频切换
let videoBtn = document.querySelectorAll('.vid-btn')

videoBtn.forEach(i => {
  i.addEventListener('click', () => {
    document.querySelector('.controls .active').classList.remove('active')
    i.classList.add('active')
    let src = i.getAttribute('data-src')
    document.querySelector('#video-slider').src = src
  })
})






// 页面滑动关闭弹窗
window.onscroll = () => {
  console.log(111)
  searchBtn.classList.remove('fa-times')
  searchBar.classList.remove('active')
  menuBtn.classList.remove('fa-times')
  navBar.classList.remove('active')
  loginForm.classList.remove('active')
}


// swiper js
var swiper = new Swiper('.review-slider', {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  breakpoints: {
    640: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
})

var swiper = new Swiper('.brand-slider', {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  breakpoints: {
    450: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    991: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 5
    }
  }
})
