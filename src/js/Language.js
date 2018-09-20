import Alphabet from './Alphabet'

export default class Language {
  constructor(name) {
    this.name = name
    this.alphabetList = []
    this.dictionnary = []
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

  deleteAphabet(Alphabet, index) {
    index = index
      ? index
      : this.alphabetList.findIndex(e => e.name === Alphabet.name)

    this.alphabetList = [
      ...this.alphabetList.slice(0, index),
      ...this.alphabetList.slice(0, index + 1),
    ]
  }
}
