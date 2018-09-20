export default class Alphabet {
  constructor(name, ...characters) {
    this.characters = []
    this.name = name
    this.target = '.js-alphabet'
    this.BsClass = { char: 'badge badge-dark rounded-circle mr-1 display-4 ' }
    characters && this.addChars(...characters)
    this.renderChars()
  }

  get() {
    return {
      name: this.name,
      characters: this.charact,
    }
  }

  addOneChar(char) {
    this.characters =
      char.length === 1 && this.characters.findIndex(el => el === char) === -1
        ? [...this.characters, char]
        : this.characters
  }

  addChars(...parameters) {
    parameters.forEach(param => this.addOneChar(param))
  }

  switchIndexes(firstChar, secondChar) {
    if (
      firstChar.length === 1 &&
      secondChar.length === 1 &&
      firstChar !== secondChar
    ) {
      const firstIndex = this.characters.findIndex(el => el === firstChar)
      const secondIndex = this.characters.findIndex(el => el === secondChar)
      this.updateCharList(firstChar, secondIndex)
      this.updateCharList(secondChar, firstIndex)
    }
  }

  updateCharList(char, index) {
    index = index ? index : this.characters.findIndex(e => char === e)
    this.characters =
      index > -1
        ? [
            ...this.characters.slice(0, index),
            char,
            ...this.characters.slice(index + 1),
          ]
        : [...this.characters, char]
  }

  deleteOneChar(char) {
    const index = this.characters.findIndex(el => el === char)
    if (index > -1) {
      this.characters = [
        ...this.characters.slice(0, index),
        ...this.characters.slice(index + 1),
      ]
    }
  }

  deleteChars(...chars) {
    chars.forEach(char => this.deleteOneChar(char))
  }
  renderChars() {
    this.characters.forEach(char => this.renderChar(char))
  }
  renderChar(char) {
    const charEl = document.createElement('div')
    charEl.className = `char ${this.BsClass.char}`
    charEl.innerHTML = char
    document
      .querySelector(this.target)
      .insertAdjacentElement('beforeend', charEl)
  }
}
