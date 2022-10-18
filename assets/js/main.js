window.addEventListener('load', function () {
  const el = document.querySelector('table.sortable th')
  if (el) {
    el.click()
  }
})

let elements = document.querySelectorAll('table.sortable')
stickyThead.apply(elements)