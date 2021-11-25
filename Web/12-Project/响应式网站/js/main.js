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




// 页面滑动关闭弹窗
window.onscroll = () => {
  searchBtn.classList.remove('fa-times')
  searchBar.classList.remove('active')
  menuBtn.classList.remove('fa-times')
  navBar.classList.remove('active')
  loginForm.classList.remove('active')
}

