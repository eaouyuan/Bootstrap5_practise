// Import our custom CSS
import './index.scss'
// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'
import 'bootstrap/js/dist/collapse'
import Alert from 'bootstrap/js/dist/alert'
import Button from 'bootstrap/js/dist/button'


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


