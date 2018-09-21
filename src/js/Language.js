import Alphabet from './Alphabet'
import Word from './Word'

export default class Language {
  constructor(name) {
    this.name = name
    this.alphabetList = []
    this.dictionnary = []
    this.categories = [
      {
        name: 'test',
        indexes: [0, 1],
      },
    ]
    this.renderDico()
    this.save()
  }
  get() {
    return this
  }

  updateName(newName) {
    newName = newName.trim()
    this.name = newName.length > 0 ? newName : this.name
  }

  addAlphabet(newAlphabet) {
    this.alphabetList =
      newAlphabet instanceof Alphabet
        ? [...this.alphabetList, newAlphabet]
        : this.alphabetList
  }

  deleteAphabet(alphabet, index) {
    if (alphabet instanceof Alphabet) {
      index = index
        ? index
        : this.alphabetList.findIndex(e => e.name === alphabet.name)
      this.alphabetList = index > -1 && [
        ...this.alphabetList.slice(0, index),
        ...this.alphabetList.slice(0, index + 1),
      ]
    }
  }
  addOneWordToDictionnary(newWord) {
    this.dictionnary =
      newWord.length > 0 &&
      this.dictionnary.findIndex(el => el.name === newWord.trim())
        ? [...this.dictionnary, new Word(newWord)]
        : this.dictionnary
  }
  addWordsToDictionnary(...parameters) {
    parameters.forEach(param => this.addOneWordToDictionnary(param))
  }
  deleteWord(word, index) {
    index = index ? index : this.dictionnary.findIndex(e => e.name === word)
    this.dictionnary = index > -1 && [
      ...this.dictionnary.slice(0, index),
      ...this.dictionnary.slice(0, index + 1),
    ]
  }

  getWordByFirstLetter(firstletter) {
    return this.dictionnary.filter(e => e.word.split('')[0] === firstletter)
  }

  save() {
    this.dictionnary
    localStorage.setItem('Language', JSON.stringify(this.dictionnary))
  }

  load() {
    return JSON.parse(localStorage.getItem('language'))
  }
  onSubmit(event) {
    event.preventDefault()
    this.console.log(input.value)
    this.save(input.value)
    this.addOneWordToDictionnary(new Word('value'))
    input.value = ''
    input.focus()
  }

  renderDico() {
    const input = document.querySelector('input[name=word]')
    input.addEventListener('submit', this.onSubmit)
    this.get().dictionnary &&
      this.get().dictionnary.forEach(e => {
        e.renderWord()
      })
    this.save()
  }
  createCategory(name) {}
}
