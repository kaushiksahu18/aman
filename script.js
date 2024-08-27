import { readFile } from 'fs'

readFile('data.json', 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
})