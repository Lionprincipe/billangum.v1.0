import Language from './Language'
export default class Word {
  constructor(word, type, lang) {
    this.BsClass = 'col-lg-3'
    this.target = '.js-word'
    this.word = word.trim()
    this.type = type || 'word'
    this.translationWords = []
    this.definition = []
    this.lang = lang instanceof Language ? lang : new Language('unknown')
    this.renderWord()
  }

  get() {
    return this
  }

  updateWord(word) {
    word = word.trim()
    this.word = word.length > 0 ? word : this.word
  }

  updateType(type) {
    type = type.trim()
    this.type = type.length > 0 ? type : this.type
  }

  addOneTranslation(word) {
    this.translation =
      word instanceof Word ? [...this.translation, word] : this.translation
  }

  addTranslations(...translations) {
    translations.forEach(translation => this.addOneTranslation(translation))
  }

  updateTranslation(oldTranslation, newTranslation, index) {
    index = index
      ? index
      : this.translation.findIndex(
          e => e.word === oldTranslation.word && e.type === oldTranslation.type
        )
    this.translation =
      newTranslation instanceof Word && index > -1
        ? [
            ...this.translation.slice(0, index),
            newTranslation,
            ...this.translation.slice(0, index + 1),
          ]
        : this.translation
  }

  deleteTranslation(word, index) {
    index = index
      ? index
      : this.translation.findIndex(
          e => e.word === word.word && e.type === word.type
        )
    this.translation =
      word instanceof Word && index > -1
        ? [
            ...this.translation.slice(0, index),
            ...this.translation.slice(0, index + 1),
          ]
        : this.translation
  }
  renderWord() {
    const wordEl = document.createElement('div')
    wordEl.className = this.BsClass
    const wordHtml = `<div class="card bg-light pb-3 text-center m-3">
    <h5 class="card-header  bg-dark text-white">${this.word}</h5> 

</div>`
    wordEl.innerHTML = wordHtml
    document
      .querySelector(this.target)
      .insertAdjacentElement('beforeend', wordEl)
  }
}
