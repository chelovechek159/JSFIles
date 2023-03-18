
/* 1. создал переменную в которую закинул текст и импортировал
 */

// let words = ' jhcbxc Secondary schools are usually much larger than primary schools and most children - over 80 percent - go to a comprehensive school at the age of 11. These schools are for all. Pupils do not need (to pass an exam to go to these schools. These schools are large. They have from 1.200 - 2.500 pupils. School lasts all day in the UK, so there is only one shift. In some areas with semi-detachement are there are grammar schools. Pupils must pass special exams to go to these schools.'

import words from './words.mjs'

let arr = words
// 2. удаляю знаки препинания кроме тире

arr = arr.replace(/[^\w\s\-]/g, '')
let word = arr.split(' ')
// убираю отдельные тире, чтобы оставить двойные слова
word = word.filter((n) => {return n != '-'})

word = word.join(' ')
// 3. удаляю двойные пробелы
word = word.replace(/\s+/g, ' ')
// 4. разбиваю текст на слова
let newWord = word.split(' ')

console.log(newWord)// ввожу нужный номер слова

