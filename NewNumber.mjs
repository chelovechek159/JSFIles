
let text = 'Secondary schools are usually much larger than primary schools and most children - over 80 percent - go to a comprehensive school at the age of 11. These schools are for all. Pupils do not need (to pass an exam to go to these schools. These schools are large. They have from 1.200 - 2.500 pupils. School lasts all day in the UK, so there is only one shift. In some areas with semi-detachement are there are grammar schools. Pupils must pass special exams to go to these schools.'

let arr = text

arr = arr.replace(/[^\w\s\-]/g, '')

let newArr = arr.split(' ')

newArr = newArr.filter((n) => {return n != '-'}).join(' ')

// newArr = newArr.join(' ')

newArr = newArr.replace(/\s+/g, ' ')

let newWord = newArr.split(' ')

console.log(newWord)

let numb = prompt('какое слово под номером?', newArr.length-1)
alert('под номером ' + numb + ' слово ' + newWord[numb-1])

