import { initModule } from './utils'
import Alphabet from './Alphabet'
import Word from './Word'
const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]
const word = [
  'ABONNIRONS',
  'ABONNIRONT',
  'ABORD',
  'ABORDA',
  'ABORDABLE',
  'ABORDABLES',
  'ABORDAGE',
  'ABORDAGES',
  'ABORDAI',
  'ABORDAIENT',
  'ABORDAIS',
  'ABORDAIT',
  'ABORDAMES',
  'ABORDANT',
  'ABORDAS',
  'ABORDASSE',
  'ABORDASSENT',
  'ABORDASSES',
  'ABORDASSIEZ',
  'ABORDASSIONS',
  'ABORDAT',
  'ABORDATES',
  'ABORDE',
  'ABORDEE',
  'ABORDEES',
  'ABORDENT',
  'ABORDER',
  'ABORDERA',
  'ABORDERAI',
  'ABORDERAIENT',
  'ABORDERAIS',
  'ABORDERAIT',
  'ABORDERAS',
  'ABORDERENT',
  'ABORDEREZ',
  'ABORDERIEZ',
  'ABORDERIONS',
  'ABORDERONS',
  'ABORDERONT',
  'ABORDES',
  'ABORDEUR',
  'ABORDEURS',
  'ABORDEZ',
  'ABORDIEZ',
  'ABORDIONS',
  'ABORDONS',
  'ABORDS',
  'ABORIGENE',
]

new Alphabet('fran8', ...alphabet)
word.forEach(word => new Word(word))
