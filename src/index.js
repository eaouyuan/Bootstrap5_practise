// Import our custom CSS
import './index.scss'
// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'
import Collapse from 'bootstrap/js/dist/collapse'
import Alert from 'bootstrap/js/dist/alert'
import Button from 'bootstrap/js/dist/button'
import Carousel from 'bootstrap/js/dist/carousel'
import Dropdown from 'bootstrap/js/dist/dropdown'
import Tab from 'bootstrap/js/dist/tab'
import Modal from 'bootstrap/js/dist/modal'
import Offcanvas from 'bootstrap/js/dist/offcanvas'

function alertHandler() {
  const alertCustomDiv = document.getElementById('alertCustom');
  document.getElementById('alertCustomBtn').addEventListener('click', () => {
    const alertCustom = new Alert(alertCustomDiv)
    alertCustom.close()
  })
  alertCustomDiv.addEventListener('closed.bs.alert', function () {
    console.log('closed...')
  })

  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  const alertTrigger = document.getElementById('liveAlertBtn')

  function alert(message, type) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    alertPlaceholder.append(wrapper)
  }

  if (alertTrigger) {
    alertTrigger.addEventListener('click', function () {
      alert('Nice, you triggered this alert message!', 'success')
    })
  }
}

function buttonHandler() {
  const button = document.getElementById('myButton')
  const bsButton = new Button(button)
  setTimeout(() => {
    bsButton.toggle()
  }, 2000)
}

function carouselHandler() {
  const myCarousel = document.getElementById('carouselExampleJS')
  const myCarouselBtnPrev = document.getElementById('carouselExampleJSPrev')
  const myCarouselBtnNext = document.getElementById('carouselExampleJSNext')
  const carousel = new Carousel(myCarousel, {
    interval: 2000,
    touch: true
  })

  myCarouselBtnPrev.addEventListener('click', function () {
    carousel.prev()
  })

  myCarouselBtnNext.addEventListener('click', function () {
    carousel.next()
  })


  myCarousel.addEventListener('slide.bs.carousel', function () {
    console.log('slide...')
  })

  myCarousel.addEventListener('slid.bs.carousel', function () {
    console.log('slid')
  })
}

function collapseHandler() {
  const myCollapseBtn = document.getElementById('collapseBtnExampleJS')
  const myCollapse = document.getElementById('collapseExampleJS')
  const bsCollapse = new Collapse(myCollapse, {
    toggle: false
  })

  myCollapseBtn.addEventListener('click', function () {
    bsCollapse.toggle()
  })
}

function renderCollapse(){
  const myCollapseBtn = document.getElementById('collapseBtnExampleJS')
  const myCollapse = document.getElementById('collapseExampleJS')
  const bsCollapse = new Collapse(myCollapse, {
    toggle: false
  })

  myCollapseBtn.addEventListener('click',function(){
    bsCollapse.toggle()
  })
}

function dropdownHandler() {
  const myDropdowneBtn = document.getElementById('dropdownBtn')
  const bsDropdown = new Dropdown(myDropdowneBtn, {
    autoClose: true
  })


  myDropdowneBtn.addEventListener('click', function () {
    bsDropdown.toggle()
  })
}


function tabsHandler() {
  const triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
  triggerTabList.forEach(function (triggerEl) {
    const tabTrigger = new Tab(triggerEl)

    triggerEl.addEventListener('click', function (event) {
      event.preventDefault()
      tabTrigger.show()
    })
  })
}

function modalHandler() {
  const myModalBtn = document.getElementById('exampleModalJSBtn')
  const myModalClosedBtn = document.getElementById('exampleModalJSBtnClose')
  const myModal = document.getElementById('exampleModalJS')

  const myBsModal = new Modal(myModal)

  myModalBtn.addEventListener('click', function () {
    myBsModal.show()
  })

  myModalClosedBtn.addEventListener('click', function () {
    myBsModal.hide()
  })
}


function offcanvasHandler() {
  const myOffcanvasBtn = document.getElementById('offcanvasExampleJSBtn')
  const myOffcanvas = document.getElementById('offcanvasExampleJS')

  const myBsOffcanvas = new Offcanvas(myOffcanvas, {
    backdrop: true
  })

  myOffcanvasBtn.addEventListener('click', function () {
    myBsOffcanvas.toggle()
  })

}

// alertHandler();
// buttonHandler();
// carouselHandler();
// collapseHandler();
// renderCollapse();
// dropdownHandler();
// tabsHandler();
// modalHandler();
// offcanvasHandler()