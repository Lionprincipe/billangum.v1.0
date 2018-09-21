export const renderDico = language => {
  input = document.querySelector('input[name ="word"]')
  input.addEventListener('onSubmit', e => {
    language.addOneWordToDictionnary(new Word(input.value))
    input.value = ''
  })
  language.get().dictionnary.forEach(e => {
    e.renderWord()
  })
}
