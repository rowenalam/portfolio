console.log('Hello World, thanks for visitng my portfolio')

function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += 'responsive'
  } else {
    x.className = 'navtoggle'
  }
}