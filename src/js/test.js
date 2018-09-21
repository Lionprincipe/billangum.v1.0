export function test() {
  const input = document.querySelector('input')
  input.addEventListener('onsubmit', e => {
    e.preventDefault()
    console.log(event, 'event')
    console.log(input.value, 'value')
  })
}
